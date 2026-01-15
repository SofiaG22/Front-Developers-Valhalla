import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary px-8 py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/logo-DV2.svg"
                        alt="Developers Valhalla Logo"
                        width={100}
                        height={100}
                    />
                    <span className="text-xl font-semibold">
                        Developers Valhalla
                    </span>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 text-sm md:flex-row md:gap-16">

                    {/* Contact */}
                    <div>
                        <h4 className="mb-3 text-white font-semibold">Contact</h4>
                        <ul className="space-y-2 text-white/80">
                            <li>Email: contact@devvalhalla.com</li>
                            <li>Bogotá, Colombia</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-3 text-white font-semibold">Legal</h4>
                        <ul className="space-y-2 text-white/80">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-3 text-white font-semibold">Follow us</h4>
                        <div className="flex gap-4 text-white text-2xl">
                            <a href="#" className="hover:text-white/80 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-white/80 transition">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="hover:text-white/80 transition">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
                © {new Date().getFullYear()} Developers Valhalla. All rights reserved.
            </div>
        </footer>
    );
}
