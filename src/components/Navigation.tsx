
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, Calendar, Activity, Heart, Book, UserPlus } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="font-semibold text-xl">NutriLife</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/meal-plan" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Meal Plan</span>
            </Link>
            <Link to="/fitness" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Activity className="w-4 h-4" />
              <span>Fitness</span>
            </Link>
            <Link to="/health-advice" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Heart className="w-4 h-4" />
              <span>Health Advice</span>
            </Link>
            <Link to="/recipes" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Book className="w-4 h-4" />
              <span>Recipes</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/signup">
              <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary/10">
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-primary/10">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
