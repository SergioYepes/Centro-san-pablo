import { Button } from "../ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import heroBackground from "../../assets/hero-background.jpg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 ml-16 mr-16 shadow-green-950 rounded-xl p-6">
            <div className="flex justify-center mb-1  opacity-0">
              <div className="p-4 bg-transparent/10 rounded-full">
                <GraduationCap className="h-8 w-8 text-british-transparent" />
              </div>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight">
              Centro Educativo
              <span className="block text-cyan-700">San Pablo</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-cream/90 font-medium mb-2">
              Excellence in Language Education
            </p>
            
            <p className="text-lg text-cream max-w-2xl mx-auto leading-relaxed bg-black/30 ">
              Descubre la excelencia académica británica en el aprendizaje de idiomas. 
              Metodología innovadora, profesores expertos y una comunidad global de aprendizaje.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/servicios">
              <Button className="w-full sm:w-auto  hover:bg-secondary">
                <BookOpen className="h-5 w-5" />
                Explorar Servicios
              </Button>
            </Link>
            <Link to="/club-conversacion">
              <Button variant="outline" className="w-full sm:w-auto bg-cream/10 border-cream/30 text-cream hover:bg-cream hover:text-navy">
                <Users className="h-5 w-5" />
                Club de Conversación
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            {[
              {
                title: "Metodología Británica",
                description: "Estándares académicos internacionales de alta calidad",
                icon: "🇬🇧"
              },
              {
                title: "Clases Virtuales",
                description: "Inglés y portugués con profesores nativos certificados",
                icon: "💻"
              },
              {
                title: "Comunidad Global",
                description: "Conecta con estudiantes de todo el mundo",
                icon: "🌍"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-cream/80 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};