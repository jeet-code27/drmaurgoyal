import CarePartnerComponent from "@/components/CarePartnerComponent";
import PediatricServices from "@/components/PediatricServices";
import ServiceBoxes from "@/components/ServiceBox";



export default function Services() {
    return (
        <>
            <PediatricServices />
           <ServiceBoxes/>
           <CarePartnerComponent/>
        </>
    );
}
