import { Star } from "lucide-react";

const testimonials = [
    {
        name: "María López",
        role: "Cliente frecuente",
        image: "/clients/client1.jpg",
        comment: "Los mejores pasteles que he probado. La calidad y presentación son increíbles.",
        rating: 5,
    },
    {
        name: "Viviana Rojas",
        role: "Evento corporativo",
        image: "/clients/client2.jpg",
        comment: "Encargamos para un evento y todos quedaron encantados. Súper recomendados.",
        rating: 5,
    },
    {
        name: "Ana Pérez",
        role: "Cumpleaños",
        image: "/clients/client3.jpg",
        comment: "El pastel personalizado quedó perfecto. Exactamente como lo imaginé.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Lo que dicen nuestros clientes</h2>
                    <p className="text-gray-600 mt-3">Experiencias reales que endulzan momentos</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#FFF8E1] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                            {/* Stars */}
                            <div className="flex mb-3">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-700 italic">“{item.comment}”</p>

                            {/* User */}
                            <div className="flex items-center gap-3 mt-6">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-semibold text-[#6D4C41]">{item.name}</h4>
                                    <span className="text-sm text-gray-500">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
