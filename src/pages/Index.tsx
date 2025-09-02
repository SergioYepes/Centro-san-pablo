import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesPreview />
      </main>

      {/* Footer placeholder */}
      <footer className="bg-gradient-british text-british/80 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Centro Educativo San Pablo</h3>
            <p className="text-birtish/90 mb-6">Excellence in Language Education</p>
            <p className="text-birtish/80 text-sm">
              © 2024 Centro Educativo San Pablo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;