import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo-DV.png"
          alt="Developers Valhalla Logo"
          width={200}
          height={100}
          priority
        />
      </div>

      {/* Links */}
      <ul className="flex items-center gap-6 text-primary font-medium">
        <li>
          <a
            href="#products"
            className="px-4 py-2 rounded-md transition-all duration-300
                       hover:bg-white hover:text-[#050426]"
          >
            Our Products
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md transition-all duration-300
                       hover:bg-white hover:text-[#050426]"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
