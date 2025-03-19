
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Calendar, Activity, Heart, Book, CheckCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Personalized Meal Plans",
      description: "Get customized meal plans tailored to your nutritional needs and preferences."
    },
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Fitness Tracking",
      description: "Track your workouts and monitor your progress with our intuitive tools."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Health Advice",
      description: "Access expert health tips and personalized recommendations."
    },
    {
      icon: <Book className="w-6 h-6 text-primary" />,
      title: "Recipe Library",
      description: "Explore our collection of healthy and delicious recipes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Your Journey to a <span className="text-primary">Healthier Life</span> Starts Here
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Discover personalized meal plans, fitness tracking, and expert health advice all in one place.
          </p>
          <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/meal-plan">
              <Button variant="outline">
                View Meal Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need for a Healthy Lifestyle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of others who have already started their journey to a healthier lifestyle.
          </p>
          <Link to="/login">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
