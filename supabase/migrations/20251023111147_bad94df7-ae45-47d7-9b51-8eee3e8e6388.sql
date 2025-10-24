
-- Create leads table to store chatbot interactions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public chatbot)
CREATE POLICY "Anyone can create leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users can view leads (admin access)
CREATE POLICY "Authenticated users can view leads" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'authenticated');
