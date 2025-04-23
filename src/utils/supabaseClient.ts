import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://feulszaowpyvawuzmlft.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldWxzemFvd3B5dmF3dXptbGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NTAxOTMsImV4cCI6MjA2MDMyNjE5M30.HhWyroatYnyQkgfWluE5IJ-AFixa0q6wBVSp1hPXoYo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)