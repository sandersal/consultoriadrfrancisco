import { HeroSection } from "@/components/HeroSection";
import { KPIDashboard } from "@/components/KPIDashboard";
import { SearchVolume } from "@/components/SearchVolume";
import { AudienceInterests } from "@/components/AudienceInterests";
import { LocalCompetitors } from "@/components/LocalCompetitors";
import { ChannelDiagnostics } from "@/components/ChannelDiagnostics";
import { StrategicRecommendations } from "@/components/StrategicRecommendations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KPIDashboard />
      <SearchVolume />
      <AudienceInterests />
      <LocalCompetitors />
      <ChannelDiagnostics />
      <StrategicRecommendations />
      <Footer />
    </div>
  );
};

export default Index;
