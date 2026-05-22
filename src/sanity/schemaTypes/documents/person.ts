import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'person',
	title: 'Person',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
})
