
import React from 'react';
import { Ingredient } from '../types/health';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <div>
      <h5 className="font-medium text-sm">Ingredients</h5>
      <ul className="text-sm space-y-1 mt-1">
        {ingredients.map((ingredient, idx) => (
          <li key={idx} className="flex items-start">
            <span className="font-medium mr-2">{ingredient.amount}</span>
            <span>{ingredient.name}</span>
            {ingredient.notes && <span className="text-gray-500 ml-1">({ingredient.notes})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
