
import React from "react";
import BaseHealthForm, { baseFormSchema } from "./BaseHealthForm";
import { ConditionFormData } from "@/types/health";

interface GeneralHealthFormProps {
  onSubmit: (data: ConditionFormData) => void;
}

const GeneralHealthForm: React.FC<GeneralHealthFormProps> = ({ onSubmit }) => {
  return (
    <BaseHealthForm
      condition="general"
      onSubmit={onSubmit}
      schema={baseFormSchema}
    >
      <div className="p-4 bg-blue-50 rounded-md text-blue-700">
        <p>Please provide your basic information to get general health recommendations.</p>
      </div>
    </BaseHealthForm>
  );
};

export default GeneralHealthForm;
