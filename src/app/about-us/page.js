import AboutCoreValues from "@/components/AboutCoreValues";
import AboutDoctor from "@/components/AboutDoctor";
import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";
import CarePartnerComponent from "@/components/CarePartnerComponent";

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
      <hr className="text-[#1018281f]"/>
      <CarePartnerComponent/>
    </>
  );
}
