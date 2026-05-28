import { defineField, defineType } from 'sanity'
export const localizedMetadataType = defineType({
    name: 'localizedMetadata',
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
                    return doc.metadata?.title.en || doc.metadata?.title.th
                },
                slugify: async (input) => {

                    const slug = input?.toLowerCase().replace(/\s+/g, '-').slice(0, 200)

                    return slug
                },
            },
            // validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            type: 'localeString',

            // validation: (Rule) => Rule.max(60).warning(),

        }),
        defineField({
            name: 'description',
            type: 'localeText',
            // validation: (Rule) => Rule.max(160).warning(),
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
        defineField({
            name: "keywords"
            , type: "array"
            , of: [{ type: "string" }]
            , description: "Keywords for SEO"
        }),


    ],
})
