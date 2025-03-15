
import React from 'react';
import { NutritionInfo } from '../types/health';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart } from 'lucide-react';

interface DailyNutritionTargetsProps {
  nutrition: NutritionInfo;
}

const DailyNutritionTargets = ({ nutrition }: DailyNutritionTargetsProps) => {
  return (
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
            <p className="text-2xl font-bold">{nutrition.calories}</p>
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
            <p className="text-2xl font-bold">{nutrition.protein}g</p>
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
            <p className="text-2xl font-bold">{nutrition.carbs}g</p>
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
            <p className="text-2xl font-bold">{nutrition.fat}g</p>
            <p className="text-xs text-gray-500">per day</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DailyNutritionTargets;
