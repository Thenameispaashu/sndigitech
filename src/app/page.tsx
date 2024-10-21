
import { ClientsFeedback } from "@/components/ClientsFeedback";
import { Feature } from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02] " >
      <HeroSection/>
      <ServiceSection/>
      <ClientsFeedback/>
      <Feature/>
      

    </main>
    
  );
}
