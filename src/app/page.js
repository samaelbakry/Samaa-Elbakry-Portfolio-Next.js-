import FeatureCards from "@/components/featureCards/FeatureCards";
import NavBar from "@/components/Navbar/NavBar";
import HeroSection from "@/sections/HeroSection";
import LogoSection from "@/sections/LogoSection";
import ShowCaseSection from "@/sections/ShowCaseSection";

export default function Home() {
  return (
    <>
      <NavBar/>
      <HeroSection />
      <ShowCaseSection />
      <LogoSection/>
      <FeatureCards/>
    </>
  );
}
