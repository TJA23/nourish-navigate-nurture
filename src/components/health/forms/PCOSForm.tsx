
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

const pcosFormSchema = baseFormSchema.extend({
  bmi: z.number().optional(),
  insulinResistance: z.enum(["yes", "no", "unknown"]).optional(),
  testosterone: z.number().optional(),
  menstrualCycle: z.enum(["regular", "irregular", "absent"]).optional(),
});

interface PCOSFormProps {
  onSubmit: (data: ConditionFormData) => void;
}

const PCOSForm: React.FC<PCOSFormProps> = ({ onSubmit }) => {
  const renderPCOSFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem>
          <FormLabel>BMI (kg/m²)</FormLabel>
          <FormControl>
            <Input 
              type="number"
              step="0.1"
              placeholder="Enter BMI" 
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Insulin Resistance</FormLabel>
          <Select
            onValueChange={(value) => value}
            defaultValue="unknown"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="unknown">Unknown</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
        
        <FormItem>
          <FormLabel>Testosterone (ng/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter testosterone level"
              onChange={(e) => e.target.value}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Menstrual Cycle</FormLabel>
          <Select
            onValueChange={(value) => value}
            defaultValue="regular"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select cycle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="irregular">Irregular</SelectItem>
              <SelectItem value="absent">Absent</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      </div>
    </div>
  );

  return (
    <BaseHealthForm
      condition="pcos"
      onSubmit={onSubmit}
      schema={pcosFormSchema}
    >
      {renderPCOSFields()}
    </BaseHealthForm>
  );
};

export default PCOSForm;
