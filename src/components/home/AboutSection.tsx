
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import EditButton from "@/components/admin/EditButton";

const AboutSection = () => {
  const handleEdit = () => {
    console.log("Редактирование секции О нас");
  };

  return (
    <section className="py-20 bg-white relative">
      <EditButton onClick={handleEdit} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">О медицинском центре "Точка ОПОРЫ"</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              "Точка ОПОРЫ" — это современный медицинский центр, оснащенный передовым оборудованием для диагностики и лечения различных заболеваний. Наша миссия — обеспечить каждого пациента качественной медицинской помощью.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Мы собрали команду опытных врачей различных специальностей, которые регулярно повышают свою квалификацию и применяют современные методики лечения.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <Check className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Квалифицированные специалисты</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Современное оборудование</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Комплексный подход</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Доступные цены</span>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90">
              Узнать больше
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="h-80 lg:h-96 bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-gray-500">
                    Фото медицинского центра
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <p className="font-medium">Более 10 лет мы заботимся о здоровье наших пациентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
