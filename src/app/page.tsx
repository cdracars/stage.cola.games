import { Image } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-lg mx-auto text-center py-8 px-6 rounded-md shadow-lg bg-gray-800">
        {/* Logo Section */}
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="COLA Games Logo"
            className="w-32 h-32 mx-auto rounded-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
          Welcome to COLA Games
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 text-base md:text-lg">
          Our gaming universe is getting a makeover! Stay tuned for the epic
          launch.
        </p>

        {/* Launch Date */}
        <p className="mt-2 text-sm text-gray-400">
          Estimated Launch: <strong>Mid December 2024</strong>
        </p>

        {/* Call-to-Actions */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:staff@cola.games"
            className="inline-block text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
          >
            <span className="flex items-center justify-center">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m4 0V8m0 4v4m0-6h.01M4 6h16M4 18h16M4 6v12m16-12v12"
                />
              </svg>
              Contact Us
            </span>
          </a>
          <a
            href="/events"
            className="inline-block text-center bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
          >
            View Events
          </a>
        </div>
      </div>
    </div>
  );
}
