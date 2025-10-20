import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Eye, MousePointerClick, Star, Target } from "lucide-react";
import { useState } from "react";

interface KPICardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
  index: number;
}

const KPICard = ({ icon, title, value, change, trend, description, index }: KPICardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const trendColor = {
    up: "text-accent",
    down: "text-destructive",
    neutral: "text-muted-foreground"
  };

  return (
    <Card 
      className="p-6 bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-300 cursor-pointer animate-fade-in-up border-0"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-primary/10 ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 ${trendColor[trend]}`}>
          <TrendingUp size={16} className={trend === 'down' ? 'rotate-180' : ''} />
          <span className="text-sm font-semibold">{change}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export const KPIDashboard = () => {
  const kpis = [
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Alcance nas Redes",
      value: "3.8K",
      change: "Estim.",
      trend: "neutral" as const,
      description: "Impressões mensais totais"
    },
    {
      icon: <Star size={24} className="text-secondary" />,
      title: "Engajamento Médio",
      value: "2.7%",
      change: "Estim.",
      trend: "neutral" as const,
      description: "Taxa de interação com conteúdo"
    },
    {
      icon: <Eye size={24} className="text-accent" />,
      title: "Tráfego do Site",
      value: "0",
      change: "Sem site",
      trend: "down" as const,
      description: "Visitantes únicos mensais"
    },
    {
      icon: <Target size={24} className="text-warning" />,
      title: "Pontuação SEO",
      value: "22/100",
      change: "Estim.",
      trend: "down" as const,
      description: "Apenas GMB/Maps ativo"
    },
    {
      icon: <MousePointerClick size={24} className="text-primary" />,
      title: "Taxa de Conversão",
      value: "n/d",
      change: "Sem dados",
      trend: "neutral" as const,
      description: "Sem site/landing page"
    },
    {
      icon: <TrendingUp size={24} className="text-secondary" />,
      title: "ROI de Anúncios",
      value: "n/d",
      change: "Sem campanhas",
      trend: "neutral" as const,
      description: "Nenhuma campanha ativa"
    }
  ];

  return (
    <section id="diagnostic-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Panorama Atual do Seu Marketing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dados consolidados em tempo real de todos os seus canais digitais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpis.map((kpi, index) => (
              <KPICard key={index} {...kpi} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
