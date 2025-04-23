"use client"

// Imports
import Link from "next/link"
import {
  Home,
  ShieldUser,
  Church,
  Leaf,
  LogIn,
  UserPlus,
  LogOut,
  Book,
  BookA,
  BookIcon,
  BookPlus,
} from "lucide-react" // Icon set
import { useUser } from "@/utils/useUser" // Custom hook to track Supabase user
import { supabase } from "@/utils/supabaseClient" // Supabase client instance
import { BookOpenText, ScrollText, MessageSquarePlus } from "lucide-react"

export default function HomePage() {
  // Get the current user (or null if not logged in)
  const user = useUser()

  return (
    <main className="min-h-screen flex text-white font-serif relative">
      {/* Sidebar Navigation */}
      <aside className="bg-[#121014] w-20 md:w-60 p-4 flex flex-col space-y-8 items-center md:items-start text-sm">
        <h2 className="hidden md:block text-xl font-bold mb-10 text-yellow-300">The Narrow Path</h2>
        
        <NavLink icon={Home} label="Home" href="/" />
        <NavLink icon={Leaf} label="The Journey" href="/journey" />
        <NavLink icon={Church} label="The Churches" href="/churches" />
        <NavLink icon={ShieldUser} label="The Saints" href="/saints" />
        <NavLink icon={BookPlus} label="Scripture" href="/scripture" />
        <NavLink icon={ScrollText} label="Worship & Rituals" href="/worship" />
        <NavLink icon={MessageSquarePlus} label="Ask & Reflect" href="/ask" />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 bg-gradient-to-b from-[#221e1f] to-black p-10 flex flex-col items-center relative overflow-hidden">
        {/* Background Christ Icon */}
        <img
          src="/images/Jesus Icon.png"
          alt="Christ Icon"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-33 w-[500px] md:w-[650px] z-0 pointer-events-none select-none blur-[1px]"
        />

        {/* Content Section */}
        <div className="max-w-4xl w-full flex flex-col items-center z-10">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            The Narrow Path
          </h1>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <Card title="The Journey" href="/journey" />
            <Card title="The Bible" href="/scripture" />
            <Card title="The Saints" href="/saints" />
            <Card title="The Churches" href="/churches" />
            <Card title="Worship & Rituals" href="/worship" />
            <Card title="Ask & Reflect" href="/ask" />
          </div>

          {/* Quote at Bottom */}
          <div className="relative mt-16 text-center text-gray-300 italic max-w-lg drop-shadow-md">
            <p>
              “This world is a scene of warfare, and in it we are called to fight our foes.”
            </p>
            <p className="text-yellow-200 font-semibold mt-2">– St. John Chrysostom</p>
          </div>
        </div>
      </div>

      {/* Auth Controls - Login/Signup or Logout, bottom-left */}
      <div className="absolute bottom-15 left-6 text-sm text-gray-400 z-20 flex flex-col items-start gap-2">
        {user ? (
          // If the user is signed in
          <div className="flex items-center gap-2 text-white">
            <LogOut
              className="cursor-pointer hover:text-red-400 transition"
              size={20}
              onClick={async () => {
                await supabase.auth.signOut()
                window.location.href = "/"
              }}
            />
            <span className="text-sm text-yellow-200">{user.email}</span>
          </div>
        ) : (
          // If the user is not signed in
          <div className="flex gap-4 items-center">
            <Link href="/login">
              <LogIn className="cursor-pointer hover:text-yellow-300 transition" size={20} />
            </Link>
            <Link href="/signup">
              <UserPlus className="cursor-pointer hover:text-yellow-300 transition" size={20} />
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

// Reusable Card component for the home grid
function Card({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href}>
      <div className="p-6 bg-[#3a1f1f]/80 rounded-lg hover:bg-[#472828] border border-red-900 cursor-pointer transition-all text-center shadow-inner hover:shadow-lg hover:border-yellow-300 hover:ring-1 hover:ring-yellow-400/40">
        <h3 className="text-xl font-semibold text-yellow-100">{title}</h3>
      </div>
    </Link>
  )
}

// Reusable nav link with icon and label for the sidebar
function NavLink({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType
  label: string
  href: string
}) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-3 hover:text-yellow-300 transition">
        <Icon size={20} />
        <span className="hidden md:inline">{label}</span>
      </div>
    </Link>
  )
}