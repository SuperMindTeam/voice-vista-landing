-- Create a table for demo requests
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  requirements TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert demo requests (public form)
CREATE POLICY "Anyone can create demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all demo requests
CREATE POLICY "Admin can view all demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (true);