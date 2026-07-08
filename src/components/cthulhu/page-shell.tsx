import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "@/components/overrides/image";

interface CthulhuPageShellProps {
  routes: { label: string; href?: string }[];
  title?: string;
  flavor?: React.ReactNode;
  heroSrc: string;
  heroAlt: string;
  heroClassName?: string;
  children: React.ReactNode;
}

interface CthulhuActionLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

interface CthulhuTextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function CthulhuPageShell({
  title,
  flavor,
  heroSrc,
  heroAlt,
  heroClassName = "",
  children,
}: CthulhuPageShellProps) {
  return (
    <Box className="bg-black text-[#b6d7a8]">
      <Box className="mx-auto max-w-5xl px-6 py-8 md:px-10 md:py-10">
        <Box className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-2xl bg-black">
          <Image
            src="/images/cthulhu1929/Inheritance.jpg"
            alt="The Inheritance of Ambrose Wincrest"
            className="h-auto w-full object-cover"
          />
        </Box>

        <Box
          className={`overflow-hidden rounded-2xl bg-white/5 shadow-[0_0_40px_rgba(0,0,0,0.45)] ${heroClassName}`}
        >
          <Image
            src={heroSrc}
            alt={heroAlt}
            className="h-auto w-full object-cover"
          />
        </Box>

        {flavor ? (
          <Box className="mx-auto mt-8 max-w-4xl text-center">
            <Text className="font-fell text-[23px] leading-[1.55] tracking-wide text-[#fff2cc]">
              {flavor}
            </Text>
          </Box>
        ) : null}

        {title ? (
          <Heading className="mt-10 text-center font-norican text-[28px] font-normal leading-[1.2] text-white md:text-[28px]">
            {title}
          </Heading>
        ) : null}

        <Box className="mt-8 space-y-8">{children}</Box>
      </Box>
    </Box>
  );
}

export function CthulhuSectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Heading className="font-norican text-[28px] font-normal leading-[1.2] text-white md:text-[28px]">
      {children}
    </Heading>
  );
}

export function CthulhuBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Box
      className={`space-y-4 font-josefin text-[19px] leading-[1.55] text-[#b6d7a8] ${className}`}
    >
      {children}
    </Box>
  );
}

export function CthulhuActionLink({
  href,
  children,
  external = false,
}: CthulhuActionLinkProps) {
  const className =
    "inline-flex items-center justify-center rounded-full border border-[#f6b26b] bg-[#f6b26b]/10 px-6 py-3 font-josefin text-[19px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-[#f6b26b] hover:text-black";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function CthulhuTextLink({
  href,
  children,
  external = false,
}: CthulhuTextLinkProps) {
  const className =
    "font-josefin text-[19px] text-[#f6b26b] underline underline-offset-4 transition-colors duration-200 hover:text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
