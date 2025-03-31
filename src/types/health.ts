export type HealthCondition = 
  | "heart disease" 
  | "diabetes" 
  | "kidney disease" 
  | "liver disease" 
  | "pcos";

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
}

export interface MealIngredient {
  name: string;
  amount: string;
}

export interface MealRecipe {
  name: string;
  ingredients: MealIngredient[];
  instructions: string[];
  nutritionInfo: NutritionInfo;
  benefits: string[];
}

export interface DailyMealPlan {
  breakfast: MealRecipe;
  lunch: MealRecipe;
  dinner: MealRecipe;
  snacks: MealRecipe[];
}

export interface DailyNutritionTarget {
  calories: { min: number; max: number };
  protein: { min: number; max: number };
  carbs: { min: number; max: number };
  fat: { min: number; max: number };
  fiber: { min: number; max: number };
  sugar: { max: number };
}

export interface ConditionFormData {
  age: number;
  weight: number; // in kg
  height: number; // in cm
  gender: "male" | "female" | "other";
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very active";
  allergies: string[];
  additionalNotes: string;
  
  // Condition-specific parameters
  // PCOS specific
  bmi?: number;
  insulinResistance?: "yes" | "no" | "unknown";
  testosterone?: number;
  menstrualCycle?: "regular" | "irregular" | "absent";
  
  // Liver specific
  bilirubin?: number;
  alt?: number;
  ast?: number;
  albumin?: number;
  
  // Heart specific
  cholesterol?: number;
  bloodPressure?: string;
  heartRate?: number;
  triglycerides?: number;
  
  // Kidney specific
  creatinine?: number;
  gfr?: number;
  proteinuria?: number;
  
  // Diabetes specific
  diabetesType?: "type1" | "type2" | "gestational" | "prediabetes";
  fastingBloodSugar?: number;
  hba1c?: number;
  insulinSensitivity?: "high" | "normal" | "low";
}

export interface HealthRecommendation {
  condition: HealthCondition;
  dailyNutritionTargets: DailyNutritionTarget;
  dietaryGuidelines: {
    recommended: string[];
    avoid: string[];
  };
  mealPlan: DailyMealPlan;
}
