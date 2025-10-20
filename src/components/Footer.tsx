import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Amplie Marketing</h2>
            <p className="text-lg text-primary-foreground/90">
              Auditoria realizada pela equipe de especialistas da Amplie Marketing Digital
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="cta" 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://wa.me/5593991872819', '_blank')}
            >
              <MessageCircle size={20} />
              Fale com um Consultor
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => window.open('https://amplieseumkt.com.br/', '_blank')}
            >
              <Globe size={20} />
              Visitar Nosso Site
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="mb-2">© 2025 Amplie Marketing Digital. Todos os direitos reservados.</p>
            <p className="text-xs">
              Relatório gerado em {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
