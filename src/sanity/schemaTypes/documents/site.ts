import { defineType } from "sanity";

export default defineType({
    name: "site",
    title: "Site",
    type: "document",
    fields: [
        {
            name: "metadata",
            type: "metadata",
        },
        {
            name: "heroBanner",
            title: "Hero banner",
            type: 'array',
            of: [{ type: 'image' }],
        }
    ],
    preview: {
        prepare: () => ({
            title: 'Site settings',
        }),
    },
})