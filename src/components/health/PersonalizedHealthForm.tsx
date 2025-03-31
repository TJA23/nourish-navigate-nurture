
import React from "react";
import { HealthCondition, ConditionFormData } from "@/types/health";
import HeartDiseaseForm from "./forms/HeartDiseaseForm";
import DiabetesForm from "./forms/DiabetesForm";
import KidneyDiseaseForm from "./forms/KidneyDiseaseForm";
import LiverDiseaseForm from "./forms/LiverDiseaseForm";
import PCOSForm from "./forms/PCOSForm";
import BaseHealthForm from "./forms/BaseHealthForm";
import { baseFormSchema } from "./forms/BaseHealthForm";

interface PersonalizedHealthFormProps {
  condition: HealthCondition;
  onSubmit: (data: ConditionFormData) => void;
}

const PersonalizedHealthForm: React.FC<PersonalizedHealthFormProps> = ({
  condition,
  onSubmit,
}) => {
  const renderConditionForm = () => {
    switch (condition) {
      case "heart disease":
        return <HeartDiseaseForm onSubmit={onSubmit} />;
      case "diabetes":
        return <DiabetesForm onSubmit={onSubmit} />;
      case "kidney disease":
        return <KidneyDiseaseForm onSubmit={onSubmit} />;
      case "liver disease":
        return <LiverDiseaseForm onSubmit={onSubmit} />;
      case "pcos":
        return <PCOSForm onSubmit={onSubmit} />;
      case "vegan":
        return (
          <BaseHealthForm 
            condition="vegan"
            onSubmit={onSubmit} 
            schema={baseFormSchema}
            title="Vegan Diet Plan" 
            description="Get personalized vegan meal plans based on your health profile"
          />
        );
      case "non-vegetarian":
        return (
          <BaseHealthForm 
            condition="non-vegetarian"
            onSubmit={onSubmit} 
            schema={baseFormSchema}
            title="Non-Vegetarian Diet Plan" 
            description="Get personalized non-vegetarian meal plans based on your health profile"
          />
        );
      default:
        return <HeartDiseaseForm onSubmit={onSubmit} />;
    }
  };

  return renderConditionForm();
};

export default PersonalizedHealthForm;
