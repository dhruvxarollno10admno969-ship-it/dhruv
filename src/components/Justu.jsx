import React from "react";

const jutsus = [
  {
    id: 1,
    name: "Rasengan",
    user: "Naruto Uzumaki",
    rank: "A-Rank",
    type: "Ninjutsu",
    chakra: "Wind",
    image: "./rasengan.jpg",
    description:
      "A powerful spinning chakra sphere capable of destroying enemies.",
  },
  {
    id: 2,
    name: "Chidori",
    user: "Kakashi Hatake",
    rank: "A-Rank",
    type: "Lightning",
    chakra: "Lightning",
    image: "./chidori.jpg",
    description:
      "High-speed lightning attack that pierces almost anything.",
  },
  {
    id: 3,
    name: "Shadow Clone",
    user: "Naruto Uzumaki",
    rank: "B-Rank",
    type: "Ninjutsu",
    chakra: "Normal",
    image: "./shadow clone.jpg",
    description:
      "Creates multiple physical clones to overwhelm opponents.",
  },
  {
    id: 4,
    name: "Amaterasu",
    user: "Itachi Uchiha",
    rank: "S-Rank",
    type: "Dojutsu",
    chakra: "Fire",
    image: "./amaterasu.jpg",
    description:
      "Black flames that burn anything until completely destroyed.",
  },
  {
    id: 5,
    name: "Susanoo",
    user: "Sasuke Uchiha",
    rank: "S-Rank",
    type: "Mangekyou",
    chakra: "Spiritual",
    image: "./susanoo.png",
    description:
      "A gigantic chakra warrior that protects and attacks enemies.",
  },
  {
    id: 6,
    name: "Kamui",
    user: "Obito Uchiha",
    rank: "S-Rank",
    type: "Space-Time",
    chakra: "Mangekyou",
    image: "./kamui.png",
    description:
      "Teleports objects and users into another dimension.",
  },
  {
    id: 7,
    name: "Flying Raijin",
    user: "Minato Namikaze",
    rank: "S-Rank",
    type: "Space-Time",
    chakra: "Normal",
    image: "./flying.jpg",
    description:
      "Instant teleportation technique using special seals.",
  },
  {
    id: 8,
    name: "Tsukuyomi",
    user: "Itachi Uchiha",
    rank: "S-Rank",
    type: "Genjutsu",
    chakra: "Sharingan",
    image: "./tsukuyomi.jpg",
    description:
      "Powerful illusion where time is completely controlled.",
  },
  {
    id: 9,
    name: "Sand Coffin",
    user: "Gaara",
    rank: "A-Rank",
    type: "Sand",
    chakra: "Earth",
    image: "./sand.jpg",
    description:
      "Crushes enemies inside a massive amount of sand.",
  },
  {
    id: 10,
    name: "Eight Gates",
    user: "Might Guy",
    rank: "Forbidden",
    type: "Taijutsu",
    chakra: "Body",
    image: "./eight gate.jpg",
    description:
      "Unlocks immense physical strength at the cost of the user's body.",
  },
];

export default function JutsuSection() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-8" id="jutsu">
      <h1 className="text-5xl font-bold text-center text-orange-500 mb-12">
        Legendary Jutsu
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {jutsus.map((jutsu) => (
          <div
            key={jutsu.id}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-orange-500 hover:border-orange-400 transition duration-500 hover:scale-105 hover:shadow-[0_0_35px_orange]"
          >
            <img
              src={jutsu.image}
              alt={jutsu.name}
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-orange-400">
                {jutsu.name}
              </h2>

              <p className="text-gray-300 mt-2">
                <span className="text-orange-400">User:</span> {jutsu.user}
              </p>

              <p className="text-gray-300">
                <span className="text-orange-400">Rank:</span> {jutsu.rank}
              </p>

              <p className="text-gray-300">
                <span className="text-orange-400">Type:</span> {jutsu.type}
              </p>

              <p className="text-gray-300">
                <span className="text-orange-400">Chakra:</span>{" "}
                {jutsu.chakra}
              </p>

              <p className="text-sm text-gray-400 mt-3">
                {jutsu.description}
              </p>

              <button className="w-full mt-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-bold">
                Learn Jutsu
              </button>
            </div>

            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}