import { groq } from 'next-sanity'
import { SlugValidationContext } from 'sanity'
import type {
	Divider,
	ListItem,
	ListItemBuilder,
	StructureBuilder,
} from 'sanity/structure'


export async function isUniqueOtherThanLanguage(slug: string, context: SlugValidationContext) {
	const { document, getClient } = context
	if (!document?.language) {
		return true
	}

	const client = getClient({ apiVersion: '2023-04-24' })
	const id = document._id.replace(/^drafts\./, '')
	const params = {
		draft: `drafts.${id}`,
		published: id,
		language: document.language,
		slug,
	}

	const query = groq`!defined(*[!(_id in [$draft, $published]) && metadata.slug.current == $slug && language == $language][0]._id)`
	const result = await client.fetch(query, params)
	
return result
}

export const singleton = (
	S: StructureBuilder,
	id: string,
	title?: string,
): ListItemBuilder =>
	S.listItem()
		.id(id)
		.title(
			title ||
			id
				.split(/(?=[A-Z])/)
				.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' '),
		)
		.child(S.editor().id(id).schemaType(id).documentId(id))

export const group = (
	S: StructureBuilder,
	title: string,
	items: (ListItemBuilder | ListItem | Divider)[],
): ListItemBuilder =>
	S.listItem().title(title).child(S.list().title(title).items(items))

/**
 * Return the text of a block type as a single string. Use in schema previews.
 */
export function getBlockText(
	block?: {
		children?: {
			text: string
		}[]
	}[],
	lineBreakChar: string = '↵ ',
) {
	return (
		block?.reduce((a, c, i) => {
			const text = c.children?.flatMap((c) => c.text).join('') || ''
			
return a + text + (i !== block.length - 1 ? lineBreakChar : '')
		}, '') || ''
	)
}

export function count(
	arr: Array<any>,
	singular: string = 'item',
	plural?: string,
) {
	return `${arr?.length || 0} ${arr?.length === 1 ? singular : plural || singular + 's'}`
}
