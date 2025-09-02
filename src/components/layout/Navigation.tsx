import { NavLink } from "react-router-dom";
import { 
  Users, 
  BookOpen, 
  MessageCircle, 
  FolderOpen, 
  Newspaper, 
  GraduationCap, 
  Edit3 
} from "lucide-react";

interface NavigationProps {
  closeMenu: () => void;
}

export const Navigation = ({ closeMenu }: NavigationProps) => {
  const navItems = [
    { to: "/quienes-somos", label: "Quiénes Somos", icon: Users },
    { 
      to: "/servicios", 
      label: "Servicios", 
      icon: BookOpen,
      children: [
        { to: "/servicios/ingles", label: "Clases de Inglés" },
        { to: "/servicios/portugues", label: "Clases de Portugués" }
      ]
    },
    { to: "/club-conversacion", label: "Club de Conversación", icon: MessageCircle },
    { to: "/recursos", label: "Recursos del Mes", icon: FolderOpen },
    { to: "/magazine", label: "Magazine", icon: Newspaper },
    { to: "/metodos-estudio", label: "Métodos de Estudio", icon: GraduationCap },
    { to: "/blog", label: "Blog Profesores", icon: Edit3 },
  ];

  const NavItem = ({ item }: { item: typeof navItems[0] }) => {
    const Icon = item.icon;
    
    return (
      <div className="group">
        <NavLink
          to={item.to}
          onClick={closeMenu}
          className={({ isActive }) =>
            `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-cream text-navy"
                : "text-cream hover:bg-cream/10 hover:text-cream"
            }`
          }
        >
          <Icon className="h-4 w-4" />
          <span>{item.label}</span>
        </NavLink>
        
        {item.children && (
          <div className="ml-6 mt-1 space-y-1">
            {item.children.map((child, idx) => (
              <NavLink
                key={idx}
                to={child.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-burgundy text-cream"
                      : "text-cream/70 hover:bg-burgundy/10 hover:text-burgundy"
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-1">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </div>
  );
};