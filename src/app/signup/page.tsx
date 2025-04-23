"use client"

import { useState } from "react"
import { supabase } from "@/utils/supabaseClient"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage("Check your email to confirm your account.")
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSignup} className="flex flex-col space-y-4 w-full max-w-sm">
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded bg-white text-black placeholder-gray-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-2 rounded bg-white text-black placeholder-gray-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded text-white font-semibold"
        >
          Create Account
        </button>
        {message && <p className="text-sm text-center mt-2">{message}</p>}
      </form>
    </main>
  )
}
