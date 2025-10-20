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
        "Presença no Google Maps ativa — base para captação local via 'perto de mim'",
        "Foco em áreas com alta intenção (Trabalhista/Previdenciário/Inventário)",
        "WhatsApp direto como canal de contato (conversão mais rápida no jurídico local)",
        "Marca do profissional já aparece em listagens/menções locais",
        "Concorrência digital ainda difusa — janela boa para ganhar posição"
      ]
    },
    {
      icon: <Settings size={24} className="text-warning" />,
      title: "O que precisa ser ajustado",
      color: "bg-warning/10 text-warning",
      items: [
        "Ausência de site impede SEO, mensuração (GA4) e qualidade em Ads",
        "Perfil Instagram sem arquitetura de conteúdo (pilares, destaques, bio SEO)",
        "GMB subaproveitado (posts, fotos, Q&A, avaliações recorrentes)",
        "Nenhum funil básico (lead magnet jurídico simples + automação de follow-up)",
        "Sem captação de reviews estruturada (impacto direto no ranque local)"
      ]
    },
    {
      icon: <Rocket size={24} className="text-secondary" />,
      title: "O que recomendamos implementar (próximos 30–60 dias)",
      color: "bg-secondary/10 text-secondary",
      items: [
        "Site enxuto + 3 landing pages (Trabalhista, Previdenciário, Inventário) com CTAs para WhatsApp",
        "SEO Local completo no GMB: categorias, descrição, 10–15 fotos originais, 2 posts/sem, Q&A, 5+ avaliações/mês",
        "Campanhas Google Ads Pesquisa: 3 campanhas (uma por área), palavras negativas, extensões e lances por raio",
        "Calendário de Conteúdo (8–12 posts/mês): 4 Reels educativos, 4 carrosséis 'passo a passo', 2 provas sociais",
        "Captação e CRM simples: formulário de triagem por área com integração WhatsApp (SLA < 10 min)"
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
                <div className="text-sm text-muted-foreground">Site + SEO Local (GMB)</div>
                <div className="text-xs text-muted-foreground mt-1">1-2 meses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">Médio Prazo</div>
                <div className="text-sm text-muted-foreground">Google Ads + Conteúdo</div>
                <div className="text-xs text-muted-foreground mt-1">2-3 meses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Longo Prazo</div>
                <div className="text-sm text-muted-foreground">Automação + CRM</div>
                <div className="text-xs text-muted-foreground mt-1">4-6 meses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
