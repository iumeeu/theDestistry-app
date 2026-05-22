import { defineField, defineType } from "sanity";

export default defineType({
  name: "teams",
  title: "Teams",
  type: "document",
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
      name: "order",
      description: "Order of the team member in the list",
      type: "number",
      group: "content",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Name (Thai)",
      group: "content",
    }),
    defineField({
      name: "titleEn",
      type: "string",
      title: "Name (English)",
      group: "content",
    }),

    defineField({
      name: "nickname",
      type: "string",
      title: "Nickname (Thai)",
      group: "content",
    }),
    defineField({
      name: "nicknameEn",
      type: "string",
      title: "Nickname (English)",
      group: "content",
    }),
    defineField({
      name: "branch",
      title: "Branch",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      options: {
        layout: "list",
        list: [
          { title: "สาขา รามอินทรา กม.14", value: "สาขา รามอินทรา กม.14" },
          {
            title: "สาขา สาขารัชดา-ลาดพร้าว",
            value: "สาขา สาขารัชดา-ลาดพร้าว",
          },
        ],
      },
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role (Thai)",
      group: "content",
    }),
    defineField({
      name: "roleEn",
      type: "string",
      title: "Role (English)",
      group: "content",
    }),

    defineField({
      name: "education",
      type: "array",
      title: "Education (Thai)",
      of: [
        {
          type: "string",
        },
      ],
      group: "content",
    }),
    defineField({
      name: "educationEn",
      type: "array",
      title: "Education (English)",
      of: [
        {
          type: "string",
        },
      ],
      group: "content",
    }),
    defineField({
      name: "speciality",
      type: "array",
      title: "Speciality (Thai)",
      of: [
        {
          type: "string",
        },
      ],
      group: "content",
    }),
    defineField({
      name: "specialityEn",
      type: "array",
      title: "Speciality (English)",
      of: [
        {
          type: "string",
        },
      ],
      group: "content",
    }),
    defineField({
      name: "training",
      type: "text",
      title: "Training (Thai)",
      group: "content",
    }),
    defineField({
      name: "trainingEn",
      type: "text",
      title: "Training (English)",
      group: "content",
    }),
    
    defineField({
      name: "phone",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "body",
      type: "body",
      title: "Body (Thai)",
      group: "content",
    }),
    defineField({
      name: "bodyEn",
      title: "Body (English)",
      type: "body",
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

    defineField({
      name: "metadata",
      type: "metadata",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      featured: "featured",
      title: "metadata.title",
      publishDate: "publishDate",
      slug: "metadata.slug.current",
      media: "metadata.image",
      order: "order",
    },
    prepare: ({ title, publishDate, slug, media, featured, order }) => ({
      title: [featured && "★", title].filter(Boolean).join(" "),
      subtitle: [
        `ลำดับ ${order ?? "-"}`,
        publishDate || "No date",
        slug && `/${slug}`,
      ]
        .filter(Boolean)
        .join(" — "),
      media,
    }),
  },
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
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
