import { supportedLanguages } from '@/lib/i18n'
import { defineField, defineType } from "sanity";

export default defineType({
  name: "localizedBlockContent",
  title: "Localized Block Content",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: "body",
      fieldset: lang.isDefault ? undefined : "translations",
    }),
  ),
});
