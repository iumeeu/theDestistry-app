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
      type: "localeString",
      title: "Name",
      group: "content",
    }),

    defineField({
      name: "nickname",
      type: "localeString",
      title: "Nickname",
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
          { title: "สาขา รังสิต", value: "สาขา รังสิต" },

        ],
      },
    }),
    defineField({
      name: "role",
      type: "localeString",
      title: "Role",
      group: "content",
    }),

    
    defineField({
      name: "description",
      type: "localeText",
      title: "Description",
      group: "content",
    }),



    defineField({
      name: "education",
      type: "array",
      title: "Education",
      of: [
        {
          type: "localeString",
        },
      ],
      group: "content",
    }),

    defineField({
      name: "speciality",
      type: "array",
      title: "Speciality",
      of: [
        {
          type: "localeString",
        },
      ],
      group: "content",
    }),

    defineField({
      name: "training",
      type: "localeText",
      title: "Training",
      group: "content",
    }),


    defineField({
      name: "phone",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "body",
      type: "localizedBlockContent",
      title: "Body",
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
      type: "localizedMetadata",
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
      title: [featured && "★", title?.th || title?.en].filter(Boolean).join(" "),
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
      by: [{ field: "metadata.title", direction: "asc" }],
    },
  ],
  initialValue: async (getUrl, { getClient }) => {
    // ใช้ client version ล่าสุดดึงข้อมูล
    const client = getClient({ apiVersion: '2023-01-01' })

    const query = `count(*[_type == "teams" && !(_id in path("drafts.**"))])`
    const totalCount = await client.fetch(query)

    return {
      // ตัวเลขลำดับใหม่ = จำนวนปัจจุบัน + 1 (เช่น มีอยู่ 4 อัน อันใหม่จะได้เลข 5)
      order: totalCount + 1,
      publishDate: new Date().toISOString(),
    }
  },
});
