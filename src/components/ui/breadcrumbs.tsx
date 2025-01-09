"use client";

import { usePathname } from "next/navigation";
import {
  BreadcrumbRoot,
  BreadcrumbLink,
  BreadcrumbCurrentLink,
} from "./breadcrumb";
import { Box } from "@chakra-ui/react";

interface StaticBreadcrumbsProps {
  routes: { label: string; href?: string }[];
}

export const StaticBreadcrumbs: React.FC<StaticBreadcrumbsProps> = ({
  routes,
}) => {
  const pathname = usePathname();

  // Check if the current path starts with "/reawakening"
  const isReawakeningPath = pathname.startsWith("/reawakening");

  // Define conditional classes based on URL
  const font = isReawakeningPath ? "font-della" : "font-lex";
  const color = isReawakeningPath ? "text-brand-500" : "text-primary-orange";
  return (
    <BreadcrumbRoot
      className={`!pl-8 !pt-4 font-bold ${font}`}
      separator={<Box className="text-gray-500"> / </Box>}
    >
      {routes.map((crumb, index) => {
        const isLast = index === routes.length - 1;

        if (isLast) {
          return (
            <BreadcrumbCurrentLink key={index} className="text-gray-500">
              {crumb.label}
            </BreadcrumbCurrentLink>
          );
        }

        return (
          <BreadcrumbLink
            key={index}
            href={crumb.href}
            className={`${color} hover:underline`}
          >
            {crumb.label}
          </BreadcrumbLink>
        );
      })}
    </BreadcrumbRoot>
  );
};
