import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            work_email: formData.workEmail,
            requirements: formData.requirements,
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Your demo request has been submitted. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        requirements: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div 
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
        style={{
          backgroundImage: "url('/Moon.webp')"
        }}
      >
        <div className="w-full max-w-md space-y-6">
          {/* Headings */}
          <div className="text-center text-white space-y-2">
            <h1 className="text-4xl font-bold">Meet Our AI Workers</h1>
            <p className="text-xl opacity-90">Schedule a product demo with our team</p>
          </div>
          
          <Card className="w-full bg-background/90 backdrop-blur-sm border border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Get SuperMind Demo
              </CardTitle>
            </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="workEmail">Work Email</Label>
              <Input
                id="workEmail"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                name="requirements"
                rows={4}
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="Tell us about your requirements..."
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
        </div>
      </div>
    </>
  );
};

export default Demo;