import { Card } from "@/components/ui/card";
import { Search, TrendingUp, Info } from "lucide-react";

interface SearchTermProps {
  term: string;
  volume: string;
  index: number;
}

const SearchTermCard = ({ term, volume, index }: SearchTermProps) => {
  return (
    <Card 
      className="p-6 shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in-up border-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Search size={18} className="text-primary" />
            <h3 className="text-lg font-semibold text-foreground">{term}</h3>
          </div>
          <p className="text-muted-foreground text-sm">Volume mensal estimado</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-secondary">{volume}</div>
          <div className="text-xs text-muted-foreground">buscas/mês</div>
        </div>
      </div>
    </Card>
  );
};

export const SearchVolume = () => {
  const searchTerms = [
    {
      term: "Advogado trabalhista Itaituba",
      volume: "70–340"
    },
    {
      term: "Advogado previdenciário Itaituba",
      volume: "40–180"
    },
    {
      term: "Inventário Itaituba / advogado inventário Itaituba",
      volume: "20–120"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <TrendingUp size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Levantamento de Busca (Itaituba/PA)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Faixas estimadas de buscas mensais na sua região de atuação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {searchTerms.map((term, index) => (
              <SearchTermCard key={index} {...term} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card shadow-elegant animate-fade-in-up border-0" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Info size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Observação Importante</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Direito do Trabalho e Previdenciário tendem a ter demanda alta para captação no jurídico 
                (nicho com alta urgência e potencial de SEO), reforçando foco nos dois pilares do cliente.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-elegant animate-fade-in-up border-0" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Search size={20} className="text-warning" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Validação de Precisão</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Para melhorar a performance e aproveitar melhor o potencial dessas buscas, o ideal é concentrar esforços nos termos com maior intenção de contratação (como “advogado trabalhista Itaituba” e “advogado previdenciário Itaituba”), criando conteúdos, anúncios e páginas otimizadas especificamente para essas expressões. Assim, o cliente se posiciona melhor nas pesquisas locais e aumenta a taxa de conversão dos contatos gerados.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
