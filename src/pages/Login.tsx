
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email });
    // Authentication logic would go here
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
      
      {/* Login card */}
      <Card className="w-[350px] md:w-[450px] z-10 bg-white/90 backdrop-blur-sm shadow-xl animate-fadeIn">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Welcome to NutriLife</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your personalized nutrition plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Sign in
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
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

export default Login;
