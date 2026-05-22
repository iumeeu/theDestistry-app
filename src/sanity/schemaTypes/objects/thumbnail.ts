import { defineType } from 'sanity';
export default defineType({
    name: 'thumbnail',
    type: 'image',
    title: 'Thumbnail',
    options: {
        hotspot: true,
    },
    preview: {
        select: {
            imageUrl: "asset.url",
            title: "caption",
            filename: "asset.originalFilename",
            media: "asset",
        },
        prepare({ title, imageUrl, filename, media }) {
            return {
                title: title || filename,
                media,
            };
        }
    },
    fields: [
        {
            name: "caption",
            type: "string",
            title: "Caption",
            description: "A short description of the image",
        },
        {
            name: "alt",
            type: "string",
            title: "Alt text",
            description:
                "Alternative text for screenreaders. Falls back on caption if not set",
        },
    ],

})