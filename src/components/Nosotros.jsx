export default function Nosotros() {
    const values = [
        { icon: "🌿", title: "Ingredientes frescos", text: "Seleccionamos cada insumo con cuidado, sin atajos." },
        { icon: "✋", title: "Hecho a mano", text: "Cada pastel se decora uno por uno, nunca en serie." },
        { icon: "❤️", title: "Con amor", text: "Horneamos pensando en el momento que vas a celebrar." },
    ];

    return (
        <section id="nosotros" className="py-20 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                    <div className="absolute -z-0 -top-6 -left-6 w-32 h-32 rounded-full bg-secondary/50 blur-2xl" />
                    <img
                        src="img/tartaleta1.jpg"
                        alt="Dulce Miley"
                        className="relative z-10 w-full h-80 md:h-96 object-cover rounded-3xl shadow-md"
                    />
                </div>

                {/* Text */}
                <div className="text-center md:text-left">
                    <span className="inline-block bg-[#FFF8E1] text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">Nuestra historia</span>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Así nació Dulce Miley</h2>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        [Aquí va la historia real: cómo empezó, quién lo hace, desde cuándo. Por ejemplo: "Dulce Miley nació en la cocina de nuestra
                        casa, horneando para familiares y amigos. Con el tiempo, lo que era un hobby se convirtió en la pastelería artesanal que somos
                        hoy."]
                    </p>

                    <div className="mt-8 grid sm:grid-cols-3 gap-5">
                        {values.map((v) => (
                            <div key={v.title} className="bg-[#FFF8E1] rounded-2xl p-4 text-center md:text-left">
                                <span className="text-2xl">{v.icon}</span>
                                <h3 className="mt-2 font-semibold text-[#6D4C41] text-sm">{v.title}</h3>
                                <p className="mt-1 text-gray-500 text-xs">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
