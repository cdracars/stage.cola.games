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

  const isReawakeningPath = pathname.startsWith("/reawakening");
  const isCthulhuPath = pathname.startsWith("/cthulhu-1929");

  const font = isReawakeningPath
    ? "font-della"
    : isCthulhuPath
    ? "font-josefin"
    : "font-lex";
  const color = isReawakeningPath
    ? "text-brand-500"
    : isCthulhuPath
    ? "text-[#76a5af]"
    : "text-primary-orange";
  const currentColor = isCthulhuPath ? "text-[#fff2cc] opacity-70" : "text-gray-500";
  const separatorColor = isCthulhuPath ? "text-[#f6b26b]" : "text-gray-500";
  return (
    <BreadcrumbRoot
      className={`!pl-8 !pt-4 font-bold ${font}`}
      separator={<Box className={separatorColor}> / </Box>}
    >
      {routes.map((crumb, index) => {
        const isLast = index === routes.length - 1;

        if (isLast) {
          return (
            <BreadcrumbCurrentLink key={index} className={currentColor}>
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
