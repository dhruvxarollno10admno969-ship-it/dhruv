export default function About() {
  return (
    <section
  id="about"
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{
    backgroundImage:
      "url('/village.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

    <h4 className="text-orange-400 text-lg uppercase tracking-[5px] font-semibold">
      Welcome to
    </h4>

    <h2 className="text-5xl md:text-6xl font-extrabold mt-3 mb-6">
      Hidden Leaf Village
    </h2>

    <p className="text-gray-200 text-lg leading-8 max-w-3xl mx-auto">
      Hidden Leaf Village is the home of legendary shinobi and the birthplace
      of heroes like Naruto Uzumaki. This website is dedicated to exploring
      the incredible world of Naruto, where courage, friendship, and the
      Will of Fire inspire generations of ninja. Discover powerful jutsu,
      iconic Hokage, unforgettable characters, and the rich history of the
      Five Great Nations through an immersive experience.
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">

      <div>
        <h3 className="text-4xl font-bold text-orange-400">100+</h3>
        <p className="text-gray-300 mt-2">Characters</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-orange-400">50+</h3>
        <p className="text-gray-300 mt-2">Jutsu</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-orange-400">7</h3>
        <p className="text-gray-300 mt-2">Hokage</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-orange-400">5</h3>
        <p className="text-gray-300 mt-2">Great Nations</p>
      </div>

    </div>

    {/* Button */}
    <div className="flex justify-center leading-9 mt-9">
      <button className="bg-orange-500 hover:bg-orange-600
       px-8 py-4 rounded-full text-lg font-semibold 
       transition duration-300 left-5 
       hover:shadow-[0_0_35px_rgba(249,115,22,.45)]">
        Explore Characters
      </button>
    </div>
    {/* Scroll */}

        <div className="absolute -bottom-50 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-xs uppercase tracking-[5px]">Scroll</span>

            <div className="h-10 w-[2px] rounded-full bg-orange-500"></div>
          </div>
        </div>

  </div>
</section>
  );
}