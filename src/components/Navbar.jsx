import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
        setOpen(false);
    };

    return (
        <header className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-[#6D4C41]" onClick={() => scrollTo("inicio")}>
                    Dulce Miley
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li onClick={() => scrollTo("inicio")} className="hover:text-pink-400 cursor-pointer">
                        Inicio
                    </li>
                    <li onClick={() => scrollTo("productos")} className="hover:text-pink-400 cursor-pointer">
                        Productos
                    </li>
                    <li onClick={() => scrollTo("nosotros")} className="hover:text-pink-400 cursor-pointer">
                        Nosotros
                    </li>
                    <li onClick={() => scrollTo("contacto")} className="hover:text-pink-400 cursor-pointer">
                        Contacto
                    </li>
                </ul>

                {/* CTA Desktop */}
                <button className="hidden md:block bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-full transition">Ordenar</button>

                {/* Mobile Button */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-6 pb-6 shadow-md">
                    <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                        <li onClick={() => scrollTo("inicio")}>Inicio</li>
                        <li onClick={() => scrollTo("productos")}>Productos</li>
                        <li onClick={() => scrollTo("nosotros")}>Nosotros</li>
                        <li onClick={() => scrollTo("contacto")}>Contacto</li>
                    </ul>

                    <button className="mt-4 w-full bg-pink-400 text-white py-2 rounded-full">Ordenar</button>
                </div>
            )}
        </header>
    );
}
