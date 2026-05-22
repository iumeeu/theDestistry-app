import { FieldDefinition, } from "sanity";

export const headerTag: FieldDefinition = {
    name: 'headerTag',
    title: 'Header tag',
    type: 'string',
    options: {
        layout: 'radio',
        list: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    initialValue: 'h2',
}
