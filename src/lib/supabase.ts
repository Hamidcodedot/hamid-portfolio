import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client for public operations (read-only per RLS policies)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client for admin operations (bypasses RLS)
// Ensure this is ONLY used in Server Actions or API routes, never exposed to the client
export const supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
