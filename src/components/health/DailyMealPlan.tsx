
import React from 'react';
import { DailyPlan } from '../types/health';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Utensils, Apple } from 'lucide-react';
import MealDetails from './MealDetails';

interface DailyMealPlanProps {
  dailyPlan: DailyPlan;
  dayName: string;
}

const DailyMealPlan = ({ dailyPlan, dayName }: DailyMealPlanProps) => {
  return (
    <div>
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
          <MealDetails meal={dailyPlan.breakfast} />
        </TabsContent>
        
        <TabsContent value="lunch" className="mt-4">
          <MealDetails meal={dailyPlan.lunch} />
        </TabsContent>
        
        <TabsContent value="dinner" className="mt-4">
          <MealDetails meal={dailyPlan.dinner} />
        </TabsContent>
        
        <TabsContent value="snacks" className="mt-4">
          <div className="space-y-4">
            {dailyPlan.snacks.map((snack, idx) => (
              <div key={idx}>
                <MealDetails meal={snack} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DailyMealPlan;
