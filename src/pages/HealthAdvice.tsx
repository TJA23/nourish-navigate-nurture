import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Heart, Droplets, Stethoscope, Pill, Activity, Cherry, Dumbbell, ArrowRight, Apple, Brain, Kidney, Clipboard } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import HealthRecommendations from "@/components/HealthRecommendations";
import { HealthCondition } from "@/types/health";

type DietType = "vegetarian" | "non-vegetarian" | "vegan";

interface FitnessCalculatorProps {
  age: number;
  height: number;
  weight: number;
  gender: string;
  dietType: DietType;
}

const HealthAdvice = () => {
  const [query, setQuery] = useState("");
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fitness calculator states
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [dietType, setDietType] = useState<DietType>("vegetarian");
  const [condition, setCondition] = useState<HealthCondition>("general");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("general");
  const [selectedHealthTab, setSelectedHealthTab] = useState<HealthCondition>("general");

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (query.toLowerCase().includes("exercise")) {
        setAdvice("Regular exercise is important for maintaining good health. Aim for at least 30 minutes of moderate exercise most days of the week.");
      } else if (query.toLowerCase().includes("diet")) {
        setAdvice("A balanced diet rich in fruits, vegetables, lean proteins, and whole grains is essential for overall well-being.");
      } else if (query.toLowerCase().includes("sleep")) {
        setAdvice("Aim for 7-8 hours of quality sleep each night to allow your body to rest and repair.");
      } else {
        setAdvice("This is a demo. Please ask about 'exercise', 'diet', or 'sleep' for relevant advice.");
      }
    } catch (e: any) {
      setError("Failed to fetch advice. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFitnessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!age || !height || !weight) {
      toast({
        title: "Error",
        description: "Please fill all the required fields",
        variant: "destructive"
      });
      return;
    }
    
    setFormSubmitted(true);
    setShowResults(true);
    toast({
      title: "Success",
      description: "Your fitness profile has been created!"
    });
  };

  const getExerciseRecommendations = ({ age, height, weight, gender, dietType }: FitnessCalculatorProps) => {
    const ageNum = age; // No conversion needed since age is already a number
    const bmi = weight / ((height / 100) * (height / 100));
    
    let intensity = "moderate";
    if (bmi < 18.5) intensity = "light";
    if (bmi > 25) intensity = "high";
    
    const exercisesByIntensity: Record<string, Array<{name: string, duration: string, frequency: string}>> = {
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
    const proteinSourcesByDiet: Record<DietType, string> = {
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
      bmi: bmi.toFixed(1)
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto py-24 px-4">
        <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="general">General Wellness</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="fitness">Fitness Calculator</TabsTrigger>
            <TabsTrigger value="health-plans">Health Plans</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Your Health Journey Starts Here</span>
                </CardTitle>
                <CardDescription>Personalized advice for a healthier life.</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert>
                  <Heart className="h-4 w-4" />
                  <AlertTitle>Tip for Today</AlertTitle>
                  <AlertDescription>
                    Stay hydrated! Drinking enough water is crucial for energy levels and overall health.
                  </AlertDescription>
                </Alert>

                <div className="mt-6">
                  <form onSubmit={handleQuerySubmit} className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Ask a question about health..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Get Advice"}
                    </Button>
                  </form>

                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {advice && (
                    <div className="mt-4 p-4 rounded-md bg-gray-50 border border-gray-200">
                      <h4 className="font-semibold">Advice:</h4>
                      <p>{advice}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nutrition" className="space-y-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cherry className="w-5 h-5 text-primary" />
                  <span>Nutrition Advice</span>
                </CardTitle>
                <CardDescription>Healthy eating tips for better living.</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert>
                  <Cherry className="h-4 w-4" />
                  <AlertTitle>Nutrition Advice</AlertTitle>
                  <AlertDescription>
                    Incorporate a variety of colorful fruits and vegetables into your daily meals for a wide range of vitamins and minerals.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fitness" className="space-y-2">
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
                  <form onSubmit={handleFitnessSubmit} className="space-y-4">
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
                              {parseFloat(recommendations.bmi) < 18.5 
                                ? "Underweight - Focus on healthy weight gain"
                                : parseFloat(recommendations.bmi) < 25
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
          </TabsContent>
          
          <TabsContent value="mental" className="space-y-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <span>Mental Wellness</span>
                </CardTitle>
                <CardDescription>Tips for maintaining mental health.</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert>
                  <Stethoscope className="h-4 w-4" />
                  <AlertTitle>Mental Wellness</AlertTitle>
                  <AlertDescription>
                    Take a few minutes each day to practice mindfulness or meditation to reduce stress and improve mental clarity.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="health-plans" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clipboard className="w-5 h-5 text-primary" />
                  <span>Personalized Health Plans</span>
                </CardTitle>
                <CardDescription>Discover meal plans and recommendations for specific health conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="condition" className="mb-2 block">Select Your Health Condition</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Button 
                        variant={selectedHealthTab === "general" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("general")}
                        className="w-full"
                      >
                        <Activity className="mr-2 h-4 w-4" />
                        General Fitness
                      </Button>
                      <Button 
                        variant={selectedHealthTab === "diabetic" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("diabetic")}
                        className="w-full"
                      >
                        <Droplets className="mr-2 h-4 w-4" />
                        Diabetes
                      </Button>
                      <Button 
                        variant={selectedHealthTab === "thyroid" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("thyroid")}
                        className="w-full"
                      >
                        <Stethoscope className="mr-2 h-4 w-4" />
                        Thyroid
                      </Button>
                      <Button 
                        variant={selectedHealthTab === "heart" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("heart")}
                        className="w-full"
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        Heart
                      </Button>
                      <Button 
                        variant={selectedHealthTab === "pcos" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("pcos")}
                        className="w-full"
                      >
                        <Brain className="mr-2 h-4 w-4" />
                        PCOS
                      </Button>
                      <Button 
                        variant={selectedHealthTab === "kidney" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("kidney")}
                        className="w-full"
                      >
                        <Kidney className="mr-2 h-4 w-4" />
                        Kidney
                      </Button>
                      <Button 
                        variant={selectedHealthTab === "liver" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("liver")}
                        className="w-full"
                      >
                        <Pill className="mr-2 h-4 w-4" />
                        Liver
                      </Button>
                      <Button 
                        variant={selectedHealthTab === "joint" ? "default" : "outline"} 
                        onClick={() => setSelectedHealthTab("joint")}
                        className="w-full"
                      >
                        <Activity className="mr-2 h-4 w-4" />
                        Joint Issues
                      </Button>
                    </div>
                  </div>
                  
                  <HealthRecommendations condition={selectedHealthTab} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HealthAdvice;
