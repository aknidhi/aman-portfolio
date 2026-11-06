
-- ==========================================
-- 0001: Initial Portfolio Database
-- ==========================================

-- 1. Admin users
CREATE TABLE public.admin_users (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Admin verification function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.admin_users
        WHERE user_id = (SELECT auth.uid())
    );
$$;

-- 3. Portfolio settings
CREATE TABLE public.site_settings (
    id TEXT PRIMARY KEY DEFAULT 'default'
        CHECK (id = 'default'),
    site_name TEXT NOT NULL DEFAULT 'Aman Nidhi',
    role TEXT NOT NULL DEFAULT 'Data Analytics & ML Developer',
    hero_title TEXT NOT NULL DEFAULT 'Turning data into intelligent decisions.',
    hero_description TEXT,
    theme_preset TEXT NOT NULL DEFAULT 'cinematic-orange',
    settings JSONB NOT NULL DEFAULT '{}'::JSONB,
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Projects
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    short_description TEXT,
    description TEXT,
    category TEXT,
    technologies TEXT[] NOT NULL DEFAULT '{}',
    features JSONB NOT NULL DEFAULT '[]'::JSONB,
    cover_image TEXT,
    demo_url TEXT,
    github_url TEXT,
    status TEXT NOT NULL DEFAULT 'planning'
        CHECK (
            status IN (
                'planning',
                'in-progress',
                'prototype',
                'beta',
                'live',
                'completed',
                'archived'
            )
        ),
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Contact messages
CREATE TABLE public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new'
        CHECK (status IN ('new', 'read', 'replied', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==========================================
-- ENABLE ROW LEVEL SECURITY
-- ==========================================

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- ADMIN USER POLICIES
-- ==========================================

CREATE POLICY "Admins can view their own admin record"
ON public.admin_users
FOR SELECT
TO authenticated
USING (user_id = (SELECT auth.uid()));

-- ==========================================
-- SITE SETTINGS POLICIES
-- ==========================================

CREATE POLICY "Public can view published settings"
ON public.site_settings
FOR SELECT
TO anon, authenticated
USING (is_published = TRUE);

CREATE POLICY "Admins can manage site settings"
ON public.site_settings
FOR ALL
TO authenticated
USING ((SELECT public.is_admin()))
WITH CHECK ((SELECT public.is_admin()));

-- ==========================================
-- PROJECT POLICIES
-- ==========================================

CREATE POLICY "Public can view published projects"
ON public.projects
FOR SELECT
TO anon, authenticated
USING (is_published = TRUE);

CREATE POLICY "Admins can manage projects"
ON public.projects
FOR ALL
TO authenticated
USING ((SELECT public.is_admin()))
WITH CHECK ((SELECT public.is_admin()));

-- ==========================================
-- CONTACT MESSAGE POLICIES
-- ==========================================

CREATE POLICY "Visitors can submit contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(trim(name)) BETWEEN 1 AND 100
    AND char_length(trim(email)) BETWEEN 3 AND 254
    AND char_length(trim(message)) BETWEEN 1 AND 5000
    AND (
        subject IS NULL
        OR char_length(subject) <= 200
    )
);

CREATE POLICY "Admins can view contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING ((SELECT public.is_admin()));

CREATE POLICY "Admins can update contact messages"
ON public.contact_messages
FOR UPDATE
TO authenticated
USING ((SELECT public.is_admin()))
WITH CHECK ((SELECT public.is_admin()));

-- ==========================================
-- END OF MIGRATION
-- ==========================================
