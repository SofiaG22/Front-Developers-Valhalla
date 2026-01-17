import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#4F46E5] text-white relative overflow-hidden mt-auto">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

                    {/* Logo & Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo-DV2.svg"
                                alt="Devs Valhalla Logo"
                                width={100}
                                height={100}
                                className="h-12 w-auto"
                            />
                            <span className="text-xl font-bold">
                                Devs Valhalla
                            </span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Elite software development from Colombia to the world.
                            Premium solutions for global businesses.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-white font-bold text-lg">Contact</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-white/60" />
                                <a href="mailto:contact@devsvalhalla.com" className="hover:text-white transition-colors">
                                    contact@devsvalhalla.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-white/60" />
                                <span>Bogotá, Colombia</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 text-white font-bold text-lg">Legal</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="hover:text-white transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-white font-bold text-lg">Follow Us</h4>
                        <div className="flex gap-4">
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
                    <p>© {new Date().getFullYear()} Devs Valhalla. All rights reserved.</p>
                    <p className="mt-2 text-xs text-white/60">
                        Elite software development | Colombia → Global | Premium quality guaranteed
                    </p>
                </div>
            </div>
        </footer>
    );
}
