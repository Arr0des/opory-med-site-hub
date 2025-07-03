
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

const AdminToggle = () => {
  const { isAdmin, toggleAdminMode } = useAdmin();

  return (
    <Button
      onClick={toggleAdminMode}
      variant={isAdmin ? "default" : "outline"}
      size="sm"
      className="fixed bottom-4 right-4 z-50"
    >
      <Settings className="w-4 h-4 mr-2" />
      {isAdmin ? "Выйти из режима редактирования" : "Режим редактирования"}
    </Button>
  );
};

export default AdminToggle;
