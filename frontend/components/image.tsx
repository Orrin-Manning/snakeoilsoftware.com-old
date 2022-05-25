import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

interface ImageProps {
  image: {
    data: {
      attributes: {
        url: URL;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
  className: string;
}

const Image = ({ image, className }: ImageProps) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      className={className}
    />
  );
};

export default Image;
