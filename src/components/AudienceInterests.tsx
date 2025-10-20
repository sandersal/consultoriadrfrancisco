import { Card } from "@/components/ui/card";
import { Users, Briefcase, Scale, FileText } from "lucide-react";

interface InterestCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
  color: string;
  index: number;
}

const InterestCategory = ({ icon, title, description, topics, color, index }: InterestCategoryProps) => {
  return (
    <Card 
      className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in-up border-0"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {topics.map((topic, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1.5 bg-muted/50 text-foreground text-sm rounded-full font-medium hover:bg-muted transition-colors"
          >
            {topic}
          </span>
        ))}
      </div>
    </Card>
  );
};

export const AudienceInterests = () => {
  const categories = [
    {
      icon: <Briefcase size={24} className="text-primary" />,
      title: "Trabalhista",
      description: "Alta urgência e potencial de SEO",
      color: "bg-primary/10",
      topics: [
        "Demissão",
        "Verbas rescisórias",
        "Horas extras",
        "Adicional noturno/insalubridade",
        "Acordos",
        "Estabilidade gestante"
      ]
    },
    {
      icon: <Scale size={24} className="text-secondary" />,
      title: "Previdenciário (INSS)",
      description: "Alto volume de buscas e conversão",
      color: "bg-secondary/10",
      topics: [
        "Aposentadoria por idade",
        "Aposentadoria por tempo",
        "Aposentadoria por invalidez",
        "BPC/LOAS",
        "Revisões",
        "Auxílio-doença",
        "Prova de vida"
      ]
    },
    {
      icon: <FileText size={24} className="text-accent" />,
      title: "Inventário / Sucessões",
      description: "Conteúdos-guia convertem bem",
      color: "bg-accent/10",
      topics: [
        "Inventário extrajudicial",
        "Partilha",
        "ITCMD",
        "Prazos",
        "Documentação",
        "Custos",
        "Conflitos familiares"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Principais Interesses do Público
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temas com alto potencial de busca orgânica e conversão em tráfego pago
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {categories.map((category, index) => (
              <InterestCategory key={index} {...category} index={index} />
            ))}
          </div>

          <Card className="p-8 bg-gradient-card shadow-elegant animate-fade-in-up border-0" style={{ animationDelay: '0.45s' }}>
            <p className="text-center text-foreground text-lg leading-relaxed">
              <span className="font-bold text-primary">Esses temas possuem alto potencial de busca orgânica e de conversão em tráfego pago</span>, 
              especialmente em cidades de médio porte como Itaituba, onde a concorrência digital ainda é difusa e há janela de oportunidade 
              para posicionamento estratégico.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
