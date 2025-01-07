import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-gray-800 py-6 text-center relative">
      <Box className="absolute top-0 left-0 w-full h-1 bg-orange-500"></Box>
      <p>© 2025 Central Oklahoma Live Action Games</p>
    </footer>
  );
}
