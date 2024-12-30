import AboutSection from "@/components/sections/about-section";
import LiveActionSection from "@/components/sections/live-action-section";

export default function AboutUsPage() {
  return (
    <div className="space-y-16">
      <AboutSection />
      <hr className="border-gray-700" />
      <LiveActionSection />
    </div>
  );
}
