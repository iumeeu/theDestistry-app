import { defineField, defineType } from "sanity";

export default defineType({
    name: 'tags',
    title: 'Tags',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
			name: 'metadata',
			type: 'metadata',
		}),
    ],
   
})    