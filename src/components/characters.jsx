
 const characters = [
  {
    id: "01",
    name: "Itachi Uchiha",
    rank: "Akatsuki",
    clan: "Uchiha Clan",
    jutsu: "Tsukuyomi",
    img: "/itachi.png",
  },
  {
    id: "02",
    name: "Sasuke Uchiha",
    rank: "Shadow Hokage",
    clan: "Uchiha Clan",
    jutsu: "Chidori",
    img: "/saskue.png",
  },
  {
    id: "03",
    name: "Kakashi Hatake",
    rank: "Sixth Hokage",
    clan: "Hatake Clan",
    jutsu: "Lightning Blade",
    img: "/kakashi.jpg",
  },
  {
    id: "04",
    name: "Naruto Uzumaki",
    rank: "Seventh Hokage",
    clan: "Uzumaki Clan",
    jutsu: "Rasengan",
    img: "/naruto hokage.jpg",
  },
  {
    id: "05",
    name: "Madara Uchiha",
    rank: "Legend",
    clan: "Uchiha Clan",
    jutsu: "Perfect Susanoo",
    img: "/madara.png",
  },
  {
    id: "06",
    name: "Obito Uchiha",
    rank: "Masked Ninja",
    clan: "Uchiha Clan",
    jutsu: "Kamui",
    img: "/obito.png",
  },
  {
    id: "07",
    name: "Jiraiya",
    rank: "Sannin",
    clan: "Konoha",
    jutsu: "Sage Mode",
    img: "/jiriya.png",
  },
  {
    id: "08",
    name: "Minato Namikaze",
    rank: "Fourth Hokage",
    clan: "Namikaze Clan",
    jutsu: "Flying Raijin",
    img: "/Minato.jpg",
  },
];
export default function Characters() {
    return (
    <section data-aos="fade-left"
      id="characters"
      className="min-h-screen bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h1 className="text-center text-6xl font-black text-orange-500">
          Legendary Characters
        </h1>

        <p className="text-center text-gray-400 mt-4 leading-10 mb-16">
          Meet the strongest Shinobi of the Naruto Universe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {characters.map((item) => (
            <div
              key={item.id}
              className="group relative h-[520px] overflow-hidden rounded-3xl border border-orange-500/30 bg-[#111] cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,115,0,.45)]"
            >

              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-6 left-6 transition duration-500 group-hover:-translate-y-32">

                <h1 className="text-6xl font-black text-orange-500">
                  {item.id}
                </h1>

                <h2 className="text-3xl font-bold text-white mt-2">
                  {item.name}
                </h2>

              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition duration-500 bg-gradient-to-t from-black to-transparent">

                <p className="text-white mb-3">
                  <span className="text-orange-400 font-semibold">
                    Rank :
                  </span>{" "}
                  {item.rank}
                </p>

                <p className="text-white mb-3">
                  <span className="text-orange-400 font-semibold">
                    Clan :
                  </span>{" "}
                  {item.clan}
                </p>

                <p className="text-white">
                  <span className="text-orange-400 font-semibold">
                    Signature Jutsu :
                  </span>{" "}
                  {item.jutsu}
                </p>

              </div>

            </div>
          ))}
          

        </div>
       

      </div>
    </section>
  );
}

