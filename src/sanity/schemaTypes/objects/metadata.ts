import { defineField, defineType } from 'sanity'
import { isUniqueOtherThanLanguage } from '@/sanity/utils';

function toThaiSlug(inputString: string) {
	// Replace spaces with hyphens
	let slug = inputString.replace(/\s+/g, "-");

	// Translate some characters to Thai
	slug = slug.replace("%", "เปอร์เซนต์");

	// Remove all non-word characters
	// slug = slug.replace(/[^\p{L}\p{N}\s-]/gu, "");

	// Replace multiple hyphens with a single one
	slug = slug.replace(/--+/, "-");

	// Remove any remaining leading or trailing hyphens
	slug = slug.replace(/^-+|-+$/g, "");

	// remove ?
	slug = slug.replace(/\?/g, "");

	// remove /
	slug = slug.replace(/\//g, "-");

	// Convert to lowercase
	slug = slug.toLowerCase();

	return slug;
}


export default defineType({
	name: 'metadata',
	title: 'Metadata',
	description: 'For search engines',
	type: 'object',
	fields: [
		defineField({
			// should match 'languageField' plugin configuration setting, if customized
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),

		defineField({
			name: 'slug',
			type: 'slug',
			// description: 'URL path / permalink. Use "index" for the homepage.',
			options: {
				source: (doc: any) => {
					return doc.title || doc.metadata.title
				},
				isUnique: isUniqueOtherThanLanguage,
				slugify: async (input: string) => {
					// const translated = await translate(input, { to: 'th' });
					// return translated.text;
					return toThaiSlug(input);
				},
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.max(60).warning(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 3,
			validation: (Rule) => Rule.max(160).warning(),
		}),
		defineField({
			name: "keywords"
			, type: "array"
			, of: [{ type: "string" }]
			, description: "Keywords for SEO"
		}),
		defineField({
			name: 'image',
			description: 'Used for social sharing previews',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'noIndex',
			description: 'Prevent search engines from indexing this page',
			type: 'boolean',
			initialValue: false,
		}),


	],
})
