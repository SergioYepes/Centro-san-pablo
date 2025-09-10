import { Header } from "@/components/layout/Header";

const Recursos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-parchment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h1 className="font-serif text-4xl font-bold text-navy mb-6 text-center">Recursos del Mes</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-elegant bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Clase destacada de Inglés"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-elegant bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Clase destacada de Portugués"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Recursos;





