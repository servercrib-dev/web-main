-- Add RLS policies to user_roles table to prevent privilege escalation
-- Only admins can insert, update, or delete role assignments

CREATE POLICY "Only admins can assign roles" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can modify roles" 
ON public.user_roles 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete roles" 
ON public.user_roles 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'));