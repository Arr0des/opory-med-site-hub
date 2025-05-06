
import { createClient } from '@supabase/supabase-js'

// Get the Supabase URL and anon key from environment variables
// If they're not available, provide default values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Create a Supabase client with the URL and anon key
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
