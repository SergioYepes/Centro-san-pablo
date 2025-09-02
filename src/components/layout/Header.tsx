import { useState } from "react";
import { Menu, X, GraduationCap, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { Navigation } from "./Navigation";
import { LoginModal } from "../auth/LoginModal";
import sanPabloLogo from "../../assets/san-pablo-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy backdrop-blur-md border-b border-british-blue/20 shadow-elegant">
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
              <Button
                size="sm"
                onClick={() => setIsLoginOpen(true)}
                className="hidden sm:flex"
              >
                <LogIn className="h-4 w-4" />
                Iniciar Sesión
              </Button>

              
            </div>
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <img 
                src={sanPabloLogo} 
                alt="Centro Educativo San Pablo" 
                className="h-10 w-10 object-contain"
              />
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
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-british-blue/20 bg-navy">
                <Navigation closeMenu={closeMenu} />
                <div className="pt-4 border-t border-british-blue/20 mt-4">
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