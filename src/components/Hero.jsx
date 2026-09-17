export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="inicio" className="pt-24 bg-[#FFF8E1] scroll-mt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center min-h-[90vh]">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <span className="inline-block bg-white text-primary text-sm font-medium px-4 py-1.5 rounded-full shadow-sm mb-5">
                        🧁 Repostería artesanal · La Paz
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#6D4C41] leading-tight">
                        Endulza tus momentos con
                        <span className="text-primary"> nuestras creaciones</span>
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg">Pasteles artesanales hechos con amor, ingredientes frescos y un toque de magia.</p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-full transition"
                            onClick={() => scrollTo("productos")}>
                            Ver productos
                        </button>

                        <button
                            className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/10 transition"
                            onClick={() => scrollTo("contacto")}>
                            Personalizar pedido
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex justify-center">
                    <div className="absolute w-96 h-96 md:w-[420px] md:h-[420px] rounded-full bg-tertiary/40 blur-3xl -z-0" />
                    <img src="/img/hero2.png" alt="Pastel" className="relative z-10 w-[380px] md:w-[520px] object-contain drop-shadow-xl" />
                </div>
            </div>
        </section>
    );
}
