
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

interface EditButtonProps {
  onClick: () => void;
  className?: string;
}

const EditButton = ({ onClick, className = "" }: EditButtonProps) => {
  const { isAdmin } = useAdmin();

  if (!isAdmin) return null;

  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="sm"
      className={`absolute top-4 right-4 opacity-70 hover:opacity-100 ${className}`}
    >
      <Edit className="w-4 h-4 mr-1" />
      Редактировать
    </Button>
  );
};

export default EditButton;
