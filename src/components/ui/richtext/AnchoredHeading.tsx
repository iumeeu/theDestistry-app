import { slug } from "@/utils";
import type {
  PortableTextBlock,
  PortableTextComponentProps,
} from "next-sanity";
import { JSX } from "react";

export default function AnchoredHeading({
  as: Tag,
  children,
  value,
}: {
  as: keyof JSX.IntrinsicElements;
} & PortableTextComponentProps<PortableTextBlock>) {
  const id = slug(value.children.reduce((acc, { text }) => acc + text, ""));

  return (
    <Tag id={id} className="group scroll-mt-28">
      {children}
      <a className="!no-underline md:hidden" href={`#${id}`}></a>
    </Tag>
  );
}
