import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { GraduationCap, User2, CheckCircle2 } from "lucide-react";

const ServiciosIngles = () => {
  const beneficios = [
    "Enfoque comunicativo con práctica real",
    "Preparación para exámenes internacionales (IELTS, Cambridge)",
    "Material digital y tareas guiadas",
    "Grupos reducidos y seguimiento personalizado"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy mb-4">Clases de Inglés</h1>
            <p className="text-navy/80 text-lg">
              Domina el inglés con una docente especializada y un plan adaptado a tus metas.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 border border-british-blue/20 bg-cream">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <User2 className="h-6 w-6 text-burgundy" />
                  <CardTitle className="text-navy">Tu profesora</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-navy/80">
                  Profesora con amplia experiencia en enseñanza de inglés a todas las edades, 
                  certificada y con formación en metodologías comunicativas y evaluación por competencias.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-british-blue/20 bg-cream">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-burgundy" />
                  <CardTitle className="text-navy">Oferta</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-navy/80">
                  {beneficios.map((b, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-burgundy mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <Button>Consultar disponibilidad</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-british text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Centro Educativo San Pablo</h3>
            <p className="text-cream/90 mb-6">Excellence in Language Education</p>
            <p className="text-cream/80 text-sm">© 2024 Centro Educativo San Pablo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiciosIngles;


