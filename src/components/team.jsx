import React, { useState } from "react";
import { X } from "lucide-react";

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    {
      id: 1,
      name: "Team 7",
      leader: "Kakashi Hatake",
      village: "Hidden Leaf Village",
      image: "public/teams/team7.png",

      description:
        "Team 7 is the most famous ninja team in Naruto. Under Kakashi Hatake, Naruto, Sasuke and Sakura became legendary shinobi.",

      members: [
        {
          name: "Naruto Uzumaki",
          image: "/public/teams/Uzumaki naruto.png",
          rank: "Seventh Hokage",
          ability: "Rasengan & Shadow Clone",
          about:
            "A fearless ninja who dreamed of becoming Hokage and protecting everyone."
        },
        {
          name: "Sasuke Uchiha",
          image: "/images/characters/sasuke.jpg",
          rank: "Shadow Hokage",
          ability: "Sharingan & Chidori",
          about:
            "The last surviving Uchiha who became one of the strongest shinobi."
        },
        {
          name: "Sakura Haruno",
          image: "/images/characters/sakura.jpg",
          rank: "Medical Ninja",
          ability: "Monster Strength",
          about:
            "One of the greatest medical ninjas trained by Lady Tsunade."
        },
        {
          name: "Kakashi Hatake",
          image: "/images/characters/kakashi.jpg",
          rank: "Sixth Hokage",
          ability: "Sharingan & Lightning Blade",
          about:
            "Leader of Team 7 and one of the smartest ninja in the Hidden Leaf."
        }
      ]
    }
  ];
 
  {
  id: 2,
  {
  id: 2,
  name: "Team 8",
  leader: "Kurenai Yuhi",
  village: "Hidden Leaf Village",
  image: "/teams/team8.png",

  description:
    "Team 8 specializes in tracking, reconnaissance, and detection missions. Under Kurenai Yuhi, the team became one of Konoha's finest sensory squads.",

  members: [
    {
      name: "Hinata Hyuga",
      image: "/teams/hinata.png",
      rank: "Jonin",
      ability: "Byakugan & Gentle Fist",
      about:
        "A member of the Hyuga Clan who later became Naruto Uzumaki's wife."
    },
    {
      name: "Kiba Inuzuka",
      image: "/teams/kiba.png",
      rank: "Jonin",
      ability: "Beast Human Clone",
      about:
        "A fearless ninja who fights alongside his loyal partner Akamaru."
    },
    {
      name: "Shino Aburame",
      image: "/teams/shino.png",
      rank: "Jonin",
      ability: "Insect Jutsu",
      about:
        "A calm and intelligent shinobi who controls kikaichu insects."
    },
    {
      name: "Kurenai Yuhi",
      image: "/teams/kurenai.png",
      rank: "Jonin",
      ability: "Genjutsu",
      about:
        "Leader of Team 8 and one of the Hidden Leaf's best Genjutsu users."
    }
  ]
};

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">

      <h1 className="text-5xl font-bold text-center text-orange-500 mb-12">
        Naruto Teams
      </h1>

      <div className="flex justify-center">

        {teams.map((team) => (

          <div
            key={team.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-orange-500 max-w-sm hover:scale-105 duration-300"
          >

            <img
              src={team.image}
              alt={team.name}
              className="max-w-full h-60 object-contain"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold text-orange-400">
                {team.name}
              </h2>

              <p className="mt-2 text-gray-300">
                <span className="font-bold text-white">Leader:</span>{" "}
                {team.leader}
              </p>

              <p className="text-gray-300">
                <span className="font-bold text-white">Village:</span>{" "}
                {team.village}
              </p>

              <button
                onClick={() => setSelectedTeam(team)}
                className="mt-6 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold w-full"
              >
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>

      {selectedTeam && (

        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-6">

          <div className="bg-zinc-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-orange-500">

            <div className="relative">

              <div className="w-full h-80 bg-zinc-900 flex items-center justify-center overflow-hidden object-contain">
  <img
    src={selectedTeam.image}
    alt={selectedTeam.name}
    className="w-full h-full object-contain"
  />
</div>

              <button
                onClick={() => setSelectedTeam(null)}
                className="absolute top-5 right-5 bg-red-500 p-2 rounded-full hover:bg-red-600"
              >
                <X size={28} />
              </button>

            </div>

            <div className="p-8">

              <h1 className="text-4xl font-bold text-orange-500">
                {selectedTeam.name}
              </h1>

              <p className="mt-3 text-lg">
                <span className="font-bold">Leader:</span>{" "}
                {selectedTeam.leader}
              </p>

              <p className="text-lg">
                <span className="font-bold">Village:</span>{" "}
                {selectedTeam.village}
              </p>

              <p className="mt-5 text-gray-300 leading-8">
                {selectedTeam.description}
              </p>

              <h2 className="text-3xl font-bold text-orange-500 mt-10 mb-8">
                Team Members
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                {selectedTeam.members.map((member, index) => (

                  <div
                    key={index}
                    className="bg-zinc-800 rounded-2xl overflow-hidden border border-orange-500"
                  >

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 object-contain"
                    />

                    <div className="p-5">

                      <h3 className="text-2xl font-bold text-orange-400">
                        {member.name}
                      </h3>

                      <p className="mt-2">
                        <span className="font-bold">Rank:</span>{" "}
                        {member.rank}
                      </p>

                      <p>
                        <span className="font-bold">Special Ability:</span>{" "}
                        {member.ability}
                      </p>

                      <p className="mt-3 text-gray-300">
                        {member.about}
                      </p>

                    </div>

                  </div>

                ))}
                              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setSelectedTeam(null)}
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-bold transition duration-300"
                >
                  Close
                </button>
              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}
}