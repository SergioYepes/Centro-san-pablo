import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth";

const BlogProfesores = () => {
  const posts = [
    { titulo: "Tarea: Listening A2", resumen: "Audio y preguntas para practicar.", autor: "Prof. Ana" },
    { titulo: "Debate: Viajes", resumen: "Comparte tu experiencia en inglés.", autor: "Prof. Luis" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl font-bold text-navy mb-6 text-center">Blog de Profesores</h1>
            <p className="text-navy/70 text-center mb-10">Publicaciones de tareas, videos y conversaciones (solo profesores).</p>
            <PostForm />
            <div className="space-y-4">
              {posts.map((p, i) => (
                <Card key={i} className="bg-cream">
                  <CardHeader>
                    <CardTitle className="text-navy">{p.titulo}</CardTitle>
                    <CardDescription>{p.autor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy/80">{p.resumen}</p>
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
          <Input placeholder="Resumen / Consigna" />
          <div className="text-right">
            <Button>Publicar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogProfesores;



