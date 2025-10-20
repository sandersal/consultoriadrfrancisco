import { Card } from "@/components/ui/card";
import { Building2, MapPin, CheckCircle2 } from "lucide-react";

interface CompetitorProps {
  name: string;
  description: string;
  index: number;
}

const CompetitorCard = ({ name, description, index }: CompetitorProps) => {
  return (
    <Card 
      className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in-up border-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
          <Building2 size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export const LocalCompetitors = () => {
  const competitors = [
    {
      name: "Werley Moraes Advogados",
      description: "Escritório com atuação em direito trabalhista e previdenciário em Itaituba."
    },
    {
      name: "VLV Advogados",
      description: "Páginas segmentadas para Itaituba com foco em inventário e serviços jurídicos online."
    },
    {
      name: "Advocacia Anderson Mendonça",
      description: "Escritório localizado na comarca de Itaituba, com atuação em trabalhista e previdenciário."
    },
    {
      name: "Dra. Sônia Valerio",
      description: "Escritório com foco em família, trabalhista e previdenciário, com comunicação regional."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Concorrentes Locais (Sinais Públicos)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principais escritórios e plataformas que aparecem nas buscas para Itaituba
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {competitors.map((competitor, index) => (
              <CompetitorCard key={index} {...competitor} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card shadow-elegant animate-fade-in-up border-0" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Building2 size={20} className="text-warning" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Diretórios Jurídicos Locais</h3>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                Perfis em plataformas como <span className="font-semibold">Jusbrasil</span> e <span className="font-semibold">Jurídico Certo</span> também 
                aparecem nas buscas para Itaituba, representando concorrência indireta em SEO local.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-elegant animate-fade-in-up border-0" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <CheckCircle2 size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Seu Diferencial Atual</h3>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                Perfil do cliente no <span className="font-semibold">Google Maps está ativo</span>, servindo como ponto de partida 
                importante para SEO local e coleta de avaliações estruturadas.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
