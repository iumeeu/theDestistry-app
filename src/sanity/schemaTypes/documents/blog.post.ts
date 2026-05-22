import { defineArrayMember, defineField, defineType } from "sanity";
import { VscEdit } from "react-icons/vsc";
import imageBlock from "../fragments/image-block";

export default defineType({
  name: "blog.post",
  title: "Blog post",
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
      name: "metadata",
      type: "metadata",
      group: "seo",
    }),
    defineField({
      name: "body",
      type: "body",
      // of: [
      // 	{ type: 'block' },
      // 	imageBlock,
      // 	defineArrayMember({
      // 		type: 'code',
      // 		options: {
      // 			withFilename: true,
      // 		},
      // 	}),
      // 	{
      // 		type: 'custom-html',

      // 	},
      // 	{
      // 		type: "gallery"
      // 	}

      // ],
      group: "content",
    }),
    defineField({
      name: "tags",
      type: "array",
      group: "content",
      of: [
        {
          type: "reference",
          to: [{ type: "tags" }],
        },
      ],
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
      name: "featured",
      type: "boolean",
      group: "options",
      initialValue: false,
    }),
    defineField({
      name: "hideTableOfContents",
      type: "boolean",
      group: "options",
      initialValue: false,
    }),

    defineField({
      name: "publishDate",
      type: "date",
      validation: (Rule) => Rule.required(),
      group: "content",
      initialValue: () => new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
      group: "content",
      validation: (Rule) => {
        if (Rule.required()) {
          return Rule.min(0).integer();
        }

        return Rule.positive().integer();
      },
    }),
  ],
  preview: {
    select: {
      featured: "featured",
      title: "metadata.title",
      publishDate: "publishDate",
      slug: "metadata.slug.current",
      media: "metadata.image",
      lang: "language",
    },
    prepare: ({ title, publishDate, slug, media, featured, lang }) => ({
      title: [featured && "★", `(${lang.toUpperCase()})`, title]
        .filter(Boolean)
        .join(" "),
      subtitle: [publishDate || "No date", slug && `/${slug}`]
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
