import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Instagram, Globe, Search, Megaphone, Palette, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ChannelCardProps {
  icon: React.ReactNode;
  title: string;
  score: number;
  description: string;
  insights: string[];
  color: string;
  index: number;
}

const ChannelCard = ({ icon, title, score, description, insights, color, index }: ChannelCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-accent";
    if (score >= 60) return "bg-warning";
    return "bg-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excelente";
    if (score >= 60) return "Bom com ressalvas";
    return "Precisa de atenção";
  };

  return (
    <Card 
      className="overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 animate-slide-in-right border-0"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={`h-2 ${getScoreColor(score)}`} />
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 rounded-lg ${color}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Score Atual</span>
            <span className="text-2xl font-bold text-foreground">{score}/100</span>
          </div>
          <Progress value={score} className="h-2" />
          <p className="text-xs text-muted-foreground">{getScoreLabel(score)}</p>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
            <h4 className="text-sm font-semibold text-foreground mb-3">Insights principais:</h4>
            <ul className="space-y-2">
              {insights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-secondary mt-1">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button 
          variant="ghost" 
          className="w-full mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Ver menos' : 'Ver análise completa'}
          <ChevronRight className={`ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </Button>
      </div>
    </Card>
  );
};

export const ChannelDiagnostics = () => {
  const channels = [
    {
      icon: <Palette size={24} className="text-primary" />,
      title: "Identidade Visual e Branding",
      score: 55,
      description: "Consistência de marca e percepção visual",
      color: "bg-primary/10",
      insights: [
        "Padronizar paleta/tipografia e aplicar nos avatares/capas/arte de posts",
        "Criar tagline clara ('Trabalhista, Previdenciário e Inventários em Itaituba')",
        "Produzir fotografia institucional (escritório/equipe)",
        "Montar guia de marca (logo em variações, usos, proibições) e kit de templates"
      ]
    },
    {
      icon: <Search size={24} className="text-accent" />,
      title: "Google e SEO Local",
      score: 38,
      description: "Posicionamento e busca orgânica",
      color: "bg-accent/10",
      insights: [
        "Lançar site leve com páginas-alvo: trabalhista, previdenciário e inventário Itaituba",
        "Otimizar Perfil no Google (GMB): categorias, descrição, fotos, posts semanais",
        "Criar conteúdos-guia ('Como funciona o inventário extrajudicial no Pará')",
        "Construir citations locais (OAB/PA, diretórios) e backlinks regionais"
      ]
    },
    {
      icon: <Megaphone size={24} className="text-primary" />,
      title: "Anúncios Pagos (Google/Meta)",
      score: 30,
      description: "Sem campanhas ativas no momento",
      color: "bg-primary/10",
      insights: [
        "Estruturar campanhas de pesquisa com grupos por intenção: trabalhista, previdenciário, inventário",
        "Extensões: local, chamada (DDD 93), sitelinks por serviço",
        "Teste de LP (páginas separadas por serviço) e captação via WhatsApp",
        "Remarketing leve no Meta Ads com criativos educativos"
      ]
    },
    {
      icon: <Instagram size={24} className="text-secondary" />,
      title: "Redes Sociais (Instagram, Facebook, TikTok)",
      score: 52,
      description: "Presença ativa mas com oportunidades",
      color: "bg-secondary/10",
      insights: [
        "Grade com 3 formatos: Educação (direitos), Bastidores/Autoridade, Chamada p/ ação",
        "Reels semanais (60–90s) respondendo dúvidas comuns de cada área",
        "Stories diários com bastidores e 'caixa de perguntas'",
        "Destaques organizados: Trabalhista, Previdenciário, Inventário, Avaliações"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Diagnóstico por Canal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Análise detalhada de cada área do seu marketing digital com recomendações específicas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <ChannelCard key={index} {...channel} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
