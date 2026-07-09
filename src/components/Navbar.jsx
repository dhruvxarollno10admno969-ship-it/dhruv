import { Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
<nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 
    w-[90%] max-w-7xl
    bg-white/10 backdrop-blur-xl
    border border-white/20
rounded-full
px-5 py-2
flex justify-between items-center
shadow-2xl
    "
    >
   
  <div className="flex items-center">

    {/* Logo */}
    <div className="flex items-center">
      <img
        src="/naruto_LOGO-removebg-preview.png"
        alt="Naruto Logo"
        className="h-10 w-25"
      />
    </div>

    {/* Menu */}
    <ul className="hidden md:flex items-center gap-15 ml-24">
      <li>
        <a href="#" className="text-white hover:text-orange-400">Home</a>
      </li>

      <li>
        <a href="#" className="text-white hover:text-orange-400">About</a>
      </li>

      <li>
        <a href="#" className="text-white hover:text-orange-400">Hokages</a>
      </li>

      <li>
        <a href="#" className="text-white hover:text-orange-400">Characters</a>
      </li>

      <li>
        <a href="#" className="text-white hover:text-orange-400">Jutsu</a>
      </li>

      <li>
        <a href="#" className="text-white hover:text-orange-400">Villages</a>
      </li>
    </ul>

    {/* Right Side */}
    <div className="mr-15 flex gap-6">

      <button className="text-white text-2xl">
        🔍
      </button>

      <button
        className="
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-8 py-3
          rounded-full
        "
      >
        Login
      </button>

    </div>

  </div>
</nav>
  )
}