
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "@/constants/navigation";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl font-bold">Точка ОПОРЫ</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Современный медицинский центр с высококвалифицированными специалистами и передовым оборудованием для вашего здоровья.
            </p>
            <div className="flex items-center space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.slice(1).map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/price" className="text-gray-300 hover:text-primary transition-colors">
                  Цены
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Время работы</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Понедельник - Пятница:</span>
                <span>8:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье:</span>
                <span>Выходной</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} ООО «Точка ОПОРЫ». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
