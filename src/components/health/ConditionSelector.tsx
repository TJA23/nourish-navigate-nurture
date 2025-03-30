
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Stethoscope } from "lucide-react";
import { HealthCondition } from "@/types/health";

interface ConditionSelectorProps {
  selectedCondition: HealthCondition;
  onConditionChange: (condition: HealthCondition) => void;
  onTogglePersonalizedForm: () => void;
  showPersonalizedForm: boolean;
}

const ConditionSelector: React.FC<ConditionSelectorProps> = ({
  selectedCondition,
  onConditionChange,
  onTogglePersonalizedForm,
  showPersonalizedForm
}) => {
  const conditions: HealthCondition[] = ["heart disease", "diabetes", "kidney disease", "liver disease", "joint issues", "pcos", "general"];

  return (
    <div className="bg-white rounded-lg shadow-md mb-8 p-6">
      <h2 className="text-2xl font-bold mb-4">Select a Health Condition</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {conditions.map((condition) => (
          <Button
            key={condition}
            variant={selectedCondition === condition ? "default" : "outline"}
            className="justify-start"
            onClick={() => onConditionChange(condition)}
          >
            {condition === "heart disease" ? (
              <Heart className="mr-2 h-4 w-4" />
            ) : (
              <Stethoscope className="mr-2 h-4 w-4" />
            )}
            {condition.charAt(0).toUpperCase() + condition.slice(1)}
          </Button>
        ))}
      </div>
      
      <div className="mt-6">
        <Button 
          onClick={onTogglePersonalizedForm}
          variant="outline"
        >
          {showPersonalizedForm ? "Hide Personalized Form" : "Get Personalized Recommendations"}
        </Button>
      </div>
    </div>
  );
};

export default ConditionSelector;
