import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  index: number;
}

const PlanCard = ({ name, description, price, features, highlighted, index }: PlanCardProps) => {
  return (
    <Card 
      className={`p-8 transition-all duration-300 animate-scale-in ${
        highlighted 
          ? 'bg-gradient-primary text-primary-foreground shadow-glow scale-105 border-0' 
          : 'bg-gradient-card shadow-elegant hover:shadow-hover border-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {highlighted && (
        <div className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          MAIS POPULAR
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
        {name}
      </h3>
      <p className={`text-sm mb-6 ${highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
        {description}
      </p>

      <div className="mb-8">
        <div className={`text-4xl font-bold ${highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
          {price}
        </div>
        <p className={`text-sm mt-1 ${highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
          Investimento mensal
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check 
              size={20} 
              className={`mt-0.5 flex-shrink-0 ${
                highlighted ? 'text-secondary' : 'text-accent'
              }`} 
            />
            <span className={`text-sm ${highlighted ? 'text-primary-foreground/90' : 'text-foreground'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button 
        variant={highlighted ? "cta" : "default"}
        size="lg" 
        className="w-full"
      >
        Solicitar Proposta
      </Button>
    </Card>
  );
};

export const ServicePlans = () => {
  const plans = [
    {
      name: "Plano Essencial",
      description: "Ideal para começar a otimizar sua presença digital",
      price: "R$ 2.997",
      features: [
        "Auditoria completa inicial",
        "Otimização de perfis de redes sociais",
        "Configuração do Google Meu Negócio",
        "SEO básico on-page",
        "Relatório mensal de performance",
        "1 reunião estratégica mensal"
      ]
    },
    {
      name: "Plano Avançado",
      description: "Para empresas que querem crescimento consistente",
      price: "R$ 5.997",
      highlighted: true,
      features: [
        "Tudo do Plano Essencial",
        "Gestão completa de redes sociais",
        "Calendário editorial de conteúdo",
        "Campanhas de anúncios (Meta e Google)",
        "SEO técnico avançado",
        "Remarketing e automação",
        "Dashboard em tempo real",
        "2 reuniões estratégicas mensais"
      ]
    },
    {
      name: "Plano Performance Total",
      description: "Solução completa para máxima performance",
      price: "R$ 9.997",
      features: [
        "Tudo do Plano Avançado",
        "Rebranding e identidade visual",
        "Redesign de site/landing pages",
        "Estratégia omnichannel completa",
        "Análise de concorrência mensal",
        "Testes A/B avançados",
        "Automação de marketing avançada",
        "Suporte prioritário e consultor dedicado"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Proposta de Implementação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para transformar sua auditoria em resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground mb-4">
              Todos os planos incluem garantia de 30 dias e podem ser personalizados
            </p>
            <Button variant="outline" size="lg">
              Agendar Reunião de Alinhamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
