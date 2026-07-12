import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SearchPopup from "./searchbar";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Characters",
    "Hoakage",
    "Jutsu",
    "Villages",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1450px]
        rounded-full border border-white/10
        backdrop-blur-2xl
        transition-all duration-500

        ${
          scrolled
            ? "top-3 py-2 bg-black/70 shadow-[0_8px_35px_rgba(0,0,0,.45)]"
            : "top-5 py-3 bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,.25)]"
        }`}
      >
        <div className="flex items-center justify-between px-8 lg:px-10">
          {/* Logo */}

          <a href="#">
            <img
              src="/naruto_LOGO-removebg-preview.png"
              alt="Naruto"
              className="h-12 transition duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop */}

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActive(item)}
                  className={`relative font-medium tracking-wide transition-all duration-300

                  ${
                    active === item
                      ? "text-orange-400"
                      : "text-white hover:text-orange-400"
                  }

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:rounded-full
                  after:bg-orange-500
                  after:transition-all
                  after:duration-300

                  ${
                    active === item
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-6 -ml-">
            <button
              className="
              text-white
              transition-all
              duration-300
              hover:text-orange-400
              hover:scale-110
            "
            >
              
              <SearchPopup />
            </button>

            <button
              className="
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              px-7
              py-2.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(249,115,22,.55)]
              active:scale-95
            "
            >
              Login
            </button>
          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed left-1/2 top-24 -translate-x-1/2
        z-40
        w-[92%]
        rounded-3xl
        border border-white/10
        bg-black/90
        backdrop-blur-2xl
        overflow-hidden
        transition-all duration-500

        ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className={`block px-8 py-5 transition-all

                ${
                  active === item
                    ? "bg-orange-500/20 text-orange-400"
                    : "text-white hover:bg-orange-500/10 hover:text-orange-400"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}