
import React from 'react';
import { NutritionInfo } from '../types/health';

interface NutritionFactsProps {
  nutrition: NutritionInfo;
  showDetailed?: boolean;
}

const NutritionFacts = ({ nutrition, showDetailed = false }: NutritionFactsProps) => {
  return (
    <div>
      <h5 className="font-medium text-sm">Nutrition Facts</h5>
      <div className="grid grid-cols-3 gap-2 text-sm mt-2">
        <div className="bg-white p-2 rounded border">
          <p className="text-xs text-gray-500">Calories</p>
          <p className="font-medium">{nutrition.calories}</p>
        </div>
        <div className="bg-white p-2 rounded border">
          <p className="text-xs text-gray-500">Protein</p>
          <p className="font-medium">{nutrition.protein}g</p>
        </div>
        <div className="bg-white p-2 rounded border">
          <p className="text-xs text-gray-500">Carbs</p>
          <p className="font-medium">{nutrition.carbs}g</p>
        </div>
        <div className="bg-white p-2 rounded border">
          <p className="text-xs text-gray-500">Fat</p>
          <p className="font-medium">{nutrition.fat}g</p>
        </div>
        <div className="bg-white p-2 rounded border">
          <p className="text-xs text-gray-500">Fiber</p>
          <p className="font-medium">{nutrition.fiber}g</p>
        </div>
        <div className="bg-white p-2 rounded border">
          <p className="text-xs text-gray-500">Sugar</p>
          <p className="font-medium">{nutrition.sugar}g</p>
        </div>
        
        {showDetailed && (
          <>
            {nutrition.sodium && (
              <div className="bg-white p-2 rounded border">
                <p className="text-xs text-gray-500">Sodium</p>
                <p className="font-medium">{nutrition.sodium}mg</p>
              </div>
            )}
            {nutrition.potassium && (
              <div className="bg-white p-2 rounded border">
                <p className="text-xs text-gray-500">Potassium</p>
                <p className="font-medium">{nutrition.potassium}mg</p>
              </div>
            )}
            {nutrition.calcium && (
              <div className="bg-white p-2 rounded border">
                <p className="text-xs text-gray-500">Calcium</p>
                <p className="font-medium">{nutrition.calcium}mg</p>
              </div>
            )}
            {nutrition.iron && (
              <div className="bg-white p-2 rounded border">
                <p className="text-xs text-gray-500">Iron</p>
                <p className="font-medium">{nutrition.iron}mg</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NutritionFacts;
