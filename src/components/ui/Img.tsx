"use client";

import {
  useNextSanityImage,
  type UseNextSanityImageOptions,
} from "next-sanity-image";
import { stegaClean } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const SIZES = [
  120, 240, 360, 480, 640, 720, 800, 880, 960, 1280, 1440, 1600, 1800, 2000,
];

export default function Img({
  image,
  imageWidth,
  imageSizes = SIZES,
  alt = "",
  options,
  ...props
}: {
  image: Sanity.Image | undefined;
  imageWidth?: number;
  imageSizes?: number[];
  options?: UseNextSanityImageOptions;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const imageProps = useNextSanityImage(
    client,
    image,
    imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
  );

  if (!image?.asset || !imageProps) return null;

  const { src, width, height } = imageProps;

  return (
    <img
      src={src}
      {...generateSrcset(image, { width: imageWidth, sizes: imageSizes })}
      width={width}
      height={height}
      alt={image.alt || alt}
      loading={stegaClean(image.loading) || "lazy"}
      decoding="async"
      {...props}
    />
  );
}

export function Source({
  image,
  imageWidth,
  imageSizes = SIZES,
  options,
  media = "(max-width: 768px)",
}: {
  image: Sanity.Image | undefined;
  imageWidth?: number;
  imageSizes?: number[];
  options?: UseNextSanityImageOptions;
  media?: string;
}) {
  const imageProps = useNextSanityImage(
    client,
    image,
    imageWidth ? { imageBuilder: (b) => b.width(imageWidth) } : options,
  );

  if (!image?.asset || !imageProps) return null;

  const { width, height } = imageProps;

  return (
    <source
      {...generateSrcset(image, { width: imageWidth, sizes: imageSizes })}
      width={width}
      height={height}
      media={media}
    />
  );
}

function generateSrcset(
  image: Sanity.Image,
  {
    width,
    sizes = SIZES,
  }: {
    width?: number;
    sizes: number[];
  },
) {
  const filtered = sizes.filter((size) => !width || size <= width);

  return {
    srcSet:
      filtered
        .map(
          (size) =>
            `${urlFor(image).width(size).auto("format").url()} ${size}w`,
        )
        .join(", ") || undefined,

    sizes:
      filtered
        .map(
          (size, i) =>
            `${i < filtered.length - 1 ? `(max-width: ${size + 1}px) ` : ""}${size}px`,
        )
        .join(", ") || undefined,
  };
}
