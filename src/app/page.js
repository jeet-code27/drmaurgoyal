import AboutMayur from "@/components/AboutMayur";
import DoctorProfileSection from "@/components/DoctorProfileSection";
import FAQSection from "@/components/Faq";

import HeroSection from "@/components/HeroSection";
import ImageGallerySlider from "@/components/ImageGallerySlider";
import PatientReviews from "@/components/PatientReviews";
import PediatricTherapySection from "@/components/PediatricTherapySection";


export default function Home() {
  return (
  <div className="">
    <HeroSection/>
    <hr className="text-[#1018281f]"/>
    <AboutMayur/>
    <hr className="text-[#1018281f]"/>
    <PediatricTherapySection/>
    <hr className="text-[#1018281f]"/>
    <DoctorProfileSection/>
    <hr className="text-[#1018281f]"/>
    <PatientReviews/>
    <hr className="text-[#1018281f]"/>
    <ImageGallerySlider/>
    <hr className="text-[#1018281f]"/>
    <FAQSection/>
  </div>
  );
}
