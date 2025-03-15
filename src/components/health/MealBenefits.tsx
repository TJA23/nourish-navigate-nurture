
import React from 'react';

interface MealBenefitsProps {
  benefits?: string[];
}

const MealBenefits = ({ benefits }: MealBenefitsProps) => {
  if (!benefits || benefits.length === 0) return null;
  
  return (
    <div>
      <h5 className="font-medium text-sm">Benefits</h5>
      <ul className="text-sm space-y-1 mt-1 list-disc list-inside">
        {benefits.map((benefit, idx) => (
          <li key={idx}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealBenefits;
