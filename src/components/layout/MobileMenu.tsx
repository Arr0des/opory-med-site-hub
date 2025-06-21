
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, LogOut, Phone } from "lucide-react";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "@/constants/navigation";
import { AuthUser } from "@/types/auth";

interface MobileMenuProps {
  isOpen: boolean;
  user: AuthUser | null;
  onClose: () => void;
  onAuthOpen: () => void;
  onSignOut: () => void;
}

const MobileMenu = ({ isOpen, user, onClose, onAuthOpen, onSignOut }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white w-full py-4 px-6 shadow-md absolute top-16 left-0 z-50">
      <div className="flex flex-col space-y-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-gray-700 hover:text-primary font-medium"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
        <div className="flex items-center space-x-2 pt-2">
          <Phone size={18} className="text-primary" />
          <span className="text-gray-700">{CONTACT_INFO.phone}</span>
        </div>
        {user ? (
          <>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              asChild
              onClick={onClose}
            >
              <Link to="/profile">
                <User size={18} />
                <span>Профиль</span>
              </Link>
            </Button>
            <Button 
              variant="secondary" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => {
                onClose();
                onSignOut();
              }}
            >
              <LogOut size={18} />
              <span>Выйти</span>
            </Button>
          </>
        ) : (
          <Button 
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => {
              onClose();
              onAuthOpen();
            }}
          >
            <User size={18} />
            <span>Войти</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
