import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

type Row = { id: string; email?: string; role?: string; name?: string };

const Admin = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const snap = await getDocs(collection(db, "users"));
    const data: Row[] = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) }));
    setRows(data);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const setRole = async (id: string, role: string) => {
    await updateDoc(doc(db, "users", id), { role });
    await load();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl font-bold text-navy mb-6 text-center">Administración</h1>
            <Card className="bg-cream">
              <CardHeader>
                <CardTitle className="text-navy">Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p className="text-navy/70">Cargando...</p>
                ) : (
                  <div className="space-y-3">
                    {rows.map(r => (
                      <div key={r.id} className="flex items-center justify-between border-b border-navy/10 pb-3">
                        <div>
                          <p className="text-navy font-medium">{r.email || r.name}</p>
                          <p className="text-navy/60 text-sm">Rol: {r.role || "alumno"}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" onClick={() => setRole(r.id, "alumno")}>Alumno</Button>
                          <Button variant="outline" onClick={() => setRole(r.id, "profesor")}>Profesor</Button>
                          <Button variant="outline" onClick={() => setRole(r.id, "admin")}>Admin</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;



