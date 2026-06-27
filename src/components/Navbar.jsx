import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">

        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          offset={-70}
          className="text-2xl font-bold text-blue-400 cursor-pointer select-none"
        >
          R | G
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              activeClass="text-blue-400 border-b-2 border-blue-400"
              className="cursor-pointer text-gray-300 hover:text-blue-400 transition-all duration-300 pb-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col py-4">

            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="px-8 py-4 text-gray-300 hover:text-blue-400 cursor-pointer transition"
              >
                {item.label}
              </Link>
            ))}

          </div>

        </div>
      )}
    </nav>
  );
}