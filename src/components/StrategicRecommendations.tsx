import { Card } from "@/components/ui/card";
import { CheckCircle2, Settings, Rocket } from "lucide-react";

interface RecommendationItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  color: string;
  index: number;
}

const RecommendationItem = ({ icon, title, items, color, index }: RecommendationItemProps) => {
  return (
    <Card 
      className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in-up border-0"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>

      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 p-1.5 rounded-full ${color}`}>
              <div className="w-2 h-2 rounded-full bg-current" />
            </div>
            <span className="text-base md:text-sm text-foreground leading-relaxed font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export const StrategicRecommendations = () => {
  const recommendations = [
    {
      icon: <CheckCircle2 size={24} className="text-accent" />,
      title: "O que está funcionando",
      color: "bg-accent/10 text-accent",
      items: [
        "Campanhas de anúncios pagos gerando ROI positivo e consistente",
        "Identidade visual bem aplicada nas principais plataformas",
        "Engajamento acima da média do setor no Instagram",
        "Design responsivo do site funcionando perfeitamente",
        "Segmentação de público bem definida e assertiva"
      ]
    },
    {
      icon: <Settings size={24} className="text-warning" />,
      title: "O que precisa ser ajustado",
      color: "bg-warning/10 text-warning",
      items: [
        "Perfil do Google Meu Negócio precisa ser atualizado e completado",
        "Frequência de publicações nas redes sociais está irregular",
        "Velocidade de carregamento do site pode ser otimizada",
        "Meta descriptions e títulos SEO precisam de revisão",
        "Stories do Instagram estão sendo subutilizados",
        "Manual de marca desatualizado causando inconsistências"
      ]
    },
    {
      icon: <Rocket size={24} className="text-secondary" />,
      title: "O que recomendamos implementar",
      color: "bg-secondary/10 text-secondary",
      items: [
        "Estratégia de SEO técnico para melhorar ranqueamento orgânico",
        "Calendário editorial estruturado para redes sociais",
        "Campanhas de remarketing para aumentar conversões",
        "Integração com WhatsApp Business no site",
        "Expansão para TikTok com estratégia de conteúdo específica",
        "Automação de marketing para nutrição de leads",
        "Dashboard unificado para acompanhamento de métricas"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Análise Estratégica e Recomendações
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diagnóstico completo com plano de ação para maximizar seus resultados
            </p>
          </div>

          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <RecommendationItem key={index} {...rec} index={index} />
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-card rounded-xl shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Planos de Ação Prioritários
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">Curto Prazo</div>
                <div className="text-sm text-muted-foreground">SEO técnico e GMB</div>
                <div className="text-xs text-muted-foreground mt-1">1-2 meses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">Médio Prazo</div>
                <div className="text-sm text-muted-foreground">Estratégia de conteúdo</div>
                <div className="text-xs text-muted-foreground mt-1">3-4 meses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Longo Prazo</div>
                <div className="text-sm text-muted-foreground">Rebranding digital</div>
                <div className="text-xs text-muted-foreground mt-1">5-6 meses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
