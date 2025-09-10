import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Languages, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy mb-4">Servicios</h1>
            <p className="text-navy/80 text-lg">
              Programas diseñados para impulsar tu dominio del idioma con enfoque práctico,
              acompañamiento docente y material actualizado.
            </p>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            <Card className="border border-british-blue/20 bg-cream/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Languages className="h-6 w-6 text-burgundy" />
                  <CardTitle className="text-navy">Enfoque Comunicativo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-navy/80">
                  Clases centradas en conversación, comprensión auditiva y producción escrita.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-british-blue/20 bg-cream/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-burgundy" />
                  <CardTitle className="text-navy">Material Actualizado</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-navy/80">
                  Recursos digitales, prácticas guiadas y evaluaciones periódicas por nivel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-british-blue/20 bg-cream/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-burgundy" />
                  <CardTitle className="text-navy">Acompañamiento Docente</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-navy/80">
                  Docentes con experiencia y seguimiento personalizado de tu progreso.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rutas a clases */}
        <section className="py-12 bg-parchment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-british-blue/20 bg-cream">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-navy">Clases de Inglés</CardTitle>
                  <CardDescription className="text-navy/80">
                    Niveles desde principiante a avanzado. Preparación para certificaciones.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/servicios/ingles">
                    <Button>
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-british-blue/20 bg-cream">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-navy">Clases de Portugués</CardTitle>
                  <CardDescription className="text-navy/80">
                    Desde lo básico hasta conversación fluida para viajes y negocios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/servicios/portugues">
                    <Button>
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Servicios;





