import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3, Target } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "sonner";

export const HeroSection = () => {
  const handleScrollToDiagnostic = () => {
    const diagnosticSection = document.getElementById("diagnostic-section");
    if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadPDF = async () => {
    try {
      toast.info("Gerando PDF...");
      
      const element = document.body;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("Auditoria-Marketing-Digital-Francisco-Santos-Advogados.pdf");
      
      toast.success("PDF baixado com sucesso!");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      toast.error("Erro ao gerar PDF. Tente novamente.");
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <BarChart3 size={80} className="text-secondary" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <TrendingUp size={60} className="text-accent" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Target size={70} className="text-warning" />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Auditoria Estratégica de
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Marketing Digital
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Analisamos sua presença digital, identificamos falhas críticas e traçamos o plano ideal para escalar resultados.
            </p>
          </div>

          {/* Client Info */}
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                Francisco Santos Advogados
              </h2>
              <p className="text-xl md:text-xl text-primary-foreground/80 mb-1">Trabalhista, Previdenciária e Inventário</p>
              <p className="text-xl md:text-xl text-primary-foreground/70">Itaituba / PA</p>
            </div>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.5s' }}>
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg"
              onClick={handleScrollToDiagnostic}
            >
              Ver Diagnóstico Completo
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={handleDownloadPDF}
            >
              Baixar Relatório PDF
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">44%</div>
              <div className="text-sm text-primary-foreground/80">Score Médio Atual</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">+380%</div>
              <div className="text-sm text-primary-foreground/80">Potencial de Crescimento</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2">530</div>
              <div className="text-sm text-primary-foreground/80">Buscas Mensais Locais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
