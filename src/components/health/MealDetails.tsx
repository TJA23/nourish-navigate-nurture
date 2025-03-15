
import React from 'react';
import { Meal } from '../types/health';
import NutritionFacts from './NutritionFacts';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import MealBenefits from './MealBenefits';

interface MealDetailsProps {
  meal: Meal;
}

const MealDetails = ({ meal }: MealDetailsProps) => {
  return (
    <div className="space-y-4 p-4 border rounded-md bg-gray-50">
      <div>
        <h4 className="font-medium text-lg">{meal.name}</h4>
        <p className="text-sm text-gray-600">{meal.description}</p>
      </div>
      
      <IngredientsList ingredients={meal.ingredients} />
      <InstructionsList instructions={meal.instructions} />
      <NutritionFacts nutrition={meal.nutrition} />
      <MealBenefits benefits={meal.benefits} />
    </div>
  );
};

export default MealDetails;
