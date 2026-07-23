import React, { useState } from "react";

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

    details:
      "The Rasengan is one of the strongest A-Rank techniques created by Minato Namikaze. Naruto mastered it and later created many powerful variations including Rasenshuriken.",

    handSigns: "No Hand Signs",
    handSignImage: "/handsigns/rasengan.png",

    steps: [
      "Focus chakra into your palm.",
      "Rotate chakra rapidly.",
      "Compress it into a perfect sphere.",
      "Strike the opponent directly.",
    ],
  },
  {
    id: 2,
    name: "Chidori",
    user: "Kakashi Hatake",
    rank: "A-Rank",
    type: "Lightning",
    chakra: "Lightning",
    image: "./chidori.jpg",
    description: "High-speed lightning attack that pierces almost anything.",
    details:
      "A high-speed assassination technique developed by Kakashi Hatake. It concentrates lightning chakra into the hand.",

    handSigns: "Ox → Rabbit → Monkey",
    handSignImage: "/handsign/chidori.png",

    steps: [
      "Perform the hand signs.",
      "Gather Lightning Chakra.",
      "Increase movement speed.",
      "Pierce the target.",
    ],
  },
  {
    id: 3,
    name: "Shadow Clone",
    user: "Naruto Uzumaki",
    rank: "B-Rank",
    type: "Ninjutsu",
    chakra: "Normal",
    image: "./shadow clone.jpg",
    description: "Creates multiple physical clones to overwhelm opponents.",
    details: "Creates physical clones that share the user's chakra equally.",

    handSigns: "Tiger",

    steps: [
      "Perform Tiger seal.",
      "Release chakra evenly.",
      "Create multiple clones.",
    ],
  },
  {
    id: 4,
    name: "Amaterasu",
    user: "Itachi Uchiha",
    rank: "S-Rank",
    type: "Dojutsu",
    chakra: "Fire",
    image: "./amaterasu.jpg",
    description: "Black flames that burn anything until completely destroyed.",
    details:
      "Black flames born from Mangekyou Sharingan that burn until the target is destroyed.",

    handSigns: "Mangekyou Sharingan Activation",

    steps: [
      "Activate Mangekyou Sharingan.",
      "Focus vision on target.",
      "Release black flames.",
    ],
  },
  {
    id: 5,
    name: "Susanoo",
    user: "Sasuke Uchiha",
    rank: "S-Rank",
    type: "Mangekyou",
    chakra: "Spiritual",
    image: "./susanoo.png",
    description: "A gigantic chakra warrior that protects and attacks enemies.",
    details: "A gigantic chakra warrior summoned through Mangekyou Sharingan.",

    handSigns: "Mangekyou Sharingan",

    steps: [
      "Awaken Mangekyou Sharingan.",
      "Manifest chakra skeleton.",
      "Complete armored Susanoo.",
    ],
  },
  {
    id: 6,
    name: "Kamui",
    user: "Obito Uchiha",
    rank: "S-Rank",
    type: "Space-Time",
    chakra: "Mangekyou",
    image: "./kamui.png",
    description: "Teleports objects and users into another dimension.",
    details:
      "A space-time technique that transports anything into another dimension.",

    handSigns: "Mangekyou Sharingan",

    steps: [
      "Activate Mangekyou.",
      "Focus on target.",
      "Warp target into Kamui dimension.",
    ],
  },
  {
    id: 7,
    name: "Flying Raijin",
    user: "Minato Namikaze",
    rank: "S-Rank",
    type: "Space-Time",
    chakra: "Normal",
    image: "./flying.jpg",
    description: "Instant teleportation technique using special seals.",
    details:
      "Allows instant teleportation using special seals placed beforehand.",

    handSigns: "No Hand Signs",

    steps: [
      "Place Flying Raijin Seal.",
      "Sense the seal.",
      "Teleport instantly.",
    ],
  },
  {
    id: 8,
    name: "Tsukuyomi",
    user: "Itachi Uchiha",
    rank: "S-Rank",
    type: "Genjutsu",
    chakra: "Sharingan",
    image: "./tsukuyomi.jpg",
    description: "Powerful illusion where time is completely controlled.",
    details:
      "One of the strongest Genjutsu techniques capable of controlling time perception.",

    handSigns: "Eye Contact",

    steps: [
      "Make eye contact.",
      "Activate Mangekyou.",
      "Trap enemy inside illusion.",
    ],
  },
  {
    id: 9,
    name: "Sand Coffin",
    user: "Gaara",
    rank: "A-Rank",
    type: "Sand",
    chakra: "Earth",
    image: "./sand.jpg",
    description: "Crushes enemies inside a massive amount of sand.",
    details:
      "Gaara surrounds enemies with sand before crushing them completely.",

    handSigns: "Ram",

    steps: ["Control surrounding sand.", "Capture target.", "Compress sand."],
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
    details:
      "Removes the body's natural limits for incredible speed and power.",

    handSigns: "No Hand Signs",

    steps: [
      "Open First Gate.",
      "Continue unlocking Gates.",
      "Release ultimate physical power.",
    ],
  },
];

export default function JutsuSection() {
  const [selectedJutsu, setSelectedJutsu] = useState(null);
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
                <span className="text-orange-400">Chakra:</span> {jutsu.chakra}
              </p>
              <p className="text-sm text-gray-400 mt-3">{jutsu.description}</p>
              <button
                onClick={() => {
                  setSelectedJutsu(jutsu);
                }}
                className="w-full mt-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-bold"
              >
                Learn Jutsu
              </button>{" "}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        ))}
      </div>
      {selectedJutsu && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
          <div className="relative bg-zinc-900 border border-orange-500 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJutsu(null)}
              className="absolute right-5 top-5 text-4xl text-white hover:text-orange-500"
            >
              ×
            </button>

            <img
              src={selectedJutsu.image}
              alt={selectedJutsu.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              <h1 className="text-5xl font-bold text-orange-500 mb-6">
                {selectedJutsu.name}
              </h1>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <p>
                  <span className="text-orange-400 font-bold">User :</span>{" "}
                  {selectedJutsu.user}
                </p>

                <p>
                  <span className="text-orange-400 font-bold">Rank :</span>{" "}
                  {selectedJutsu.rank}
                </p>

                <p>
                  <span className="text-orange-400 font-bold">Type :</span>{" "}
                  {selectedJutsu.type}
                </p>

                <p>
                  <span className="text-orange-400 font-bold">Chakra :</span>{" "}
                  {selectedJutsu.chakra}
                </p>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-3">
                Description
              </h2>

              <p className="text-gray-300 leading-8">{selectedJutsu.details}</p>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-3">
                Hand Signs
              </h2>

              <div className="bg-black rounded-xl border border-orange-500 p-4 text-lg">
                {selectedJutsu.handSigns}
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-3">
                How to Perform
              </h2>

              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                {selectedJutsu.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
