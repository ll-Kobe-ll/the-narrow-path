"use client"
import { useEffect, useState } from "react"
import { supabase } from "./supabaseClient"
import { User } from "@supabase/supabase-js"


export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      setUser(session?.user ?? null)
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    getSession()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return user
}
