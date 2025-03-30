
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Fitness = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBMI.toFixed(1)));
    }
  };

  const calculateBMR = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageValue = parseFloat(age);
    
    if (weightInKg > 0 && heightInCm > 0 && ageValue > 0) {
      let calculatedBMR = 0;
      
      if (gender === "male") {
        calculatedBMR = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * ageValue);
      } else {
        calculatedBMR = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * ageValue);
      }
      
      setBmr(Math.round(calculatedBMR));
      
      // Calculate TDEE
      let activityMultiplier = 1.2; // Sedentary
      
      switch(activityLevel) {
        case "sedentary":
          activityMultiplier = 1.2;
          break;
        case "light":
          activityMultiplier = 1.375;
          break;
        case "moderate":
          activityMultiplier = 1.55;
          break;
        case "active":
          activityMultiplier = 1.725;
          break;
        case "very active":
          activityMultiplier = 1.9;
          break;
      }
      
      setTdee(Math.round(calculatedBMR * activityMultiplier));
    }
  };

  const getBMICategory = (bmiValue: number): string => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue < 24.9) return "Normal weight";
    if (bmiValue < 29.9) return "Overweight";
    if (bmiValue < 34.9) return "Obesity (Class 1)";
    if (bmiValue < 39.9) return "Obesity (Class 2)";
    return "Extreme Obesity (Class 3)";
  };

  const getBMIColor = (bmiValue: number): string => {
    if (bmiValue < 18.5) return "text-blue-500";
    if (bmiValue < 24.9) return "text-green-500";
    if (bmiValue < 29.9) return "text-yellow-500";
    if (bmiValue < 34.9) return "text-orange-500";
    if (bmiValue < 39.9) return "text-red-500";
    return "text-red-700";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
    calculateBMR();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Fitness Calculator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Body Metrics Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    placeholder="Enter your height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    placeholder="Enter your weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant={gender === "male" ? "default" : "outline"}
                      onClick={() => setGender("male")}
                    >
                      Male
                    </Button>
                    <Button
                      type="button"
                      variant={gender === "female" ? "default" : "outline"}
                      onClick={() => setGender("female")}
                    >
                      Female
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Activity Level</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant={activityLevel === "sedentary" ? "default" : "outline"}
                      onClick={() => setActivityLevel("sedentary")}
                      className="justify-start"
                    >
                      Sedentary
                    </Button>
                    <Button
                      type="button"
                      variant={activityLevel === "light" ? "default" : "outline"}
                      onClick={() => setActivityLevel("light")}
                      className="justify-start"
                    >
                      Light Activity
                    </Button>
                    <Button
                      type="button"
                      variant={activityLevel === "moderate" ? "default" : "outline"}
                      onClick={() => setActivityLevel("moderate")}
                      className="justify-start"
                    >
                      Moderate
                    </Button>
                    <Button
                      type="button"
                      variant={activityLevel === "active" ? "default" : "outline"}
                      onClick={() => setActivityLevel("active")}
                      className="justify-start"
                    >
                      Very Active
                    </Button>
                    <Button
                      type="button"
                      variant={activityLevel === "very active" ? "default" : "outline"}
                      onClick={() => setActivityLevel("very active")}
                      className="justify-start sm:col-span-2"
                    >
                      Extremely Active
                    </Button>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">Calculate</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            {bmi !== null && (
              <Card>
                <CardHeader>
                  <CardTitle>Body Mass Index (BMI)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-2">{bmi}</p>
                    <p className={`text-xl ${getBMIColor(bmi)}`}>
                      {getBMICategory(bmi)}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-4">
                      BMI is a measure of body fat based on height and weight. It's a screening tool that can indicate whether you have a healthy weight for your height.
                    </p>
                    
                    <div className="bg-gray-100 p-3 rounded-md">
                      <p className="text-xs text-gray-500">
                        BMI Categories:
                      </p>
                      <ul className="text-xs text-gray-600 mt-1 space-y-1">
                        <li><span className="text-blue-500 font-medium">Underweight:</span> Below 18.5</li>
                        <li><span className="text-green-500 font-medium">Normal weight:</span> 18.5–24.9</li>
                        <li><span className="text-yellow-500 font-medium">Overweight:</span> 25–29.9</li>
                        <li><span className="text-orange-500 font-medium">Obesity (Class 1):</span> 30-34.9</li>
                        <li><span className="text-red-500 font-medium">Obesity (Class 2):</span> 35-39.9</li>
                        <li><span className="text-red-700 font-medium">Extreme Obesity (Class 3):</span> 40 or higher</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {bmr !== null && tdee !== null && (
              <Card>
                <CardHeader>
                  <CardTitle>Metabolic Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-600 mb-1">Basal Metabolic Rate (BMR)</p>
                      <p className="text-2xl font-semibold">{bmr} calories/day</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Calories your body needs at complete rest
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 mb-1">Total Daily Energy Expenditure (TDEE)</p>
                      <p className="text-2xl font-semibold">{tdee} calories/day</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Estimated calories you burn per day with your activity level
                      </p>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-md">
                      <p className="text-sm font-medium">Weight goals:</p>
                      <div className="mt-2 space-y-2 text-sm">
                        <p><span className="font-medium">Weight loss:</span> Consume {Math.round(tdee * 0.8)} calories/day (20% deficit)</p>
                        <p><span className="font-medium">Maintenance:</span> Consume {tdee} calories/day</p>
                        <p><span className="font-medium">Weight gain:</span> Consume {Math.round(tdee * 1.15)} calories/day (15% surplus)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
