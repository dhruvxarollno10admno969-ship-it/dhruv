function Hero() {
  return (

<div className="relative h-[200vh]">

{/* Background Image 
  <img
    src="/public/Gemini_Generated_Image_4njgsw4njgsw4njg.png"
    alt="Hidden Leaf Village"
    className="fixed top-0 left-0 w-full h-screen object-cover z-0"
  />
  */}

  {/* Background Video */}
  <video
    src="/public/Naruto Twixtor Clips  High Quality - Hii Twixtor (1080p, h264).mp4"
    autoPlay
    muted
    loop
    playsInline
    className="fixed top-0 left-0 w-full h-screen object-cover opacity-20 z-0"
  />

 <nav className="top-0 left-0 w-full flex justify-center items-center gap-10 text-white p-5 z-[999] underline">
  <a href="#">Home</a>
  <a href="#">Card</a>
  <a href="#">Jutsu</a>
  <a href="#">Story</a>
  <a href="#">Episodes</a>
</nav>


  <h1 className="text-white font-bold text-4xl z-999">Hidden Leaf Village</h1>

<button className="underline text-white hover:text-red-500 z-[999]">
Explore Village
</button>

</div>
  );
}

export default Hero;
