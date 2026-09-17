import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "59175879437"; // mismo número del footer, sin espacios ni +

export default function Contacto() {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });

    function handleSubmit(e) {
        e.preventDefault();

        const text = `Hola, soy ${form.name}.%0A${form.message}${form.phone ? `%0AMi teléfono: ${form.phone}` : ""}`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    }

    return (
        <section id="contacto" className="py-20 bg-[#FFF8E1] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-12">
                {/* Info */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Hablemos de tu pedido</h2>
                    <p className="mt-3 text-gray-600">Escríbenos y te respondemos directo por WhatsApp para coordinar tu pedido.</p>

                    <div className="mt-8 space-y-5">
                        <div className="flex items-center gap-3 text-gray-700">
                            <Clock size={20} className="text-primary shrink-0" />
                            <div>
                                <p className="font-semibold text-[#6D4C41]">Horario de atención</p>
                                <p className="text-sm text-gray-500">Lunes a viernes · 9:00 am – 5:00 pm</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <Phone size={20} className="text-primary shrink-0" />
                            <p className="text-sm">+591 77771361</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <MapPin size={20} className="text-primary shrink-0" />
                            <p className="text-sm">La Paz, Bolivia</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-4">
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="border rounded-lg px-4 py-3 w-full"
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Tu teléfono (opcional)"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="border rounded-lg px-4 py-3 w-full"
                    />

                    <textarea
                        placeholder="Cuéntanos qué pastel tienes en mente..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        className="border rounded-lg px-4 py-3 w-full resize-none"
                        required
                    />

                    <button type="submit" className="bg-primary hover:opacity-90 text-white w-full py-3 rounded-full font-medium transition">
                        Enviar por WhatsApp
                    </button>
                </form>
            </div>
        </section>
    );
}
