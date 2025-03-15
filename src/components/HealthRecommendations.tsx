
import React from 'react';
import { HealthCondition, WeeklyPlan } from '../types/health';
import { getMealPlanForCondition } from '../data/healthMealPlans';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DietaryGuidelines from './health/DietaryGuidelines';
import DailyNutritionTargets from './health/DailyNutritionTargets';
import DailyMealPlan from './health/DailyMealPlan';

interface HealthRecommendationsProps {
  condition: HealthCondition;
}

const HealthRecommendations = ({ condition }: HealthRecommendationsProps) => {
  const mealPlan = getMealPlanForCondition(condition);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  return (
    <div className="space-y-6">
      <DietaryGuidelines 
        condition={condition} 
        dietaryNotes={mealPlan.dietaryNotes} 
      />
      
      <Card>
        <CardContent className="pt-6">
          <DailyNutritionTargets nutrition={mealPlan.days[0].totalNutrition} />
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
                  <DailyMealPlan dailyPlan={dailyPlan} dayName={days[dayIndex]} />
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
