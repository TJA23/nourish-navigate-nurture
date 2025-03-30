
import React, { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const formSchema = z.object({
  age: z.number().min(18).max(120),
  weight: z.number().min(30).max(300),
  height: z.number().min(100).max(250),
  gender: z.enum(["male", "female", "other"]),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very active"]),
  allergies: z.array(z.string()),
  additionalNotes: z.string().optional(),
});

interface PersonalizedHealthFormProps {
  condition: HealthCondition;
  onSubmit: (data: ConditionFormData) => void;
}

const PersonalizedHealthForm: React.FC<PersonalizedHealthFormProps> = ({
  condition,
  onSubmit,
}) => {
  const [allergyInput, setAllergyInput] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 0,
      weight: 0,
      height: 0,
      gender: "male",
      activityLevel: "moderate",
      allergies: [],
      additionalNotes: "",
    },
  });

  const handleAddAllergy = () => {
    if (allergyInput.trim() !== "" && !allergies.includes(allergyInput.trim())) {
      const newAllergies = [...allergies, allergyInput.trim()];
      setAllergies(newAllergies);
      form.setValue("allergies", newAllergies);
      setAllergyInput("");
    }
  };

  const handleRemoveAllergy = (allergy: string) => {
    const newAllergies = allergies.filter((a) => a !== allergy);
    setAllergies(newAllergies);
    form.setValue("allergies", newAllergies);
  };

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit({
      ...values,
      allergies,
    });
  };

  const conditionSpecificFields = () => {
    switch (condition) {
      case "heart disease":
        return (
          <>
            <FormField
              control={form.control}
              name="additionalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Pressure (if known)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 120/80" {...field} />
                  </FormControl>
                  <FormDescription>
                    This helps us provide more tailored recommendations
                  </FormDescription>
                </FormItem>
              )}
            />
          </>
        );
      case "diabetes":
        return (
          <>
            <FormItem>
              <FormLabel>Diabetes Type</FormLabel>
              <Select
                onValueChange={(value) =>
                  form.setValue("additionalNotes", value)
                }
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
              <FormDescription>
                Different types of diabetes require different dietary approaches
              </FormDescription>
            </FormItem>
          </>
        );
      case "pcos":
        return (
          <>
            <FormItem>
              <FormLabel>Primary Symptoms</FormLabel>
              <Select
                onValueChange={(value) =>
                  form.setValue("additionalNotes", value)
                }
                defaultValue="irregular"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select primary symptom" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="irregular">Irregular Periods</SelectItem>
                  <SelectItem value="weight">Weight Gain</SelectItem>
                  <SelectItem value="hirsutism">Excess Hair Growth</SelectItem>
                  <SelectItem value="acne">Acne</SelectItem>
                  <SelectItem value="fertility">Fertility Issues</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </>
        );
      case "kidney disease":
        return (
          <>
            <FormItem>
              <FormLabel>CKD Stage (if known)</FormLabel>
              <Select
                onValueChange={(value) =>
                  form.setValue("additionalNotes", value)
                }
                defaultValue="stage1"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select CKD stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stage1">Stage 1</SelectItem>
                  <SelectItem value="stage2">Stage 2</SelectItem>
                  <SelectItem value="stage3">Stage 3</SelectItem>
                  <SelectItem value="stage4">Stage 4</SelectItem>
                  <SelectItem value="stage5">Stage 5</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Nutritional needs vary significantly with CKD stage
              </FormDescription>
            </FormItem>
          </>
        );
      case "liver disease":
        return (
          <>
            <FormItem>
              <FormLabel>Liver Condition Type</FormLabel>
              <Select
                onValueChange={(value) =>
                  form.setValue("additionalNotes", value)
                }
                defaultValue="fatty"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select liver condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fatty">Fatty Liver</SelectItem>
                  <SelectItem value="hepatitis">Hepatitis</SelectItem>
                  <SelectItem value="cirrhosis">Cirrhosis</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </>
        );
      case "joint issues":
        return (
          <>
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
          </>
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

              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your weight"
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
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your height"
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
                name="activityLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Activity Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">
                          Sedentary (little to no exercise)
                        </SelectItem>
                        <SelectItem value="light">
                          Light (light exercise 1-3 days/week)
                        </SelectItem>
                        <SelectItem value="moderate">
                          Moderate (moderate exercise 3-5 days/week)
                        </SelectItem>
                        <SelectItem value="active">
                          Active (hard exercise 6-7 days/week)
                        </SelectItem>
                        <SelectItem value="very active">
                          Very Active (very hard exercise & physical job)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2">
                <FormItem>
                  <FormLabel>Allergies</FormLabel>
                  <div className="flex space-x-2">
                    <Input
                      value={allergyInput}
                      onChange={(e) => setAllergyInput(e.target.value)}
                      placeholder="Enter food allergies"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddAllergy();
                        }
                      }}
                    />
                    <Button type="button" onClick={handleAddAllergy}>
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allergies.map((allergy) => (
                      <Badge key={allergy} variant="secondary">
                        {allergy}
                        <button
                          type="button"
                          onClick={() => handleRemoveAllergy(allergy)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </FormItem>
              </div>

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
