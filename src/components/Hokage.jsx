export default function Hokage() {
  return (
 <div
        id="hokages"
        className="flex flex-col justify-center align-center"
      >
        <div className="h-50 flex flex-col align-center justify-center">

      <h1 className="text-center text-5xl md:text-6xl font-bold text-orange-500">
        The Seven Hokage
      </h1>

      <p className="text-center text-gray-400">
        Every Hokage protected the Hidden Leaf Village and carried the Will of
        Fire to the next generation.
      </p>

</div>


   <div className="max-w-[1800px] mx-auto grid grid-cols-7 gap-8 px-4">
  {/* 7 Cards */}

        {hokages.map((hokage) => (
          <div
            key={hokage.id}
        className="group relative h-[420px] overflow-hidden rounded-3xl border border-orange-500/30 cursor-pointer shadow-lg"
          >
            {/* Image */}
            <img
              src={hokage.img}
              alt={hokage.name}
             className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black group-hover:via-black/80 transition-all duration-500"></div>

            {/* Default */}
            <div className="absolute bottom-8 left-6 transition-all duration-500 group-hover:-translate-y-32">
              <h2 className="text-6xl font-black text-orange-500">
                {hokage.id}
              </h2>

              <h3 className="text-2xl font-bold text-white mt-2">
                {hokage.title}
              </h3>

              <p className="text-gray-300">
                {hokage.name}
              </p>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-black/80">
              <h2 className="text-3xl font-bold text-orange-400 mb-4">
                {hokage.name}
              </h2>

              <p className="text-white mb-2">
                <span className="text-orange-400 font-semibold">
                  Hokage:
                </span>{" "}
                {hokage.title}
              </p>

              <p className="text-white mb-2">
                <span className="text-orange-400 font-semibold">
                  Village:
                </span>{" "}
                {hokage.village}
              </p>

              <p className="text-white mb-2">
                <span className="text-orange-400 font-semibold">
                  Nickname:
                </span>{" "}
                {hokage.nickname}
              </p>

              <p className="text-white">
                <span className="text-orange-400 font-semibold">
                  Signature Jutsu:
                </span>{" "}
                {hokage.jutsu}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}
const hokages = [
  {
    id: "01",
    title: "First Hokage",
    name: "Hashirama Senju",
    village: "Hidden Leaf Village",
    nickname: "God of Shinobi",
    jutsu: "Wood Release",
    img: "/Hashirama Senju.jpg",
  },
  {
    id: "02",
    title: "Second Hokage",
    name: "Tobirama Senju",
    village: "Hidden Leaf Village",
    nickname: "Master of Water Release",
    jutsu: "Flying Raijin",
    img: "/Tobirama senju.jpg",
  },
  {
    id: "03",
    title: "Third Hokage",
    name: "Hiruzen Sarutobi",
    village: "Hidden Leaf Village",
    nickname: "The Professor",
    jutsu: "Five Nature Transformations",
    img: "/hiruzen.jpg",
  },
  {
    id: "04",
    title: "Fourth Hokage",
    name: "Minato Namikaze",
    village: "Hidden Leaf Village",
    nickname: "Yellow Flash",
    jutsu: "Flying Raijin",
    img: "/Minato.jpg",
  },
  {
    id: "05",
    title: "Fifth Hokage",
    name: "Tsunade",
    village: "Hidden Leaf Village",
    nickname: "Legendary Sannin",
    jutsu: "Medical Ninjutsu",
    img: "/tsunade.jpg",
  },
  {
    id: "06",
    title: "Sixth Hokage",
    name: "Kakashi Hatake",
    village: "Hidden Leaf Village",
    nickname: "Copy Ninja",
    jutsu: "Lightning Blade",
    img: "/kakashi.jpg",
  },
  {
    id: "07",
    title: "Seventh Hokage",
    name: "Naruto Uzumaki",
    village: "Hidden Leaf Village",
    nickname: "Hero of the Leaf",
    jutsu: "Rasengan & Shadow Clone",
    img: "/naruto hokage.jpg",
  },
];