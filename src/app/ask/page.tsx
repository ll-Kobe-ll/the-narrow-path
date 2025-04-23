"use client"

import { useState } from "react"

export default function AskReflectPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
  
    try {
      console.log("Submitting form:", form)
  
      const response = await fetch("https://hooks.zapier.com/hooks/catch/22624977/2xp79gs/", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
  
      console.log("Response status:", response.status)
      const responseBody = await response.text()
      console.log("Response body:", responseBody)
  
      if (!response.ok) {
        alert("Something went wrong submitting your message.")
        return
      }
  
      setSubmitted(true)
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("Zapier fetch error:", err)
      alert("Error submitting form.")
    } finally {
      setLoading(false)
    }
  }  

  return (
    <main className="min-h-screen flex items-center justify-center text-white font-serif bg-gradient-to-b from-[#221e1f] to-black p-6 relative">
      <div className="z-10 w-full max-w-2xl bg-[#3a1f1f]/80 border border-red-900 rounded-xl shadow-inner p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 text-center">
          Ask & Reflect
        </h1>

        {submitted ? (
          <p className="text-green-400 text-center text-lg">
            Thank you for your message. It&apos;s been received.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-black/40 border border-yellow-700 p-3 rounded-md placeholder:text-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-black/40 border border-yellow-700 p-3 rounded-md placeholder:text-gray-400"
            />
            <textarea
              name="message"
              placeholder="What&apos;s on your heart or mind?"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-black/40 border border-yellow-700 p-3 rounded-md placeholder:text-gray-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-600 hover:bg-yellow-700 transition p-3 rounded-md font-bold text-black"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
