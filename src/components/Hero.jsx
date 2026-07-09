export default function Hero() {
  return (
    <section className="relative mt-20 h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/naruto.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white margin-top-[-100px]">

       <h1 className="text-7xl md:text-8xl font-black leading-tight">
  Naruto:
  <br />
  <span className="text-orange-500">
    The Ninja World
  </span>
</h1>

<p className="mt-8 max-w-2xl text-xl text-gray-300">
  Explore legendary ninja, hidden villages,
  powerful jutsu, and unforgettable battles.
</p>

        <button
className="
mt-10
px-10
py-4
bg-orange-500
rounded-xl
text-xl
font-bold
hover:bg-orange-600
hover:scale-105
transition-all
duration-300
shadow-lg
shadow-orange-500/50
">
Explore
</button>

      </div>

    </section>
  );
}