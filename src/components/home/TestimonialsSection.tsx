import { StarIcon } from "lucide-react";
import EditButton from "@/components/admin/EditButton";

const testimonials = [
  {
    name: "Анна Ивановна",
    text: "Выражаю огромную благодарность всему персоналу медицинского центра. Врачи очень внимательные, всегда подробно объясняют диагноз и план лечения. Современное оборудование и комфортная обстановка создают приятное впечатление.",
    rating: 5,
  },
  {
    name: "Сергей Петрович",
    text: "Обратился с болями в спине, был приятно удивлен профессионализмом врачей. Быстро поставили диагноз и назначили эффективное лечение. Уже через неделю почувствовал значительное улучшение.",
    rating: 5,
  },
  {
    name: "Елена Михайловна",
    text: "Водила ребенка на прием к педиатру. Врач нашла подход к моему сыну, все объяснила доступным языком. Очень довольна качеством обслуживания и профессионализмом персонала.",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  const handleEdit = () => {
    console.log("Редактирование отзывов");
  };

  return (
    <section className="py-20 bg-accent/50 relative">
      <EditButton onClick={handleEdit} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Отзывы пациентов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мнение наших пациентов - лучшее подтверждение качества нашей работы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
              <p className="font-medium text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
