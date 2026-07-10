export default function About() {
  return (
    <section
  id="about"
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{
    backgroundImage:
      "url('/images/konoha-bg.jpg')",
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
    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 -mt-12">
      Explore Characters
    </button>

  </div>
</section>
  );
}