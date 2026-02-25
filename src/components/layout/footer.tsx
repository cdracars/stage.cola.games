import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import ExternalLink from "../ui/external-link";

export default function Footer() {
  const pathname = usePathname();

  const isReawakeningPath = pathname.startsWith("/reawakening");
  const isAcosPath = pathname.startsWith("/a-crown-of-storms");
  const bg = isReawakeningPath
    ? "bg-gray-700 text-gray-100"
    : isAcosPath
    ? "text-gray-100"
    : "bg-primary-blue text-white";
  const color = isReawakeningPath
    ? "bg-brand-500"
    : isAcosPath
    ? "bg-[#f1c232]"
    : "bg-primary-orange";
  const style = isAcosPath ? { backgroundColor: "#1e1432" } : undefined;
  return (
    <footer className={`${bg} py-6 text-center relative`} style={style}>
      <Box className={`absolute top-0 left-0 w-full h-1 ${color}`}></Box>
      <p>© 2025 Central Oklahoma Live Action Games</p>
      <p>
        Contact us:{" "}
        <ExternalLink
          href="mailto:staff@cola.games"
          text="staff@cola.games"
          className="font-lex !text-primary-orange"
        />
      </p>
    </footer>
  );
}
