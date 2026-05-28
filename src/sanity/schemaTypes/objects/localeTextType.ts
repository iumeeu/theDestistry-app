import { supportedLanguages } from '@/lib/i18n'
import { defineType, defineField } from 'sanity'

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.


export const baseLanguage = supportedLanguages.find(l => l.isDefault)

export const localeText = defineType({
    title: 'Localized text',
    name: 'localeText',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'text',
        fieldset: lang.isDefault ? undefined : 'translations'
    }))
})