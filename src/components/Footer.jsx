import { FaFacebook, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#6D4C41] text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Dulce Atelier</h2>
                    <p className="text-sm text-gray-200">Creamos momentos inolvidables con pasteles artesanales hechos con amor y dedicación.</p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-3">Enlaces</h3>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li className="hover:text-pink-300 cursor-pointer">Inicio</li>
                        <li className="hover:text-pink-300 cursor-pointer">Productos</li>
                        <li className="hover:text-pink-300 cursor-pointer">Nosotros</li>
                        <li className="hover:text-pink-300 cursor-pointer">Contacto</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3">Contacto</h3>
                    <ul className="space-y-3 text-gray-200 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin size={16} /> La Paz, Bolivia
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> +591 70000000
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} /> contacto@dulceatelier.com
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-3">Síguenos</h3>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-pink-400 hover:scale-110 transition">
                            <FaFacebook size={18} />
                        </a>

                        <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-pink-400 hover:scale-110 transition">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 text-center py-4 text-sm text-gray-300">
                © {new Date().getFullYear()} Dulce Atelier. Todos los derechos reservados.
            </div>
        </footer>
    );
}
