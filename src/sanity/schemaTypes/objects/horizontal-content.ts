import { getBlockText } from '@/sanity/utils';
import { defineField, defineType } from 'sanity';
export default defineType({
    name: 'horizontal.content',
    title: 'Horizontal Content',
    type: 'object',
    groups: [
        { name: 'content', },
        { name: 'image' },
        { name: 'options' },
    ],
    fields: [
        defineField({
            name: 'uid',
            title: 'Unique Identifier',
            type: 'uid',
            group: 'options',
        }),
        defineField({
            name: 'content',
            type: 'body',
            // of: [{ type: 'block' }, reputationBlock],
            group: 'content',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                }),
                defineField({
                    name: 'onRight',
                    type: 'boolean',
                    description: 'Display to the right of the content on desktop',
                    initialValue: false,
                }),
                defineField({
                    name: 'onBottom',
                    type: 'boolean',
                    description: 'Display below the content on mobile',
                    initialValue: false,
                }),
                defineField({
                    name: 'loading',
                    type: 'string',
                    options: {
                        list: ['lazy', 'eager'],
                        layout: 'radio',
                    },
                    initialValue: 'lazy',
                }),
            ],
            group: 'image',
        }),
    ],
    preview: {
        select: {
            content: 'content',
            media: 'image.asset',
            position: 'image.onRight',
        },
        prepare: ({ content, media, position }) => ({
            title: getBlockText(content),
            subtitle: position ? 'Image on right' : 'Image on left',
            media,
        }),
    },
})