
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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

// Base form schema with common fields
export const baseFormSchema = z.object({
  age: z.number().min(18).max(120),
  gender: z.enum(["male", "female", "other"]),
  additionalNotes: z.string().optional(),
});

export type BaseFormValues = z.infer<typeof baseFormSchema>;

interface BaseHealthFormProps {
  condition: HealthCondition;
  onSubmit: (data: ConditionFormData) => void;
  children?: React.ReactNode;
  schema: z.ZodType<any>;
}

const BaseHealthForm: React.FC<BaseHealthFormProps> = ({
  condition,
  onSubmit,
  children,
  schema,
}) => {
  const form = useForm<any>({
    resolver: zodResolver(schema),
    defaultValues: {
      age: 0,
      gender: "male",
      additionalNotes: "",
    },
  });

  const handleFormSubmit = (values: any) => {
    // Default values for the removed fields
    const defaultHeight = 170; // cm
    const defaultWeight = 70; // kg
    const defaultActivityLevel = "moderate";

    onSubmit({
      ...values,
      allergies: [],
      weight: defaultWeight,
      height: defaultHeight,
      activityLevel: defaultActivityLevel as "sedentary" | "light" | "moderate" | "active" | "very active",
      additionalNotes: values.additionalNotes || "",
    });
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

              <div className="md:col-span-2">{children}</div>
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

export default BaseHealthForm;
