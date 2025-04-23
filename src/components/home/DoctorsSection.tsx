
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Иванов Иван Иванович",
    specialty: "Кардиолог",
    image: "doctor-placeholder",
    experience: "15 лет опыта",
  },
  {
    name: "Петрова Елена Сергеевна",
    specialty: "Невролог",
    image: "doctor-placeholder",
    experience: "12 лет опыта",
  },
  {
    name: "Смирнов Алексей Петрович",
    specialty: "Терапевт",
    image: "doctor-placeholder",
    experience: "10 лет опыта",
  },
  {
    name: "Козлова Мария Александровна",
    specialty: "Педиатр",
    image: "doctor-placeholder",
    experience: "8 лет опыта",
  }
];

const DoctorsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши врачи</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Команда высококвалифицированных специалистов с многолетним опытом работы и заботой о каждом пациенте.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-gray-500">
                  Фото врача
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-primary font-medium">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mt-1">{doctor.experience}</p>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full border-primary text-primary hover:bg-primary/10"
                >
                  Записаться
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Все специалисты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
