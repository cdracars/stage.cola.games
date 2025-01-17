"use client";

import { Box, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "@/components/overrides/image";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  image: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <Link href={link} passHref>
      <Box
        as="div"
        className="border border-gray-200 group bg-primary-orange text-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between h-full"
      >
        <div className="mb-4 h-50 w-full rounded-md overflow-hidden flex justify-center items-center bg-gray-700 aspect-square">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <Heading
          as="h3"
          size="md"
          className="mb-2 font-lucky text-white group-hover:text-primary-blue transition-colors"
        >
          {title}
        </Heading>
        <Box className="text-white mb-4 text-sm flex-grow">{description}</Box>
        <Button
          as="span"
          className="bg-primary-blue text-white px-4 py-2 rounded-md font-semibold hover:bg-secondary-blue transition-colors"
        >
          Learn More
        </Button>
      </Box>
    </Link>
  );
};

export default FeatureCard;
