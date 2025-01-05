import { Box } from "@chakra-ui/react";
import Image from "@/components/overrides/image";

interface MiniBannerProps {
  src: string;
  alt: string;
  className?: string; // Optional: Additional TailwindCSS classes
}

const MiniBanner: React.FC<MiniBannerProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <Box className={`${className}`} textAlign="center" my={8}>
      <Image src={src} alt={alt} className="mx-auto w-5/6" />
    </Box>
  );
};

export default MiniBanner;
