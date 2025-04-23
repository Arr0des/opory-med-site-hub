
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-blue-50 to-cyan-50 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Ваша точка опоры <br className="hidden md:block" />
              <span className="text-primary">в вопросах здоровья</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Современный медицинский центр с командой высококвалифицированных специалистов и передовым оборудованием для диагностики и лечения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Наши услуги
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <p className="text-gray-600">Лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <p className="text-gray-600">Специалистов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15k+</div>
                <p className="text-gray-600">Довольных пациентов</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            {/* Here you can add an image of doctors or medical staff */}
            <div className="bg-white p-2 rounded-lg shadow-xl">
              <div className="w-full h-[400px] bg-gray-200 rounded overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-gray-500">
                  Изображение медицинского персонала
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
