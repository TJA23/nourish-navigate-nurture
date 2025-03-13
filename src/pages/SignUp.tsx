
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive"
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Terms and conditions",
        description: "Please agree to our terms and conditions",
        variant: "destructive"
      });
      return;
    }

    console.log("Signup attempt:", { name, email });
    toast({
      title: "Account created",
      description: "Welcome to NutriLife! You can now log in with your credentials.",
    });
    // Registration logic would go here
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop')" }}>
        </div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating food images */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 rounded-lg shadow-xl transform rotate-6 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
        <img 
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1740&auto=format&fit=crop" 
          alt="Healthy food" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-32 h-32 rounded-lg shadow-xl transform -rotate-6 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
        <img 
          src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1974&auto=format&fit=crop" 
          alt="Fresh vegetables" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Sign Up card */}
      <Card className="w-[350px] md:w-[450px] z-10 bg-white/90 backdrop-blur-sm shadow-xl animate-fadeIn">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Join NutriLife</CardTitle>
          <CardDescription className="text-center">
            Create an account to start your health journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="hello@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
          <div className="text-xs text-center text-gray-400">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
