"use client"

import Link from "next/link"

const journeyStages = [
  {
    title: "The Fall",
    subtitle: "Recognizing our brokenness",
    verse: "“All have sinned and fall short of the glory of God.” – Romans 3:23",
  },
  {
    title: "The Battle",
    subtitle: "Fighting passions and temptations",
    verse: "“Resist the devil, and he will flee from you.” – James 4:7",
  },
  {
    title: "The Desert",
    subtitle: "Dryness, silence, suffering",
    verse: "“My soul thirsts for You, my flesh longs for You in a dry and weary land.” – Psalm 63:1",
  },
  {
    title: "The Cross",
    subtitle: "Dying to self through obedience",
    verse: "“Take up your cross daily and follow Me.” – Luke 9:23",
  },
  {
    title: "Theosis",
    subtitle: "Union with God by grace",
    verse: "“It is no longer I who live, but Christ lives in me.” – Galatians 2:20",
  },
]

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        The Narrow Path
      </h1>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {journeyStages.map((stage, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 rounded-2xl shadow-xl transition hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold">{stage.title}</h2>
            <p className="text-gray-300">{stage.subtitle}</p>
            <p className="italic text-gray-400 mt-2">{stage.verse}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/"
          className="text-blue-400 underline hover:text-blue-300"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
