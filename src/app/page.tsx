import { FeatureSection } from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfiniateMoving from "@/components/InfiniateMoving";
import Instractor from "@/components/Instractor";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      <InfiniateMoving/>
      <UpcomingWebinar/>
      <Instractor/>
      <Footer/>
    </main>
  );
}
