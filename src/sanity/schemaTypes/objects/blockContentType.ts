import { defineType, defineArrayMember } from "sanity";
import { ImageIcon, LinkIcon } from "@sanity/icons";
import imageBlock from "@/sanity/schemaTypes/fragments/image-block";
import gallery from "@/sanity/schemaTypes/objects/gallery";
import { TextAlign } from "@/sanity/ui/TextAlignComponent";
import { IconAlignLeft2, IconAlignRight2, IconAlignBoxCenterMiddle, IconLink } from '@tabler/icons-react';
/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: "Block Content",
  name: "body",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Left",
            value: "left",
            icon: IconAlignLeft2,
            component: (props) => TextAlign(props),
          },
          {
            title: "Center",
            value: "center",
            icon: IconAlignBoxCenterMiddle,
            component: (props) => TextAlign(props),
          },
          {
            title: "Right",
            value: "right",
            icon: IconAlignRight2,
            component: (props) => TextAlign(props),
          },
        ],
        annotations: [
          {
            type: "object",
            name: "link",
            fields: [
              {
                type: "string",
                name: "href",
                description: "The URL to link to",
              },
            ],
          },
          {
            name: "customLink",
            type: "link",
            title: "Custom link",
            icon: IconLink,
          },
          {
            type: "textColor",
          },
          {
            type: 'highlightColor',
          },
        ],
      },
      // marks: {
      //   annotations: [
      //     // ...,
      // {
      //   type: "textColor",
      // },
      //   ],

      //   decorators: [
      //     { title: "Strong", value: "strong" },
      //     { title: "Emphasis", value: "em" },
      // {
      //   title: "Left",
      //   value: "left",
      //   icon: BsAlignStart,
      //   component: (props) => TextAlign(props),
      // },
      // {
      //   title: "Center",
      //   value: "center",
      //   icon: BsAlignCenter,
      //   component: (props) => TextAlign(props),
      // },
      // {
      //   title: "Right",
      //   value: "right",
      //   icon: BsAlignEnd,
      //   component: (props) => TextAlign(props),
      // },
      //   ],
      // },
    },
    imageBlock,
    { type: 'customTable' },
    {
      type: "gallery",
    },

    {
      type: 'horizontal.content',
    },

  ],
});
