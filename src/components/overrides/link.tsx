import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { getFullPath } from "@/utils/getBasePath";

type Props = ChakraLinkProps & NextLinkProps;

const Link = ({ href, ...props }: Props) => {
  const fullPath = getFullPath(href || "");
  return <ChakraLink as={NextLink} href={fullPath} {...props} />;
};

export default Link;
