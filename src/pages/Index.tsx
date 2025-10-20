import { HeroSection } from "@/components/HeroSection";
import { KPIDashboard } from "@/components/KPIDashboard";
import { ChannelDiagnostics } from "@/components/ChannelDiagnostics";
import { StrategicRecommendations } from "@/components/StrategicRecommendations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KPIDashboard />
      <ChannelDiagnostics />
      <StrategicRecommendations />
      <Footer />
    </div>
  );
};

export default Index;
