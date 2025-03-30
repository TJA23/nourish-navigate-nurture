
import React from "react";
import { FormItem, FormLabel } from "@/components/ui/form";
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

const jointIssuesFormSchema = baseFormSchema.extend({
  jointCondition: z.enum(["arthritis", "osteoarthritis", "rheumatoid", "gout", "other"]).optional(),
});

interface JointIssuesFormProps {
  onSubmit: (data: ConditionFormData) => void;
}

const JointIssuesForm: React.FC<JointIssuesFormProps> = ({ onSubmit }) => {
  const renderJointIssuesFields = () => (
    <FormItem>
      <FormLabel>Joint Condition</FormLabel>
      <Select
        onValueChange={(value) => value}
        defaultValue="arthritis"
      >
        <SelectTrigger>
          <SelectValue placeholder="Select joint condition" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="arthritis">Arthritis</SelectItem>
          <SelectItem value="osteoarthritis">Osteoarthritis</SelectItem>
          <SelectItem value="rheumatoid">Rheumatoid Arthritis</SelectItem>
          <SelectItem value="gout">Gout</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  );

  return (
    <BaseHealthForm
      condition="joint issues"
      onSubmit={onSubmit}
      schema={jointIssuesFormSchema}
    >
      {renderJointIssuesFields()}
    </BaseHealthForm>
  );
};

export default JointIssuesForm;
