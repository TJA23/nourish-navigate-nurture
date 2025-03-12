
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Calendar, Utensils, Clock } from "lucide-react";

const MealPlan = () => {
  const weeklyMeals = [
    {
      day: "Monday",
      meals: [
        { type: "Breakfast", name: "Avocado Toast with Eggs", time: "20 min" },
        { type: "Lunch", name: "Quinoa Salad with Vegetables", time: "15 min" },
        { type: "Dinner", name: "Baked Salmon with Asparagus", time: "30 min" },
      ]
    },
    {
      day: "Tuesday",
      meals: [
        { type: "Breakfast", name: "Greek Yogurt with Berries", time: "5 min" },
        { type: "Lunch", name: "Mediterranean Wrap", time: "15 min" },
        { type: "Dinner", name: "Vegetable Stir Fry", time: "25 min" },
      ]
    },
    {
      day: "Wednesday",
      meals: [
        { type: "Breakfast", name: "Smoothie Bowl", time: "10 min" },
        { type: "Lunch", name: "Lentil Soup with Bread", time: "30 min" },
        { type: "Dinner", name: "Grilled Chicken with Sweet Potatoes", time: "40 min" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-10"></div>
        <div className="h-96 w-full overflow-hidden relative">
          <img 
            src="/lovable-uploads/2a5ba452-56d0-4c15-8fd1-021816340fad.png" 
            alt="Fresh fruit salsa in stone bowl with avocado and strawberries" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-8 z-20">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Your Personalized Meal Plan</h1>
            <p className="text-xl text-white/90 mt-2 drop-shadow-md max-w-2xl mx-auto">
              Healthy, delicious recipes tailored to your nutritional needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Meal Plan Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {weeklyMeals.map((dayPlan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-primary/10 p-4">
                  <h3 className="text-xl font-semibold text-primary">{dayPlan.day}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {dayPlan.meals.map((meal, mealIndex) => (
                    <div key={mealIndex} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-sm font-medium text-gray-500">{meal.type}</span>
                      <h4 className="font-medium text-gray-800">{meal.name}</h4>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{meal.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Need More Recipe Ideas?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our extensive collection of healthy recipes or get a completely 
              personalized meal plan based on your dietary preferences and goals.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/recipes">
                <Button variant="outline" className="flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Browse Recipes
                </Button>
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Get Custom Plan
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Food Images Grid */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Healthy Food Inspiration</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352" 
                alt="Fresh vegetables" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af" 
                alt="Fruit plate" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71" 
                alt="Healthy breakfast" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Fresh fruit" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealPlan;
