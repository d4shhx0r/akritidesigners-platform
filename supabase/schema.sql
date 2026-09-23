-- Akritidesigners Supabase Schema
-- Run this script in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now() not null,
  name text not null,
  email text not null,
  phone text not null,
  project_type text not null,
  location text not null,
  approximate_size text,
  services_required text[] not null,
  estimated_budget text,
  message text not null,
  status text default 'new' not null -- 'new', 'reviewed', 'in_progress', 'archived'
);

-- Enable Row Level Security (RLS)
alter table public.inquiries enable row level security;

-- Policy: Allow anonymous users to submit project inquiries (INSERT only)
create policy "Allow anonymous inquiry insert"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);

-- Policy: Allow service role / authenticated admins full access (SELECT, UPDATE, DELETE)
create policy "Allow service role full access"
  on public.inquiries
  for all
  to service_role
  using (true)
  with check (true);
