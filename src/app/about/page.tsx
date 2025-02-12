import AboutHero from "@/components/About/Hero";
import Mission from "@/components/About/Mission";
import Vision from "@/components/About/Vision";
import Leadership from "@/components/About/Leadership";
// import AtCix from "@/components/About/AtCis";
import Experties from "@/components/About/Experties";
import JoinTeam from "@/components/Home/JoinTeam";
import Careers from "@/components/Home/Careers";

export default function About() {
  return (
    <div className="">
      <AboutHero />
      <Mission />
      <Vision />
      <Experties/>
      <Leadership />
      {/* <AtCix /> */}
      <Careers/>
      <JoinTeam/>
    </div>
  );
}
