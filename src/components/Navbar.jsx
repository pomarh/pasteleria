import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-[#6D4C41]">Dulce Miley</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li className="hover:text-pink-400 cursor-pointer">Inicio</li>
                    <li className="hover:text-pink-400 cursor-pointer">Productos</li>
                    <li className="hover:text-pink-400 cursor-pointer">Nosotros</li>
                    <li className="hover:text-pink-400 cursor-pointer">Contacto</li>
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
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ul>

                    <button className="mt-4 w-full bg-pink-400 text-white py-2 rounded-full">Ordenar</button>
                </div>
            )}
        </header>
    );
}
