export type HealthCondition = 
  | "diabetic" 
  | "thyroid" 
  | "heart" 
  | "pcos" 
  | "kidney" 
  | "liver" 
  | "joint" 
  | "general";

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium?: number;
  potassium?: number;
  calcium?: number;
  iron?: number;
  vitaminD?: number;
  omega3?: number;
  iodine?: number;
  phosphorus?: number;
  selenium?: number;
}

export interface Ingredient {
  name: string;
  amount: string;
  notes?: string;
}

export interface Meal {
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition: NutritionInfo;
  imageUrl?: string;
  prepTime?: string;
  cookTime?: string;
  benefits?: string[];
}

export interface DailyPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snacks: Meal[];
  totalNutrition: NutritionInfo;
}

export interface WeeklyPlan {
  condition: HealthCondition;
  days: DailyPlan[];
  dietaryNotes: string[];
  recommendedSupplements?: string[];
}
