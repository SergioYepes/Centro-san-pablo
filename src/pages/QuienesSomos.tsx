import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Award, Globe } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const QuienesSomos = () => {
  const valores = [
    {
      icon: Award,
      title: "Excelencia Académica",
      description: "Comprometidos con los más altos estándares educativos internacionales"
    },
    {
      icon: Users,
      title: "Comunidad Global",
      description: "Fomentamos conexiones significativas entre estudiantes de todo el mundo"
    },
    {
      icon: GraduationCap,
      title: "Innovación Pedagógica",
      description: "Metodologías modernas respaldadas por la tradición académica británica"
    },
    {
      icon: Globe,
      title: "Diversidad Cultural",
      description: "Celebramos y aprovechamos la riqueza de diferentes culturas y perspectivas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy mb-6">
                Quiénes Somos
              </h1>
              <p className="text-xl text-navy/70 leading-relaxed">
                Somos un centro educativo dedicado a la excelencia en la enseñanza de idiomas, 
                combinando la tradición académica británica con metodologías innovadoras para 
                crear una experiencia de aprendizaje única y transformadora.
              </p>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
                Nuestra Historia
              </h2>
              <div className="prose prose-lg max-w-none text-navy/80">
                <p className="mb-6">
                  Fundado con la visión de democratizar el acceso a una educación de idiomas de clase mundial, 
                  el Centro Educativo San Pablo nació de la pasión por conectar culturas a través del lenguaje. 
                  Nuestros fundadores, educadores con amplia experiencia en instituciones británicas de prestigio, 
                  identificaron la necesidad de crear un espacio donde la excelencia académica se encuentre con 
                  la accesibilidad y la innovación tecnológica.
                </p>
                <p>
                  Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la calidad educativa, 
                  desarrollando programas que no solo enseñan idiomas, sino que forman ciudadanos globales 
                  preparados para prosperar en un mundo interconectado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galería del Lugar */}
        <section className="py-16 bg-cream/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
              Nuestro Espacio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden shadow-elegant">
                <img src={heroBackground} alt="Aula y recursos" className="w-full h-56 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-elegant">
                <img src={heroBackground} alt="Área común" className="w-full h-56 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-elegant">
                <img src={heroBackground} alt="Sala de estudio" className="w-full h-56 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-parchment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-12 text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <Card key={index} className="border border-british-blue/20 shadow-elegant bg-cream">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-hero rounded-full">
                          <Icon className="h-6 w-6 text-cream" />
                        </div>
                        <CardTitle className="text-xl font-serif text-navy">
                          {valor.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-navy/70 text-base">
                        {valor.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl font-bold text-navy mb-6">
                  Nuestra Misión
                </h3>
                <p className="text-navy/80 text-lg leading-relaxed">
                  Empoderar a estudiantes de todas las edades y orígenes para que alcancen sus 
                  objetivos lingüísticos y profesionales a través de una educación de idiomas 
                  excepcional que combine rigor académico, innovación tecnológica y sensibilidad cultural.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl font-bold text-navy mb-6">
                  Nuestra Visión
                </h3>
                <p className="text-navy/80 text-lg leading-relaxed">
                  Ser reconocidos como el centro educativo líder en enseñanza de idiomas, 
                  creando una comunidad global de aprendices que trascienden barreras lingüísticas 
                  y culturales para construir un mundo más conectado y comprensivo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuienesSomos;