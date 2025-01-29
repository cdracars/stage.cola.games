import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import Link from "@/components/overrides/link";

interface ExternalLinkProps extends ChakraLinkProps {
  href: string;
  text: string;
  showIcon?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  text,
  showIcon = true,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`text-accent hover:underline items-center font-bold ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {text}
      {showIcon && <LuExternalLink className="ml-1" />}
    </Link>
  );
};

export default ExternalLink;
