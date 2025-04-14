import AboutCoreValues from "@/components/AboutCoreValues";
import AboutDoctor from "@/components/AboutDoctor";
import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <hr className="text-[#1018281f]"/>
      <AboutDoctor/>
      <hr className="text-[#1018281f]"/>
      <AboutMission />
      <hr className="text-[#1018281f]"/>
      <AboutCoreValues/>
    </>
  );
}
