import Img from "@/components/ui/Img";
import CustomPortableText from "@/components/ui/richtext/CustomPortableText";
import { NextPage } from "next";
import { PortableTextBlock } from "sanity";

interface Props {
  content: PortableTextBlock[];
  image: Sanity.Image & {
    alt?: string;
    onRight?: boolean;
    onBottom?: boolean;
  };
}

const HorizontalContent: NextPage<Props> = ({ content, image }) => {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-x-12">
      {image && (
        <figure
          className={`max-md:full-bleed ${image.onRight && "md:order-1"} ${
            image.onBottom && "max-md:order-last"
          }`}
        >
          <Img image={image} />
        </figure>
      )}
      <div>
        <CustomPortableText value={content} />
      </div>
    </div>
  );
};

export default HorizontalContent;
