import { FeatureSection } from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import InfiniateMoving from "@/components/InfiniateMoving";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      <InfiniateMoving/>
    </main>
  );
}
