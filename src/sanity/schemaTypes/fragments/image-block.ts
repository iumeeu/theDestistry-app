import { defineArrayMember, defineField } from "sanity";
import { IoIosImage } from "react-icons/io";
import { textAlign } from "@/sanity/schemaTypes/fragments/fields/alignment";

export default defineArrayMember({
  type: "image",
  icon: IoIosImage,
  options: {
    hotspot: true,
  },
  fieldsets: [
    { name: "info", options: { collapsible: true, collapsed: true } },
    { name: "options", options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    defineField({
      name: "caption",
      type: "text",
      rows: 2,
      fieldset: "info",
    }),
    defineField({
      name: "alt",
      type: "string",
      fieldset: "info",
    }),
    defineField({
      name: "source",
      type: "url",
      fieldset: "info",
    }),
    defineField({
      name: "loading",
      type: "string",
      options: {
        list: ["lazy", "eager"],
        layout: "radio",
      },
      initialValue: "lazy",
      fieldset: "options",
    }),
    defineField({
      name: "sizes",
      type: "string",
      options: {
        list: [
          {
            title: "mobile_s (320px)",
            value: "mobile_s",
          },
          {
            title: "mobile_m (375px)",
            value: "mobile_m",
          },
          {
            title: "mobile_l (425px)",
            value: "mobile_l",
          },
          {
            title: "sm (640px)",
            value: "sm",
          },
          {
            title: "md (768px)",
            value: "md",
          },
          {
            title: "lg (1024px)",
            value: "lg",
          },
          {
            title: "xl (1280px)",
            value: "xl",
          },
          {
            title: "2xl (1536px)",
            value: "2xl",
          },
          {
            title: "3xl (1920px)",
            value: "3xl",
          },
        ],
        layout: "radio",
      },
      initialValue: "md",
      fieldset: "options",
    }),
    defineField({
      ...textAlign,
      fieldset: "options",
      initialValue: "center",
    }),
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "alt",
      textAlign: "textAlign",
      sizes: "sizes",
      media: "asset",
    },
  },
});
