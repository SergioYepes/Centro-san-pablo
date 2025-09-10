import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const MetodosEstudio = () => {
  const recursos = [
    { titulo: "Técnica Pomodoro", desc: "Cómo organizar sesiones de estudio efectivas." },
    { titulo: "Spaced Repetition", desc: "Memorización a largo plazo con intervalos." },
    { titulo: "Shadowing", desc: "Mejora pronunciación imitando audio nativo." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-parchment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl font-bold text-navy mb-8 text-center">Métodos de Estudio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recursos.map((r, i) => (
                <Card key={i} className="bg-cream">
                  <CardHeader>
                    <CardTitle className="text-navy">{r.titulo}</CardTitle>
                    <CardDescription>{r.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a className="text-burgundy" href="#">Leer más</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MetodosEstudio;

