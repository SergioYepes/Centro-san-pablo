import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppFloat } from "./components/ui/whatsapp-float";
import { AuthProvider } from "./contexts/auth";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import NotFound from "./pages/NotFound";
import Servicios from "./pages/Servicios";
import ServiciosIngles from "./pages/ServiciosIngles";
import ServiciosPortugues from "./pages/ServiciosPortugues";
import ClubConversacion from "./pages/ClubConversacion";
import Recursos from "./pages/Recursos";
import Magazine from "./pages/Magazine";
import MetodosEstudio from "./pages/MetodosEstudio";
import BlogProfesores from "./pages/BlogProfesores";
import { RequireAuth, RequireProfessor } from "./components/auth/RequireAuth";
import Admin from "./pages/Admin";
import { RequireAdmin } from "./components/auth/RequireAuth";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
        <Header />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/ingles" element={<ServiciosIngles />} />
          <Route path="/servicios/portugues" element={<ServiciosPortugues />} />
          <Route path="/club-conversacion" element={<RequireAuth><ClubConversacion /></RequireAuth>} />
          <Route path="/recursos" element={<RequireAuth><Recursos /></RequireAuth>} />
          <Route path="/magazine" element={<RequireAuth><Magazine /></RequireAuth>} />
          <Route path="/metodos-estudio" element={<RequireAuth><MetodosEstudio /></RequireAuth>} />
          <Route path="/blog" element={<RequireAuth><BlogProfesores /></RequireAuth>} />
          <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
          <WhatsAppFloat />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
