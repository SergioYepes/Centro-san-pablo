import React from 'react'
import { useLocation } from 'react-router-dom';

function Footer() {
const location = useLocation();
const isPortuguese = location.pathname.startsWith("/servicios/portugues");
  return (
        <footer className={`${isPortuguese ? "bg-gradient-to-r from-emerald-700 via-sky-700 to-yellow-500 text-cream py-12": "bg-gradient-british text-british/80 py-12" }`}>
            <div className="container mx-auto px-4">
            <div className="text-center">
                <h3 className= {`font-serif text-2xl font-bold mb-4 ${isPortuguese ? "text-cream": "text-british/80" }`}>Centro Educativo San Pablo</h3>
                <p className= {`mb-6 ${isPortuguese ? "text-cream": "text-british/80" }`}>Excellence in Language Education</p>
                <p className= {`text-sm ${isPortuguese ? "text-cream": "text-british/80 " }`}>© 2024 Centro Educativo San Pablo. Todos los derechos reservados.</p>
            </div>
            </div>
        </footer>
    )
}
export default Footer
