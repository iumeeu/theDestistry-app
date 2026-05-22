import { dev } from '../env'
// import { draftMode } from 'next/headers'
import type { QueryParams, QueryOptions } from 'next-sanity'
import { client } from './client'

export { groq } from 'next-sanity'

export async function fetchSanity<T>(
	query: string,
	{
		params = {},
		...next
	}: {
		params?: QueryParams
	} & QueryOptions['next'] = {},
) {
	// const isDraft = (await draftMode()).isEnabled
	const preview = dev

	return client.fetch<T>(
		query,
		params,
		preview
			? {
				// stega: true,
				// perspective: 'previewDrafts',
				useCdn: false,
				perspective: 'published',
				token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
				next: {
					revalidate: 3600,
					...next,
				},
			}
			: {
				perspective: 'published',
				useCdn: true,
				next: {
					revalidate: 10, // every hour
					// revalidate: 3600, // every hour
					...next,
				},
			},
	)
}
