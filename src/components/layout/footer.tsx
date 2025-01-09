import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Check if the current path starts with "/reawakening"
  const isReawakeningPath = pathname.startsWith("/reawakening");
  const bg = isReawakeningPath
    ? "bg-gray-700 text-gray-100"
    : "bg-primary-blue text-white";
  const color = isReawakeningPath ? "bg-brand-500" : "bg-primary-orange";
  return (
    <footer className={`${bg} py-6 text-center relative`}>
      <Box className={`absolute top-0 left-0 w-full h-1 ${color}`}></Box>
      <p>© 2025 Central Oklahoma Live Action Games</p>
    </footer>
  );
}
