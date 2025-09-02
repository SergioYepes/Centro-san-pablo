import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { 
  BookOpen, 
  MessageCircle, 
  FolderOpen, 
  Users, 
  ArrowRight,
  Play
} from "lucide-react";

export const ServicesPreview = () => {
  const services = [
    {
      title: "Clases Virtuales",
      description: "Inglés y portugués con metodología británica adaptada al mundo digital",
      icon: BookOpen,
      color: "navy",
      features: ["Profesores nativos", "Horarios flexibles", "Material interactivo"]
    },
    {
      title: "Club de Conversación",
      description: "Practica con estudiantes de todo el mundo en sesiones grupales dinámicas",
      icon: MessageCircle,
      color: "burgundy",
      features: ["Sesiones en vivo", "Temas variados", "Niveles adaptados"]
    },
    {
      title: "Recursos Exclusivos",
      description: "Videos, PDFs y material premium actualizado mensualmente",
      icon: FolderOpen,
      color: "british-blue",
      features: ["Contenido original", "Descargas ilimitadas", "Actualizaciones mensuales"]
    },
    {
      title: "Comunidad Activa",
      description: "Únete a una red global de estudiantes y profesores expertos",
      icon: Users,
      color: "navy",
      features: ["Networking global", "Mentorías", "Eventos exclusivos"]
    }
  ];

  const getCardClasses = (color: string) => {
    const baseClasses = "group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-none";
    switch (color) {
      case "burgundy":
        return `${baseClasses} bg-gradient-to-br from-burgundy to-burgundy/80`;
      case "british-blue":
        return `${baseClasses} bg-gradient-to-br from-british-blue to-british-blue/80`;
      default:
        return `${baseClasses} bg-gradient-to-br from-navy to-navy/80`;
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Descubre una experiencia educativa completa diseñada para acelerar tu dominio del idioma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={getCardClasses(service.color)}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-cream/20 rounded-full backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-cream" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif text-cream mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-cream/80 text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-cream/90 text-sm">
                        <div className="w-1.5 h-1.5 bg-cream rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full bg-cream/10 border-cream/30 text-cream hover:bg-cream hover:text-navy group-hover:scale-105 transition-transform"
                  >
                    Saber Más
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-cream rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">
              ¿Listo para comenzar tu viaje educativo?
            </h3>
            <p className="text-navy/70 mb-6">
              Únete a miles de estudiantes que ya están transformando su futuro con nosotros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-navy/70 hover:text-navy/90 border border-gold">
                <Play className="h-5 w-5 text-navy/70 mr-2" />
                Ver Demo Gratuita
              </Button>
              <Button size="lg">
                Hablar con un Asesor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};