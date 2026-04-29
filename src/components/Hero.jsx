export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <section id="inicio" className="pt-24 bg-[#FFF8E1] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center min-h-[90vh]">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#6D4C41] leading-tight">
                        Endulza tus momentos con
                        <span className="text-pink-400"> nuestras creaciones</span>
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg">Pasteles artesanales hechos con amor, ingredientes frescos y un toque de magia.</p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full transition"
                            onClick={() => scrollTo("productos")}>
                            Ver productos
                        </button>

                        <button
                            className="border border-pink-400 text-pink-400 px-6 py-3 rounded-full hover:bg-pink-100 transition"
                            onClick={() => scrollTo("contacto")}>
                            Personalizar pedido
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img src="/img/hero2.png" alt="Pastel" className="w-110 md:w-162.5 object-contain drop-shadow-xl" />
                </div>
            </div>
        </section>
    );
}
