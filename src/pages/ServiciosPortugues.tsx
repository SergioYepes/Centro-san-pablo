import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import { GraduationCap, User2, CheckCircle2 } from "lucide-react";

const ServiciosPortugues = () => {
  const beneficios = [
    "Conversación práctica orientada a viajes y negocios",
    "Pronunciación y escucha con materiales auténticos",
    "Gramática aplicada a situaciones reales",
    "Horarios flexibles y grupos reducidos"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">Clases de Portugués</h1>
            <p className="text-emerald-900/80 text-lg">
              Aprende portugués de forma dinámica con seguimiento cercano de tu progreso.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 border border-british-blue/20 bg-cream">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <User2 className="h-6 w-6 text-burgundy" />
                  <CardTitle className="text-emerald-900">Tu profesora</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-900/80">
                  Docente nativa/certificada con experiencia en formación para objetivos específicos: 
                  viajes, trabajo y certificaciones de portugués.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-british-blue/20 bg-cream">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-burgundy" />
                  <CardTitle className="text-emerald-900">Oferta</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-emerald-900/80">
                  {beneficios.map((b, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-burgundy mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <Button className="bg-emerald-900 hover:text-emerald-900">Consultar disponibilidad</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

    </div>
  );
};

export default ServiciosPortugues;


