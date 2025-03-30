
import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BaseHealthForm, { baseFormSchema } from "./BaseHealthForm";
import { z } from "zod";
import { HealthCondition, ConditionFormData } from "@/types/health";

const heartFormSchema = baseFormSchema.extend({
  cholesterol: z.number().optional(),
  bloodPressure: z.string().optional(),
  heartRate: z.number().optional(),
  triglycerides: z.number().optional(),
});

interface HeartDiseaseFormProps {
  onSubmit: (data: ConditionFormData) => void;
}

const HeartDiseaseForm: React.FC<HeartDiseaseFormProps> = ({ onSubmit }) => {
  const renderHeartFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem>
          <FormLabel>Cholesterol (mg/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter cholesterol level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Blood Pressure (mmHg)</FormLabel>
          <FormControl>
            <Input
              placeholder="e.g., 120/80"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Heart Rate (bpm)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter heart rate"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Triglycerides (mg/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter triglycerides level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
      </div>
    </div>
  );

  return (
    <BaseHealthForm
      condition="heart disease"
      onSubmit={onSubmit}
      schema={heartFormSchema}
    >
      {renderHeartFields()}
    </BaseHealthForm>
  );
};

export default HeartDiseaseForm;
