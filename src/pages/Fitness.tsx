
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Activity, ArrowRight } from "lucide-react";

const Fitness = () => {
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [diet, setDiet] = useState<string>("nonveg");
  const [bmi, setBmi] = useState<number | null>(null);
  const [results, setResults] = useState<boolean>(false);

  const handleCalculate = () => {
    if (age && height && weight) {
      const heightInM = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBmi = weightInKg / (heightInM * heightInM);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
      setResults(true);
    }
  };

  const getBmiCategory = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Healthy Weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };

  const getExerciseRecommendations = () => {
    const category = getBmiCategory();
    const ageNum = parseInt(age);
    const exercises = [];

    if (category === "Underweight") {
      exercises.push("Strength training 3-4 times per week");
      exercises.push("Bodyweight exercises like push-ups and squats");
      exercises.push("Focus on protein-rich diet to build muscle");
    } else if (category === "Healthy Weight") {
      exercises.push("Maintain with a balanced exercise routine");
      exercises.push("30 minutes of cardio 3-5 times per week");
      exercises.push("Strength training 2-3 times per week");
    } else if (category === "Overweight") {
      exercises.push("Cardio exercises 4-5 times per week");
      exercises.push("High-intensity interval training (HIIT)");
      exercises.push("Strength training to build muscle and boost metabolism");
    } else if (category === "Obese") {
      exercises.push("Low-impact cardio like swimming or walking");
      exercises.push("Work with a professional for personalized guidance");
      exercises.push("Focus on consistent daily movement");
    }

    // Age-specific recommendations
    if (ageNum < 30) {
      exercises.push("Consider high-intensity sports like basketball or soccer");
    } else if (ageNum < 50) {
      exercises.push("Include joint-friendly activities like cycling or rowing");
    } else {
      exercises.push("Incorporate balance exercises to prevent falls");
      exercises.push("Consider activities like yoga or tai chi");
    }

    // Diet-specific recommendations
    if (diet === "veg") {
      exercises.push("Ensure adequate plant-based protein sources");
    } else if (diet === "vegan") {
      exercises.push("Consider B12 supplements for energy during workouts");
    }

    return exercises;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Fitness Assessment & Recommendations</h1>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>
                Enter your information to get personalized fitness recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
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
                  placeholder="Enter your height in cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter your weight in kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup value={gender} onValueChange={setGender} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Dietary Preference</Label>
                <Select value={diet} onValueChange={setDiet}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your diet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nonveg">Non-Vegetarian</SelectItem>
                    <SelectItem value="veg">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleCalculate} className="w-full">
                Calculate & Get Recommendations
              </Button>
            </CardFooter>
          </Card>

          {results && (
            <Card className="bg-gradient-to-br from-primary/5 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="text-primary" />
                  Your Fitness Results
                </CardTitle>
                <CardDescription>
                  Based on your information, here are your personalized recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Your BMI</p>
                  <p className="text-4xl font-bold text-primary">{bmi}</p>
                  <p className="mt-2 font-medium">{getBmiCategory()}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Recommended Exercises</h3>
                  <ul className="space-y-2">
                    {getExerciseRecommendations().map((exercise, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{exercise}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setResults(false)}>
                  Go Back
                </Button>
                <Button>
                  Save Results <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fitness;
