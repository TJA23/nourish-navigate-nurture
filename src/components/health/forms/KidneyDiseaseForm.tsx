
import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BaseHealthForm, { baseFormSchema } from "./BaseHealthForm";
import { z } from "zod";
import { ConditionFormData } from "@/types/health";

const kidneyFormSchema = baseFormSchema.extend({
  bloodPressure: z.string().optional(),
  creatinine: z.number().optional(),
  gfr: z.number().optional(),
  proteinuria: z.number().optional(),
});

interface KidneyDiseaseFormProps {
  onSubmit: (data: ConditionFormData) => void;
}

const KidneyDiseaseForm: React.FC<KidneyDiseaseFormProps> = ({ onSubmit }) => {
  const renderKidneyFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <FormLabel>Creatinine (mg/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.1"
              placeholder="Enter creatinine level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>GFR (mL/min)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter GFR"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Proteinuria (g/day)</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.1"
              placeholder="Enter proteinuria level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
      </div>
    </div>
  );

  return (
    <BaseHealthForm
      condition="kidney disease"
      onSubmit={onSubmit}
      schema={kidneyFormSchema}
    >
      {renderKidneyFields()}
    </BaseHealthForm>
  );
};

export default KidneyDiseaseForm;
