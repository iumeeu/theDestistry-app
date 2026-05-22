import { defineArrayMember, defineField, defineType } from "sanity";
import { VscEdit } from "react-icons/vsc";
import imageBlock from "../fragments/image-block";

export default defineType({
  name: "service.post",
  title: "Service post",
  icon: VscEdit,
  type: "document",
  // options: {
  //   // show language filter for this document type, regardless of how documentTypes for the plugin is configured
  //   languageFilter: true,
  // },
  groups: [
    { name: "content", default: true },
    { name: "options" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "title",
      type: "string",
      group: "content",
    }),
    // defineField({
    //   name: "body",
    //   type: "body",
    //   group: "content",
    // }),
    // defineField({
    //   name: "modules",
    //   description: "Page content",
    //   type: "array",
    //   of: [
    //     { type: "hero" },
    //     { type: "hero.saas" },
    //     { type: "hero.split" },
    //     { type: "show-contact-us-detail" },
    //     { type: "case-review" },
    //     { type: "accordion-list" },
    //     { type: "richtext-module" },
    //     { type: "show-service-list" },
    //   ],
    //   group: "content",
    // }),
    defineField({
      name: "body",
      type: "body",
      group: "content",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog.category" }],
        },
      ],
      group: "content",
    }),
    defineField({
      name: "authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
      group: "content",
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      group: "content",
    }),
    defineField({
      name: "publishDate",
      type: "date",
      validation: (Rule) => Rule.required(),
      group: "content",
      initialValue: () => new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      group: "options",
      initialValue: false,
    }),
    // defineField({
    //   name: "hideTableOfContents",
    //   type: "boolean",
    //   group: "options",
    //   initialValue: false,
    // }),
    defineField({
      name: "metadata",
      type: "metadata",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      featured: "featured",
      title: "title",
      publishDate: "publishDate",
      slug: "metadata.slug.current",
      media: "thumbnail",
      lang: "language",
    },
    prepare: ({ title, publishDate, slug, media, featured, lang }) => ({
      title: [featured && "★", title].filter(Boolean).join(" "),
      subtitle: [publishDate || "No date", `(${lang.toUpperCase()})`, slug && `/${slug}`]
        .filter(Boolean)
        .join(" — "),
      media,
    }),
  },
  orderings: [
    {
      title: "Date",
      name: "date",
      by: [{ field: "publishDate", direction: "desc" }],
    },
    {
      title: "Title",
      name: "metadata.title",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
