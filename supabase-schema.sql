-- Supabase SQL Schema for Hamid's Portfolio

-- 1. About Table
CREATE TABLE public.about (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  tagline text,
  bio text,
  photo_url text,
  location text,
  email text,
  focus text,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 2. Projects Table
CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  tech_stack text[], -- Array of tech tags
  demo_url text,
  repo_url text,
  image_url text,
  review_text text,
  review_author text,
  status text DEFAULT 'completed',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 3. Learning Table
CREATE TABLE public.learning (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text,
  status text CHECK (status IN ('current', 'completed')),
  progress_percent integer DEFAULT 0,
  resource_url text,
  description text,
  tags text[],
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 4. Papers Table
CREATE TABLE public.papers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  abstract text,
  pdf_url text,
  external_url text,
  published_at date,
  co_authors text[],
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 5. Links Table
CREATE TABLE public.links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  url text NOT NULL,
  icon text,
  display_order integer DEFAULT 0
);

-- 6. Files Table (for general CV/resume uploads)
CREATE TABLE public.files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text CHECK (type IN ('cv', 'resume', 'other')),
  file_url text NOT NULL,
  label text,
  uploaded_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 7. Contacts Table (form submissions)
CREATE TABLE public.contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 8. Career Journey Table (Progress in main career path)
CREATE TABLE public.career_journey (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text,
  date text,
  description text,
  status text CHECK (status IN ('current', 'completed', 'planned')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Set Row Level Security (RLS)
-- Allow public read access to all except contacts
ALTER TABLE public.about ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_journey ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON public.about FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.learning FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.papers FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.links FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.files FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.career_journey FOR SELECT USING (true);

-- Only admin (authenticated via service role / backend) can insert/update/delete.
-- Next.js will use a service_role key OR handle interactions Server Action side 
-- using the Supabase Admin client, avoiding need to manage complex RLS for the single admin here.
-- Contacts is write-only for public, read-only for admin.
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON public.contacts FOR INSERT WITH CHECK (true);
