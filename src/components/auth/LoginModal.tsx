import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap, Mail, Lock, User } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-cream border border-gold/20">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-hero rounded-full">
              <GraduationCap className="h-8 w-8 text-cream" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-serif text-navy">
            Acceso al Portal Educativo
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-parchment">
            <TabsTrigger value="login" className="data-[state=active]:bg-navy data-[state=active]:text-cream">
              Iniciar Sesión
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-navy data-[state=active]:text-cream">
              Registrarse
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg text-navy">Bienvenido de vuelta</CardTitle>
                <CardDescription className="text-navy/70">
                  Ingresa tus credenciales para acceder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-medium">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-navy/50" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10 border-navy/20 focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-navy font-medium">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-navy/50" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 border-navy/20 focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Ingresando..." : "Ingresar al Portal"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg text-navy">Únete a San Pablo</CardTitle>
                <CardDescription className="text-navy/70">
                  Crea tu cuenta y comienza tu aventura educativa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy font-medium">Nombre Completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-navy/50" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre completo"
                        className="pl-10 border-navy/20 focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-navy font-medium">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-navy/50" />
                      <Input
                        id="reg-email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10 border-navy/20 focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password" className="text-navy font-medium">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-navy/50" />
                      <Input
                        id="reg-password"
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        className="pl-10 border-navy/20 focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};