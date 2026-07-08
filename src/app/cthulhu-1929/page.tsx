import { Box, Text } from "@chakra-ui/react";
import Image from "@/components/overrides/image";
import { CthulhuActionLink } from "@/components/cthulhu/page-shell";

export default function Cthulhu1929SplashPage() {
  return (
    <Box className="bg-black text-[#b6d7a8]">
      <Box className="mx-auto max-w-4xl px-6 py-8 md:px-10 md:py-10">
        <Image
          src="/images/cthulhu1929/Welcome 1929.jpg"
          alt="Welcome to Cthulhu 1929"
          className="mb-8 h-auto w-full object-cover"
        />

        <Box className="space-y-2 font-fell text-[23px] leading-[1.55] tracking-wide text-[#fff2cc]">
          <Text>
            On the evening of October 24th, 1929, the prominent industrialist
            and philanthropist Ambrose Wincrest will be laid to rest.
          </Text>
          <Text>
            His survivors have gathered at the Order Lodge to celebrate his
            life, settle unfinished business, and hear the reading of his final
            testament. Strange events surrounding Ambrose&apos;s final years have
            left many searching for answers, and not everyone present has come
            to mourn.
          </Text>
          <Text className="pt-2">Some secrets were buried with Ambrose Wincrest.</Text>
          <Text>Others should have been.</Text>
        </Box>

        <Box className="my-8 border-t border-white/50" />

        <Box className="space-y-6 font-josefin text-[19px] leading-[1.55] text-[#b6d7a8]">
          <Text>
            <Text as="span" className="font-bold text-white">
              The Inheritance of Ambrose Wincrest
            </Text>{" "}
            is a one-night, immersive noir-horror experience inspired by the
            horror writings of H.P. Lovecraft.
          </Text>

          <Box as="ul" className="space-y-4 pl-6">
            <Text as="li">
              Inhabit a character and step into a world of secret societies,
              forbidden knowledge, and things that should not exist.
            </Text>
            <Text as="li">
              Every guest portrays a unique character and helps shape the
              unfolding story through their choices, alliances, and discoveries.
            </Text>
            <Text as="li">
              Spend an evening uncovering impossible secrets, forming uneasy
              alliances, and deciding how far you&apos;ll go in pursuit of the
              truth.
            </Text>
          </Box>

          <Text>
            Every investigator arrives with secrets of their own, and by the
            end of the night, no one will leave unchanged.
          </Text>
        </Box>

        <Text className="mt-14 font-beth text-[24px] text-white">
          Your Evening Includes:
        </Text>

        <Box className="mt-4 space-y-6 font-josefin text-[19px] leading-[1.55] text-[#b6d7a8]">
          <Box as="ul" className="space-y-1 pl-6">
            <Text as="li">
              A fully-developed character, complete with skills, goals and
              relationships
            </Text>
            <Text as="li">An immersive, in-character catered dinner</Text>
            <Text as="li">
              A cast of thirty-five investigators, each with their own
              mysteries and ambitions
            </Text>
            <Text as="li">
              Mystery, intrigue, and cosmic horror in 1929 New England
            </Text>
            <Text as="li">
              An unforgettable evening of live-action roleplay
            </Text>
          </Box>

          <Text className="pt-4">
            Whether you&apos;re an experienced player, brand new to live-action
            gaming, or simply love mystery and cosmic horror, we&apos;d love to
            welcome you to the Lodge.
          </Text>
        </Box>

        <Box className="my-8 border-t border-white/50" />

        <Box className="space-y-4 font-josefin text-[19px] leading-[1.55] text-[#b6d7a8]">
          <Box className="space-y-1 text-white">
            <Text className="text-[28px] font-bold leading-[1.2]">Saturday, October 24th, 2026</Text>
            <Text className="text-[28px] font-bold leading-[1.2]">3:30 PM - 11:30 PM</Text>
          </Box>

          <Box className="space-y-1">
            <Text className="text-[28px] font-bold leading-[1.2] text-white">
              Edmond American Legion Hall
            </Text>
            <Text className="text-[17px] leading-[1.45] text-[#fff2cc]">101 E. 5th Street</Text>
            <Text className="text-[17px] leading-[1.45] text-[#fff2cc]">Edmond, Oklahoma 73034</Text>
          </Box>

          <Text className="pt-2">
            Only thirty-five investigators will receive an invitation to the
            Order Lodge.
          </Text>
          <Text>Are you ready to step into the unknown?</Text>

          <Box className="pt-4">
            <CthulhuActionLink href="/cthulhu-1929/getting-started">
              Begin Your Investigation
            </CthulhuActionLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
