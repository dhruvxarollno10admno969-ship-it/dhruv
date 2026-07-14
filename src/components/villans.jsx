import React, { useState } from "react";

function Villains() {
  const [selected, setSelected] = useState(null);

  const villains = [
    {
      id: 1,
      name: "Madara Uchiha",
      village: "Hidden Leaf",
      rank: "Legendary Shinobi",
      image: "/images/villains/madara.jpg",
      quote: "Wake up to reality! Nothing ever goes as planned in this accursed world.",
      description:
        "Founder of Konohagakure and one of the strongest shinobi in history."
    },
    {
      id: 2,
      name: "Obito Uchiha",
      village: "Hidden Leaf",
      rank: "Akatsuki",
      image: "/images/villains/obito.jpg",
      quote: "In this world, wherever there is light, there are also shadows.",
      description:
        "The masked man known as Tobi who started the Fourth Great Ninja War."
    },
    {
      id: 3,
      name: "Pain (Nagato)",
      village: "Hidden Rain",
      rank: "Leader of Akatsuki",
      image: "/images/villains/pain.jpg",
      quote: "Feel pain. Think about pain. Accept pain. Know pain.",
      description:
        "Leader of Akatsuki who possessed the legendary Rinnegan."
    },
    {
      id: 4,
      name: "Itachi Uchiha",
      village: "Hidden Leaf",
      rank: "S-Rank Missing Ninja",
      image: "/images/villains/itachi.jpg",
      quote:
        "People live their lives bound by what they accept as correct and true.",
      description:
        "A genius Uchiha who sacrificed everything for the Hidden Leaf."
    },
    {
      id: 5,
      name: "Orochimaru",
      village: "Hidden Leaf",
      rank: "Legendary Sannin",
      image: "/images/villains/orochimaru.jpg",
      quote: "There is no meaning to life except the meaning you give it.",
      description:
        "A legendary ninja obsessed with immortality and forbidden jutsu."
    }
    
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center text-red-500 mb-10">
        Naruto Villains
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {villains.map((v) => (
          <div
            key={v.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300 border border-red-700"
          >
            <img
              src={v.image}
              alt={v.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold">{v.name}</h2>

              <p className="text-gray-400 mt-2">
                <span className="text-red-400">Village:</span> {v.village}
              </p>

              <p className="text-gray-400">
                <span className="text-red-400">Rank:</span> {v.rank}
              </p>

              <button
                onClick={() => setSelected(v)}
                className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center p-5 z-50">
          <div className="bg-zinc-900 rounded-2xl max-w-xl w-full overflow-hidden">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-96 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold text-red-500">
                {selected.name}
              </h2>

              <p className="mt-3">
                <span className="text-red-400">Village:</span>{" "}
                {selected.village}
              </p>

              <p>
                <span className="text-red-400">Rank:</span> {selected.rank}
              </p>

              <p className="mt-4 italic text-yellow-400">
                "{selected.quote}"
              </p>

              <p className="mt-4 text-gray-300">
                {selected.description}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Villains;