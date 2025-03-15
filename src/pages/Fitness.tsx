import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { Activity, Dumbbell, Heart, ArrowRight } from "lucide-react";
import { toast } from "sonner";

type DietType = "vegetarian" | "non-vegetarian" | "vegan";

interface FitnessCalculatorProps {
  age: number;
  height: number;
  weight: number;
  gender: string;
  dietType: DietType;
}

const Fitness = () => {
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [dietType, setDietType] = useState<DietType>("vegetarian");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!age || !height || !weight) {
      toast.error("Please fill all the required fields");
      return;
    }
    
    setFormSubmitted(true);
    setShowResults(true);
    toast.success("Your fitness profile has been created!");
  };

  const getExerciseRecommendations = ({ age, height, weight, gender, dietType }: FitnessCalculatorProps) => {
    const ageNum = parseInt(age as string);
    const calculatedBMI = weight / ((height / 100) * (height / 100));
    const adjustedBMI = (calculatedBMI || 0).toString();
    
    let intensity = "moderate";
    if (calculatedBMI < 18.5) intensity = "light";
    if (calculatedBMI > 25) intensity = "high";
    
    const exercisesByIntensity = {
      light: [
        { name: "Walking", duration: "30-45 minutes", frequency: "5-7 days/week" },
        { name: "Swimming", duration: "30 minutes", frequency: "3 days/week" },
        { name: "Yoga", duration: "30 minutes", frequency: "3-4 days/week" },
        { name: "Light Stretching", duration: "15 minutes", frequency: "Daily" },
      ],
      moderate: [
        { name: "Jogging", duration: "30 minutes", frequency: "3-5 days/week" },
        { name: "Cycling", duration: "30-45 minutes", frequency: "3-4 days/week" },
        { name: "Strength Training", duration: "45 minutes", frequency: "2-3 days/week" },
        { name: "HIIT", duration: "20 minutes", frequency: "2 days/week" },
      ],
      high: [
        { name: "Running", duration: "30-45 minutes", frequency: "3-4 days/week" },
        { name: "Weight Training", duration: "45-60 minutes", frequency: "3-4 days/week" },
        { name: "HIIT", duration: "30 minutes", frequency: "3 days/week" },
        { name: "Circuit Training", duration: "45 minutes", frequency: "2-3 days/week" },
      ]
    };
    
    // Diet-specific recommendations
    const proteinSourcesByDiet = {
      vegetarian: "dairy products, legumes, tofu, tempeh, and nuts",
      "non-vegetarian": "lean meats, fish, eggs, dairy, and plant proteins",
      vegan: "legumes, tofu, tempeh, seitan, and plant-based protein powders"
    };
    
    // Age-specific modifications
    let ageModifier = "";
    if (ageNum < 18) {
      ageModifier = "Focus on building good habits and enjoying physical activity.";
    } else if (ageNum > 50) {
      ageModifier = "Include more joint-friendly exercises and focus on maintaining mobility.";
    }
    
    return {
      exercises: exercisesByIntensity[intensity],
      dietRecommendation: `Focus on whole foods with adequate ${proteinSourcesByDiet[dietType]} for protein.`,
      ageModifier,
      bmi: adjustedBMI
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-10"></div>
        <div className="h-96 w-full overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" 
            alt="Fitness tracking" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-8 z-20">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Fitness Tracking</h1>
            <p className="text-xl text-white/90 mt-2 drop-shadow-md max-w-2xl mx-auto">
              Calculate your fitness profile and get personalized exercise recommendations
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Fitness Calculator
                </CardTitle>
                <CardDescription>
                  Enter your details to get personalized exercise recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age (years)</Label>
                    <Input 
                      id="age" 
                      type="number" 
                      placeholder="Enter your age" 
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input 
                      id="height" 
                      type="number" 
                      placeholder="Enter your height" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input 
                      id="weight" 
                      type="number" 
                      placeholder="Enter your weight" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          checked={gender === "male"}
                          onChange={() => setGender("male")}
                          className="mr-2"
                        />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          checked={gender === "female"}
                          onChange={() => setGender("female")}
                          className="mr-2"
                        />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Diet Type</Label>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="vegetarian"
                          name="dietType"
                          value="vegetarian"
                          checked={dietType === "vegetarian"}
                          onChange={() => setDietType("vegetarian")}
                          className="mr-2"
                        />
                        <Label htmlFor="vegetarian">Vegetarian</Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="non-vegetarian"
                          name="dietType"
                          value="non-vegetarian"
                          checked={dietType === "non-vegetarian"}
                          onChange={() => setDietType("non-vegetarian")}
                          className="mr-2"
                        />
                        <Label htmlFor="non-vegetarian">Non-Vegetarian</Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="vegan"
                          name="dietType"
                          value="vegan"
                          checked={dietType === "vegan"}
                          onChange={() => setDietType("vegan")}
                          className="mr-2"
                        />
                        <Label htmlFor="vegan">Vegan</Label>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">Calculate and Get Recommendations</Button>
                </form>
              </CardContent>
            </Card>
            
            {showResults && formSubmitted && (
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Your Personalized Plan
                  </CardTitle>
                  <CardDescription>
                    Based on your fitness profile
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(() => {
                    const recommendations = getExerciseRecommendations({
                      age: parseInt(age),
                      height: parseInt(height),
                      weight: parseInt(weight),
                      gender,
                      dietType
                    });
                    
                    return (
                      <>
                        <div>
                          <h3 className="font-semibold text-lg">Your BMI: {recommendations.bmi}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {parseInt(recommendations.bmi) < 18.5 
                              ? "Underweight - Focus on healthy weight gain"
                              : parseInt(recommendations.bmi) < 25
                                ? "Normal weight - Focus on maintenance"
                                : "Overweight - Focus on gradual weight loss"}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold">Recommended Exercises</h3>
                          <div className="mt-2 space-y-2">
                            {recommendations.exercises.map((exercise, index) => (
                              <div key={index} className="border-b pb-2 last:border-0">
                                <p className="font-medium">{exercise.name}</p>
                                <p className="text-sm text-gray-600">
                                  {exercise.duration} | {exercise.frequency}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold">Nutrition Recommendation</h3>
                          <p className="text-gray-600 mt-1">{recommendations.dietRecommendation}</p>
                        </div>
                        
                        {recommendations.ageModifier && (
                          <div>
                            <h3 className="font-semibold">Age-Specific Advice</h3>
                            <p className="text-gray-600 mt-1">{recommendations.ageModifier}</p>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={() => setShowResults(false)} className="w-full">
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fitness;
