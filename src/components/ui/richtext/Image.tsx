import Img from "@/components/ui/Img";
import { cn } from "@/utils";
import { stegaClean } from "next-sanity";

const sizeToWidth: Record<string, number> = {
  mobile_s: 320,
  mobile_m: 375,
  mobile_l: 425,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
};

export default function Image({
  value,
}: {
  value: Sanity.Image & {
    caption?: string;
    source?: string;
    float?: "left" | "right";
  };
}) {
  const width = value.sizes ? sizeToWidth[value.sizes] : 1500;

  return (
    <figure
      className=" !mb-4 !mt-8 space-y-2 text-center md:![grid-column:bleed]"
      style={{ float: stegaClean(value.float) }}
    >
      <Img
        className={cn(
          "mx-auto max-h-svh w-auto bg-neutral-100 text-[0px]",
          value.textAlign === "center" && "block mx-auto",
          value.textAlign === "left" && "float-left",
          value.textAlign === "right" && "float-right",
        )}
        image={value}
        imageWidth={width}
      />

      {value.caption && (
        <figcaption className="text-balance px-4 text-sm italic text-neutral-500">
          {value.caption}

          {value.source && (
            <>
              {" ("}
              <a href={value.source} className="image-source link">
                Source
              </a>
              {")"}
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
