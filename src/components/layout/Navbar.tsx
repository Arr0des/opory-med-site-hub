import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthDialog from "../auth/AuthDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="Точка ОПОРЫ" 
            className="h-10 w-10 object-contain" 
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">Главная</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Услуги</Link>
          <Link to="/doctors" className="text-gray-700 hover:text-primary font-medium">Врачи</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">О нас</Link>
          <Link to="/contacts" className="text-gray-700 hover:text-primary font-medium">Контакты</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone size={18} className="text-primary" />
            <span className="text-gray-700">+7 (XXX) XXX-XX-XX</span>
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2" 
            onClick={() => setIsAuthOpen(true)}
          >
            <User size={18} />
            <span>Войти</span>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-6 shadow-md absolute top-16 left-0 z-50">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              Главная
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              Услуги
            </Link>
            <Link to="/doctors" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              Врачи
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              О нас
            </Link>
            <Link to="/contacts" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              Контакты
            </Link>
            <div className="flex items-center space-x-2 pt-2">
              <Phone size={18} className="text-primary" />
              <span className="text-gray-700">+7 (XXX) XXX-XX-XX</span>
            </div>
            <Button 
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => {
                setIsOpen(false);
                setIsAuthOpen(true);
              }}
            >
              <User size={18} />
              <span>Войти</span>
            </Button>
          </div>
        </div>
      )}

      <AuthDialog isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
};

export default Navbar;
