import React, { useState } from "react";
import { X } from "lucide-react";

export default function Teams() 
{
  
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    {
      id: 1,
      name: "Team 7",
      leader: "Kakashi Hatake",
      village: "Hidden Leaf Village",
      image: "/teams/team7.png",
      description:
        "Team 7 is the most famous ninja team in Naruto. Under Kakashi Hatake, Naruto, Sasuke and Sakura became legendary shinobi.",
      members: [
        {
          name: "Naruto Uzumaki",
          image: "/teams/Uzumaki naruto.png",
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
    },

    {
      id: 2,
      name: "Team 8",
      leader: "Kurenai Yuhi",
      village: "Hidden Leaf Village",
      image: "/teams/team8.png",
      description:
        "Team 8 specializes in tracking, reconnaissance, and sensory missions.",
      members: [
        {
          name: "Hinata Hyuga",
          image: "/images/characters/hinata.jpg",
          rank: "Jonin",
          ability: "Byakugan & Gentle Fist",
          about: "A kind-hearted Hyuga ninja who later marries Naruto."
        },
        {
          name: "Kiba Inuzuka",
          image: "/images/characters/kiba.jpg",
          rank: "Jonin",
          ability: "Beast Human Clone",
          about: "An energetic ninja who always fights alongside Akamaru."
        },
        {
          name: "Shino Aburame",
          image: "/images/characters/shino.jpg",
          rank: "Jonin",
          ability: "Insect Techniques",
          about: "A calm and intelligent shinobi who uses kikaichu insects."
        },
        {
          name: "Kurenai Yuhi",
          image: "/images/characters/kurenai.jpg",
          rank: "Jonin",
          ability: "Genjutsu",
          about: "A master of illusion techniques and Team 8's leader."
        }
      ]
    },

    {
      id: 3,
      name: "Team 10",
      leader: "Asuma Sarutobi",
      village: "Hidden Leaf Village",
      image: "/teams/team10.png",
      description:
        "Team 10 is famous for teamwork and the Ino-Shika-Cho formation.",
      members: [
        {
          name: "Shikamaru Nara",
          image: "/images/characters/shikamaru.jpg",
          rank: "Jonin",
          ability: "Shadow Possession",
          about: "A genius strategist with an IQ over 200."
        },
        {
          name: "Choji Akimichi",
          image: "/images/characters/choji.jpg",
          rank: "Jonin",
          ability: "Expansion Jutsu",
          about: "A powerful ninja from the Akimichi Clan."
        },
        {
          name: "Ino Yamanaka",
          image: "/images/characters/ino.jpg",
          rank: "Jonin",
          ability: "Mind Transfer Jutsu",
          about: "A skilled sensory and medical ninja."
        },
        {
          name: "Asuma Sarutobi",
          image: "/images/characters/asuma.jpg",
          rank: "Jonin",
          ability: "Wind Chakra Blades",
          about: "Leader of Team 10 and son of the Third Hokage."
        }
      ]
    },
        {
      id: 4,
      name: "Team Guy",
      leader: "Might Guy",
      village: "Hidden Leaf Village",
      image: "/teams/teamguy.png",
      description:
        "Team Guy specializes in Taijutsu and physical combat.",
      members: [
        {
          name: "Rock Lee",
          image: "/images/characters/rocklee.jpg",
          rank: "Jonin",
          ability: "Eight Gates",
          about: "A taijutsu master who cannot use ninjutsu."
        },
        {
          name: "Neji Hyuga",
          image: "/images/characters/neji.jpg",
          rank: "Jonin",
          ability: "Byakugan",
          about: "One of the strongest Hyuga clan prodigies."
        },
        {
          name: "Tenten",
          image: "/images/characters/tenten.jpg",
          rank: "Jonin",
          ability: "Weapon Summoning",
          about: "A weapon specialist with incredible accuracy."
        },
        {
          name: "Might Guy",
          image: "/images/characters/guy.jpg",
          rank: "Jonin",
          ability: "Eight Inner Gates",
          about: "The strongest taijutsu master in the Hidden Leaf."
        }
      ]
    },

    {
      id: 5,
      name: "Sand Siblings",
      leader: "Gaara",
      village: "Hidden Sand Village",
      image: "/teams/sandteam.png",
      description:
        "The strongest sibling team from the Hidden Sand Village.",
      members: [
        {
          name: "Gaara",
          image: "/images/characters/gaara.jpg",
          rank: "Fifth Kazekage",
          ability: "Sand Manipulation",
          about: "The protector of the Hidden Sand."
        },
        {
          name: "Temari",
          image: "/images/characters/temari.jpg",
          rank: "Jonin",
          ability: "Wind Release",
          about: "A powerful wind-style ninja."
        },
        {
          name: "Kankuro",
          image: "/images/characters/kankuro.jpg",
          rank: "Jonin",
          ability: "Puppet Master",
          about: "A skilled puppet user."
        }
      ]
    },

    {
      id: 6,
      name: "Team Minato",
      leader: "Minato Namikaze",
      village: "Hidden Leaf Village",
      image: "/teams/teamminato.png",
      description:
        "The legendary team led by the Fourth Hokage.",
      members: [
        {
          name: "Minato Namikaze",
          image: "/images/characters/minato.jpg",
          rank: "Fourth Hokage",
          ability: "Flying Raijin",
          about: "Known as the Yellow Flash of the Hidden Leaf."
        },
        {
          name: "Kakashi Hatake",
          image: "/images/characters/kakashi.jpg",
          rank: "Jonin",
          ability: "Sharingan",
          about: "The Copy Ninja."
        },
        {
          name: "Obito Uchiha",
          image: "/images/characters/obito.jpg",
          rank: "Genin",
          ability: "Kamui",
          about: "Later became one of the main antagonists."
        },
        {
          name: "Rin Nohara",
          image: "/images/characters/rin.jpg",
          rank: "Medical Ninja",
          ability: "Medical Ninjutsu",
          about: "A caring teammate of Kakashi and Obito."
        }
      ]
    }
  ];

  return (
  <section
    className="min-h-screen bg-black text-white py-20 px-6"
    id="teams"
  >
    <h1 className="text-5xl font-bold text-center text-orange-500 mb-12">
      Naruto Teams
    </h1>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {teams.map((team) => (
        <div
          key={team.id}
          className="bg-zinc-900 rounded-3xl overflow-hidden border border-orange-500 shadow-xl hover:scale-105 transition duration-300"
        >
          <img
            src={team.image}
            alt={team.name}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold text-orange-400">
              {team.name}
            </h2>

            <p className="mt-3 text-gray-300">
              <span className="font-bold text-white">
                Leader:
              </span>{" "}
              {team.leader}
            </p>

            <p className="text-gray-300">
              <span className="font-bold text-white">
                Village:
              </span>{" "}
              {team.village}
            </p>

            <p className="text-gray-400 mt-4 line-clamp-3">
              {team.description}
            </p>

            <button
              onClick={() => {
                console.log(team);
  setSelectedTeam(team);
              }}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold transition"
            >
              View Details
            </button>
          </div>
        </div>
      ))}

    </div>
    {selectedTeam && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
    <div className="bg-zinc-900 border border-orange-500 rounded-3xl w-full max-w-5xl p-8 relative max-h-[90vh] overflow-y-auto">

      <button
        onClick={() => setSelectedTeam(null)}
        className="absolute top-4 right-4 bg-red-500 p-2 rounded-full"
      >
        <X />
      </button>

      <img
        src={selectedTeam.image}
        alt={selectedTeam.name}
        className="w-full h-80 object-contain rounded-xl"
      />

      <h2 className="text-4xl font-bold text-orange-500 mt-6">
        {selectedTeam.name}
      </h2>

      <p className="mt-3">
        <strong>Leader:</strong> {selectedTeam.leader}
      </p>

      <p>
        <strong>Village:</strong> {selectedTeam.village}
      </p>

      <p className="mt-4 text-gray-300">
        {selectedTeam.description}
      </p>

      <h3 className="text-3xl text-orange-500 mt-8 mb-6">
        Team Members
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {selectedTeam.members.map((member, index) => (
          <div
            key={index}
            className="bg-black border border-orange-500 rounded-2xl overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h4 className="text-2xl font-bold text-orange-400">
                {member.name}
              </h4>

              <p><strong>Rank:</strong> {member.rank}</p>
              <p><strong>Ability:</strong> {member.ability}</p>

              <p className="mt-2 text-gray-300">
                {member.about}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
)}
  </section>
);
}