
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AppointmentSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Запись на приём</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами для подтверждения записи на удобное для вас время.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    ФИО
                  </label>
                  <Input id="name" placeholder="Введите ваше ФИО" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Отделение
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите отделение" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Кардиология</SelectItem>
                      <SelectItem value="neurology">Неврология</SelectItem>
                      <SelectItem value="therapy">Терапия</SelectItem>
                      <SelectItem value="pediatrics">Педиатрия</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                    Врач
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите врача" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ivanov">Иванов И.И. - Кардиолог</SelectItem>
                      <SelectItem value="petrova">Петрова Е.С. - Невролог</SelectItem>
                      <SelectItem value="smirnov">Смирнов А.П. - Терапевт</SelectItem>
                      <SelectItem value="kozlova">Козлова М.А. - Педиатр</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Комментарий (не обязательно)
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Укажите жалобы, желаемую дату и время приёма" 
                  className="h-32"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Отправить заявку
              </Button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
