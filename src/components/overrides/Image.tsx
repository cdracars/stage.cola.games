import { getFullPath } from "@/app/utils/getBasePath";
import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
} from "@chakra-ui/react";

type Props = ChakraImageProps & { src: string };

const Image = ({ src, ...props }: Props) => {
  const fullPath = getFullPath(src);
  return <ChakraImage src={fullPath} {...props} />;
};

export default Image;
