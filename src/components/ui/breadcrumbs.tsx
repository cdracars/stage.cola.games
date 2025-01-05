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
  return (
    <BreadcrumbRoot
      className="!pl-8 !pt-4 font-della font-bold"
      separator={<Box className="text-gray-300"> / </Box>}
    >
      {routes.map((crumb, index) => {
        const isLast = index === routes.length - 1;

        if (isLast) {
          return (
            <BreadcrumbCurrentLink key={index} className="text-gray-300">
              {crumb.label}
            </BreadcrumbCurrentLink>
          );
        }

        return (
          <BreadcrumbLink
            key={index}
            href={crumb.href}
            className="text-brand-500 hover:underline"
          >
            {crumb.label}
          </BreadcrumbLink>
        );
      })}
    </BreadcrumbRoot>
  );
};
