import Comprehensive from "@/components/Home/Comprehensive";
import Hero from "@/components/Home/Hero";
import OurMission from "@/components/Home/OurMission";
import Working from "@/components/Home/Working";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <OurMission/>
      <Working/>
      <Comprehensive/>
    </div>
  );
}
