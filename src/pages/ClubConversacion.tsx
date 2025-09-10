import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth";

const ClubConversacion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-navy mb-4">Club de Conversación</h1>
            <p className="text-navy/80 text-lg">Foro de conversaciones para usuarios autenticados.</p>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <NewThreadForm />
            <div className="space-y-4">
              {[{t:"Presentaciones"},{t:"Viajes"}].map((h,i)=> (
                <Card key={i} className="bg-cream">
                  <CardHeader>
                    <CardTitle className="text-navy">{h.t}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy/80">Último mensaje: hace 2 horas</p>
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

const NewThreadForm = () => {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <Card className="bg-cream mb-6">
      <CardHeader>
        <CardTitle className="text-navy">Nuevo hilo de conversación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          <Input placeholder="Título del hilo" />
          <div className="text-right">
            <Button>Crear</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClubConversacion;



