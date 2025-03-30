
import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BaseHealthForm, { baseFormSchema } from "./BaseHealthForm";
import { z } from "zod";
import { ConditionFormData } from "@/types/health";

const liverFormSchema = baseFormSchema.extend({
  bilirubin: z.number().optional(),
  alt: z.number().optional(),
  ast: z.number().optional(),
  albumin: z.number().optional(),
});

interface LiverDiseaseFormProps {
  onSubmit: (data: ConditionFormData) => void;
}

const LiverDiseaseForm: React.FC<LiverDiseaseFormProps> = ({ onSubmit }) => {
  const renderLiverFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem>
          <FormLabel>Bilirubin (mg/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.1"
              placeholder="Enter bilirubin level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>ALT (U/L)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter ALT level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>AST (U/L)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter AST level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Albumin (g/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.1"
              placeholder="Enter albumin level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
      </div>
    </div>
  );

  return (
    <BaseHealthForm
      condition="liver disease"
      onSubmit={onSubmit}
      schema={liverFormSchema}
    >
      {renderLiverFields()}
    </BaseHealthForm>
  );
};

export default LiverDiseaseForm;
