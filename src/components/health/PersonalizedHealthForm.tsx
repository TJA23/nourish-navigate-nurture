
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HealthCondition, ConditionFormData } from "@/types/health";

const formSchema = z.object({
  age: z.number().min(18).max(120),
  gender: z.enum(["male", "female", "other"]),
  additionalNotes: z.string().optional(),
  
  // PCOS specific
  bmi: z.number().optional(),
  insulinResistance: z.enum(["yes", "no", "unknown"]).optional(),
  testosterone: z.number().optional(),
  menstrualCycle: z.enum(["regular", "irregular", "absent"]).optional(),
  
  // Liver specific
  bilirubin: z.number().optional(),
  alt: z.number().optional(),
  ast: z.number().optional(),
  albumin: z.number().optional(),
  
  // Heart specific
  cholesterol: z.number().optional(),
  bloodPressure: z.string().optional(),
  heartRate: z.number().optional(),
  triglycerides: z.number().optional(),
  
  // Kidney specific
  creatinine: z.number().optional(),
  gfr: z.number().optional(),
  proteinuria: z.number().optional(),
  
  // Diabetes specific
  diabetesType: z.enum(["type1", "type2", "gestational", "prediabetes"]).optional(),
  fastingBloodSugar: z.number().optional(),
  hba1c: z.number().optional(),
  insulinSensitivity: z.enum(["high", "normal", "low"]).optional(),
});

interface PersonalizedHealthFormProps {
  condition: HealthCondition;
  onSubmit: (data: ConditionFormData) => void;
}

const PersonalizedHealthForm: React.FC<PersonalizedHealthFormProps> = ({
  condition,
  onSubmit,
}) => {
  const [calculatedBMI, setCalculatedBMI] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 0,
      gender: "male",
      additionalNotes: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    // Default values for the removed fields
    const defaultHeight = 170; // cm
    const defaultWeight = 70; // kg
    const defaultActivityLevel = "moderate";

    onSubmit({
      ...values,
      allergies: [],
      age: values.age,
      weight: defaultWeight,
      height: defaultHeight,
      gender: values.gender,
      activityLevel: defaultActivityLevel as "sedentary" | "light" | "moderate" | "active" | "very active",
      additionalNotes: values.additionalNotes || "",
    });
  };

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
              onChange={(e) => form.setValue("bmi", parseFloat(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Insulin Resistance</FormLabel>
          <Select
            onValueChange={(value) => form.setValue("insulinResistance", value as "yes" | "no" | "unknown")}
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
              onChange={(e) => form.setValue("testosterone", parseFloat(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Menstrual Cycle</FormLabel>
          <Select
            onValueChange={(value) => form.setValue("menstrualCycle", value as "regular" | "irregular" | "absent")}
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
              onChange={(e) => form.setValue("bilirubin", parseFloat(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>ALT (U/L)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter ALT level"
              onChange={(e) => form.setValue("alt", parseInt(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>AST (U/L)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter AST level"
              onChange={(e) => form.setValue("ast", parseInt(e.target.value) || 0)}
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
              onChange={(e) => form.setValue("albumin", parseFloat(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
      </div>
    </div>
  );

  const renderHeartFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem>
          <FormLabel>Cholesterol (mg/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter cholesterol level"
              onChange={(e) => form.setValue("cholesterol", parseInt(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Blood Pressure (mmHg)</FormLabel>
          <FormControl>
            <Input
              placeholder="e.g., 120/80"
              onChange={(e) => form.setValue("bloodPressure", e.target.value)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Heart Rate (bpm)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter heart rate"
              onChange={(e) => form.setValue("heartRate", parseInt(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Triglycerides (mg/dL)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter triglycerides level"
              onChange={(e) => form.setValue("triglycerides", parseInt(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
      </div>
    </div>
  );

  const renderKidneyFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem>
          <FormLabel>Blood Pressure (mmHg)</FormLabel>
          <FormControl>
            <Input
              placeholder="e.g., 120/80"
              onChange={(e) => form.setValue("bloodPressure", e.target.value)}
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
              onChange={(e) => form.setValue("creatinine", parseFloat(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>GFR (mL/min)</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder="Enter GFR"
              onChange={(e) => form.setValue("gfr", parseInt(e.target.value) || 0)}
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
              onChange={(e) => form.setValue("proteinuria", parseFloat(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
      </div>
    </div>
  );

  const renderDiabetesFields = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormItem>
          <FormLabel>Diabetes Type</FormLabel>
          <Select
            onValueChange={(value) => form.setValue("diabetesType", value as "type1" | "type2" | "gestational" | "prediabetes")}
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
              onChange={(e) => form.setValue("fastingBloodSugar", parseInt(e.target.value) || 0)}
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
              onChange={(e) => form.setValue("hba1c", parseFloat(e.target.value) || 0)}
            />
          </FormControl>
        </FormItem>
        
        <FormItem>
          <FormLabel>Insulin Sensitivity</FormLabel>
          <Select
            onValueChange={(value) => form.setValue("insulinSensitivity", value as "high" | "normal" | "low")}
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

  const conditionSpecificFields = () => {
    switch (condition) {
      case "heart disease":
        return renderHeartFields();
      case "diabetes":
        return renderDiabetesFields();
      case "kidney disease":
        return renderKidneyFields();
      case "liver disease":
        return renderLiverFields();
      case "pcos":
        return renderPCOSFields();
      case "joint issues":
        return (
          <FormItem>
            <FormLabel>Joint Condition</FormLabel>
            <Select
              onValueChange={(value) =>
                form.setValue("additionalNotes", value)
              }
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
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized {condition} Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your age"
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2">{conditionSpecificFields()}</div>
            </div>

            <Button type="submit" className="w-full">
              Get Personalized Recommendations
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PersonalizedHealthForm;
