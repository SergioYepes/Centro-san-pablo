import { useState } from "react";
import { Menu, X, GraduationCap, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { Navigation } from "./Navigation";
import { LoginModal } from "../auth/LoginModal";
import sanPabloLogo from "../../assets/San-pablo-logo.png";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/auth";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const isPortuguese = location.pathname.startsWith("/servicios/portugues");
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-elegant ${
        isPortuguese ? "bg-emerald-700 border-emerald-400/30" : "bg-navy border-british-blue/20"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Login and Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-cream" />
                ) : (
                  <Menu className="h-6 w-6 text-cream" />
                )}
              </Button>
              {!user ? (
                <Button
                  size="sm"
                  onClick={() => setIsLoginOpen(true)}
                  className="hidden sm:flex"
                >
                  <LogIn className="h-4 w-4" />
                  Iniciar Sesión
                </Button>
              ) : (
                <div className="hidden sm:flex items-center space-x-2 text-cream/90">
                  <span className="text-sm">{user.name} ({user.role})</span>
                  <Button size="sm" className="text-black/90" variant="outline" onClick={logout}>Salir</Button>
                </div>
              )}
              {
                user && user.role === "admin" && (
                  <Button size="sm" variant="outline" onClick={() => window.location.href = "/admin"}>
                    Admin
                  </Button>
                )
              }                                 

              
            </div>
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <Link to="/">
                <img 
                  src={sanPabloLogo} 
                  alt="Centro Educativo San Pablo" 
                  className="h-10 w-10 object-contain"
                />
              </Link>
              <div className="hidden sm:block">
                <h1 className="font-serif text-xl font-bold text-cream">
                  Centro Educativo San Pablo
                </h1>
                <p className="text-sm text-cream/70 font-medium">Excellence in Language Education</p>
              </div>
              <div className="sm:hidden">
                <h1 className="font-serif text-lg font-bold text-cream">San Pablo</h1>
              </div>
            </div>

            
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div>
              <div className={`px-2 pt-2 pb-3 space-y-1 border-t ${isPortuguese?"bg-emerald-700 border-emerald-400/30":"border-british-blue/20 bg-navy"} `}>
                <Navigation closeMenu={closeMenu} />
                <div className="pt-4 border-t border-british-blue/20 mt-4">
                  {!user ? (
                    <Button
                      size="sm"
                      onClick={() => {
                        setIsLoginOpen(true);
                        closeMenu();
                      }}
                      className="w-full"
                    >
                      <LogIn className="h-4 w-4" />
                      Iniciar Sesión
                    </Button>
                  ) : (
                    <Button size="sm" className="w-full" variant="outline" onClick={logout}>Salir</Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};