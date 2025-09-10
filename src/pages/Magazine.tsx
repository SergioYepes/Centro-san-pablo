import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth";

const Magazine = () => {
  const noticias = [
    { titulo: "Nueva cohorte de Inglés B1", resumen: "Inicio en Octubre. Inscripciones abiertas.", fecha: "2025-09-01" },
    { titulo: "Club de conversación los viernes", resumen: "Sesiones mixtas Inglés/Portugués.", fecha: "2025-09-05" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl font-bold text-navy mb-6 text-center">Magazine</h1>
            <p className="text-navy/70 text-center mb-10">Tablón de anuncios (solo profesores pueden publicar).</p>
            <PostForm />
            <div className="space-y-4">
              {noticias.map((n, i) => (
                <Card key={i} className="bg-cream">
                  <CardHeader>
                    <CardTitle className="text-navy">{n.titulo}</CardTitle>
                    <CardDescription>{new Date(n.fecha).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy/80">{n.resumen}</p>
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

const PostForm = () => {
  const { user } = useAuth();
  if (!user || user.role !== "profesor") return null;
  return (
    <Card className="bg-cream mb-8">
      <CardHeader>
        <CardTitle className="text-navy">Nueva publicación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          <Input placeholder="Título" />
          <Input placeholder="Resumen" />
          <div className="text-right">
            <Button>Publicar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Magazine;



