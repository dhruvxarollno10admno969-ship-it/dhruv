import About from "./About";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/naruto.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

        {/* Hero Content */}

        <div className="relative z-10 flex h-full items-center left-9">
          <div className="mx-auto flex w-full max-w-7xl px-6 sm:px-10 lg:px-20">
            <div className="max-w-3xl ">
              <p className="mb-5 text-sm  text-center uppercase tracking-[8px] text-orange-400 font-semibold">
                Hidden Leaf Village
              </p>

              <h1 className="leading-none font-black text-white left-9">
                <span className="block text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                  Naruto
                </span>

                <span className="mt-3  text-right block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-transparent drop-shadow-[0_5px_25px_rgba(255,120,0,.35)]">
                  Uzumaki
                </span>
              </h1>
              <p className=" absolute top-[67%] left-2.5 max-w-3xl mx-auto text-center text-lg leading-8 text-gray-300">
  Journey through the legendary ninja world. Discover powerful Hokages,legendary <br />Jutsu,
   iconic characters, hidden villages, and unforgettable battles.
</p>
              <div className=" absolute top-[76%] gap-5 right-0 -left-30 mx-auto flex max-w-3xl items-center justify-center">
                <button
                  className="
      rounded-full
      bg-gradient-to-r
      from-orange-500
      to-orange-600
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_35px_rgba(249,115,22,.45)]
    "
                >
                  Explore World
                </button>

                <button
                  className="
      rounded-full
      border
      border-white/20
      bg-white/10
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:bg-white/20
    "
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-xs uppercase tracking-[5px]">Scroll</span>

            <div className="h-10 w-[2px] rounded-full bg-orange-500"></div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      {/* <section
        id="about"
        className="flex min-h-screen items-center justify-center bg-[#0D0D0D]"
      >
        <h2 className="text-6xl font-bold text-white"></h2>
      </section> */}
      <About/>

      {/* ================= HOKAGES ================= */}

      

      {/* ================= CHARACTERS ================= */}

      <section
        id="characters"
        className="flex min-h-screen items-center justify-center bg-[#0D0D0D]"
      >
        <h2 className="text-6xl font-bold text-white">Characters</h2>
      </section>

      {/* ================= JUTSU ================= */}

      <section
        id="jutsu"
        className="flex min-h-screen items-center justify-center bg-[#111111]"
      >
        <h2 className="text-6xl font-bold text-white">Jutsu</h2>
      </section>

      {/* ================= VILLAGES ================= */}

      <section
        id="villages"
        className="flex min-h-screen items-center justify-center bg-[#0D0D0D]"
      >
        <h2 className="text-6xl font-bold text-white">Villages</h2>
      </section>
    </>
  );
}
