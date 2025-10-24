
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;

-- Create enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create RLS policies for leads table - only admins can view/update/delete
CREATE POLICY "Only admins can view leads" 
ON public.leads 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update leads" 
ON public.leads 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete leads" 
ON public.leads 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policy for user_roles - users can view their own roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);
