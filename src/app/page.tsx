
import { ClientsFeedback } from "@/components/ClientsFeedback";
import { Feature } from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { Shortabout } from "@/components/Shortabout";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02] " >
      <HeroSection/>
      <ServiceSection/>
      <Shortabout/>
      <ClientsFeedback/>
      <Feature/>
    </main>
    
  );
}
