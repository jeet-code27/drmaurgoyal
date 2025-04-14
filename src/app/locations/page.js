import FAQSection from "@/components/Faq";
import LocationHero from "@/components/LocationHero";
import LocationMayur from "@/components/LocationMayur";

export default function AboutUs() {
    return (
<>
<LocationHero/>
<hr className="text-[#1018281f]"/>
<LocationMayur/>
<hr className="text-[#1018281f]"/>
<FAQSection/>
</>
    );

}