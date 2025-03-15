
import React from 'react';
import { HealthCondition, WeeklyPlan, DailyPlan, Meal } from '../types/health';
import { getMealPlanForCondition } from '../data/healthMealPlans';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Apple, Utensils, Coffee, PieChart } from 'lucide-react';

interface HealthRecommendationsProps {
  condition: HealthCondition;
}

const HealthRecommendations = ({ condition }: HealthRecommendationsProps) => {
  const mealPlan = getMealPlanForCondition(condition);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const renderMealDetails = (meal: Meal) => {
    return (
      <div className="space-y-4 p-4 border rounded-md bg-gray-50">
        <div>
          <h4 className="font-medium text-lg">{meal.name}</h4>
          <p className="text-sm text-gray-600">{meal.description}</p>
        </div>
        
        <div>
          <h5 className="font-medium text-sm">Ingredients</h5>
          <ul className="text-sm space-y-1 mt-1">
            {meal.ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-start">
                <span className="font-medium mr-2">{ingredient.amount}</span>
                <span>{ingredient.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-medium text-sm">Instructions</h5>
          <ol className="text-sm space-y-1 mt-1 list-decimal list-inside">
            {meal.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
        
        <div>
          <h5 className="font-medium text-sm">Nutrition Facts</h5>
          <div className="grid grid-cols-3 gap-2 text-sm mt-2">
            <div className="bg-white p-2 rounded border">
              <p className="text-xs text-gray-500">Calories</p>
              <p className="font-medium">{meal.nutrition.calories}</p>
            </div>
            <div className="bg-white p-2 rounded border">
              <p className="text-xs text-gray-500">Protein</p>
              <p className="font-medium">{meal.nutrition.protein}g</p>
            </div>
            <div className="bg-white p-2 rounded border">
              <p className="text-xs text-gray-500">Carbs</p>
              <p className="font-medium">{meal.nutrition.carbs}g</p>
            </div>
            <div className="bg-white p-2 rounded border">
              <p className="text-xs text-gray-500">Fat</p>
              <p className="font-medium">{meal.nutrition.fat}g</p>
            </div>
            <div className="bg-white p-2 rounded border">
              <p className="text-xs text-gray-500">Fiber</p>
              <p className="font-medium">{meal.nutrition.fiber}g</p>
            </div>
            <div className="bg-white p-2 rounded border">
              <p className="text-xs text-gray-500">Sugar</p>
              <p className="font-medium">{meal.nutrition.sugar}g</p>
            </div>
          </div>
        </div>
        
        {meal.benefits && (
          <div>
            <h5 className="font-medium text-sm">Benefits</h5>
            <ul className="text-sm space-y-1 mt-1 list-disc list-inside">
              {meal.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dietary Guidelines for {condition.charAt(0).toUpperCase() + condition.slice(1)} Health</CardTitle>
          <CardDescription>Follow these recommendations for optimal health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="font-medium">Key Recommendations:</h3>
            <ul className="list-disc list-inside space-y-1">
              {mealPlan.dietaryNotes.map((note, idx) => (
                <li key={idx} className="text-sm">{note}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">Daily Nutrition Targets:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <PieChart className="h-4 w-4 text-primary" />
                    Calories
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-2xl font-bold">{mealPlan.days[0].totalNutrition.calories}</p>
                  <p className="text-xs text-gray-500">per day</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <PieChart className="h-4 w-4 text-primary" />
                    Protein
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-2xl font-bold">{mealPlan.days[0].totalNutrition.protein}g</p>
                  <p className="text-xs text-gray-500">per day</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <PieChart className="h-4 w-4 text-primary" />
                    Carbs
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-2xl font-bold">{mealPlan.days[0].totalNutrition.carbs}g</p>
                  <p className="text-xs text-gray-500">per day</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <PieChart className="h-4 w-4 text-primary" />
                    Fat
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-2xl font-bold">{mealPlan.days[0].totalNutrition.fat}g</p>
                  <p className="text-xs text-gray-500">per day</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">7-Day Meal Plan</h2>
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="mb-4 flex overflow-x-auto">
            {days.map((day, index) => (
              <TabsTrigger key={index} value={index.toString()} className="flex-1">
                {day}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {mealPlan.days.map((dailyPlan, dayIndex) => (
            <TabsContent key={dayIndex} value={dayIndex.toString()}>
              <Card>
                <CardHeader>
                  <CardTitle>{days[dayIndex]}'s Meal Plan</CardTitle>
                  <CardDescription>
                    Total: {dailyPlan.totalNutrition.calories} calories | {dailyPlan.totalNutrition.protein}g protein | {dailyPlan.totalNutrition.carbs}g carbs | {dailyPlan.totalNutrition.fat}g fat
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="breakfast">
                    <TabsList>
                      <TabsTrigger value="breakfast" className="flex items-center gap-2">
                        <Coffee className="h-4 w-4" /> Breakfast
                      </TabsTrigger>
                      <TabsTrigger value="lunch" className="flex items-center gap-2">
                        <Utensils className="h-4 w-4" /> Lunch
                      </TabsTrigger>
                      <TabsTrigger value="dinner" className="flex items-center gap-2">
                        <Utensils className="h-4 w-4" /> Dinner
                      </TabsTrigger>
                      <TabsTrigger value="snacks" className="flex items-center gap-2">
                        <Apple className="h-4 w-4" /> Snacks
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="breakfast" className="mt-4">
                      {renderMealDetails(dailyPlan.breakfast)}
                    </TabsContent>
                    
                    <TabsContent value="lunch" className="mt-4">
                      {renderMealDetails(dailyPlan.lunch)}
                    </TabsContent>
                    
                    <TabsContent value="dinner" className="mt-4">
                      {renderMealDetails(dailyPlan.dinner)}
                    </TabsContent>
                    
                    <TabsContent value="snacks" className="mt-4">
                      <div className="space-y-4">
                        {dailyPlan.snacks.map((snack, idx) => (
                          <div key={idx}>
                            {renderMealDetails(snack)}
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default HealthRecommendations;
