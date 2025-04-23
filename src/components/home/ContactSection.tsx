
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Контакты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы и помочь записаться на приём к специалисту.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-accent rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Адрес</h4>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Телефон</h4>
                  <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@tochka-opory.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Часы работы</h4>
                  <p className="text-gray-600">Пн-Пт: 8:00 - 20:00</p>
                  <p className="text-gray-600">Сб: 9:00 - 18:00</p>
                  <p className="text-gray-600">Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 md:h-auto bg-gray-200 rounded-lg">
            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center text-gray-500">
              Карта расположения клиники
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
