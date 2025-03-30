
import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BaseHealthForm, { baseFormSchema } from "./BaseHealthForm";
import { z } from "zod";
import { ConditionFormData } from "@/types/health";

const diabetesFormSchema = baseFormSchema.extend({
  diabetesType: z.enum(["type1", "type2", "gestational", "prediabetes"]).optional(),
  fastingBloodSugar: z.number().optional(),
  hba1c: z.number().optional(),
  insulinSensitivity: z.enum(["high", "normal", "low"]).optional(),
});

interface DiabetesFormProps {
  onSubmit: (data: ConditionFormData) => void;
}

const DiabetesForm: React.FC<DiabetesFormProps> = ({ onSubmit }) => {
  const renderDiabetesFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem>
          <FormLabel>Diabetes Type</FormLabel>
          <Select
            onValueChange={(value) => value}
            defaultValue="type2"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select diabetes type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="type1">Type 1</SelectItem>
              <SelectItem value="type2">Type 2</SelectItem>
              <SelectItem value="gestational">Gestational</SelectItem>
              <SelectItem value="prediabetes">Prediabetes</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
        
        <FormItem>
          <FormLabel>Fasting Blood Sugar (mg/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter fasting blood sugar"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>HbA1c (%)</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.1"
              placeholder="Enter HbA1c"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Insulin Sensitivity</FormLabel>
          <Select
            onValueChange={(value) => value}
            defaultValue="normal"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select insulin sensitivity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      </div>
    </div>
  );

  return (
    <BaseHealthForm
      condition="diabetes"
      onSubmit={onSubmit}
      schema={diabetesFormSchema}
    >
      {renderDiabetesFields()}
    </BaseHealthForm>
  );
};

export default DiabetesForm;
