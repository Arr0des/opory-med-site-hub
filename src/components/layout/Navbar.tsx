
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold">Точка ОПОРЫ</span>
        </Link>

        {/* Desktop Navigation */}
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
          <Button className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = '/contacts#appointment'}>Записаться</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
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
              className="bg-primary hover:bg-primary/90 w-full" 
              onClick={() => {
                setIsOpen(false);
                window.location.href = '/contacts#appointment';
              }}
            >
              Записаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
