
import { HealthCondition, WeeklyPlan, NutritionInfo, DailyPlan, Meal, Ingredient } from "../types/health";

// Helper function to calculate total nutrition for a day
const calculateDailyNutrition = (meals: Meal[]): NutritionInfo => {
  const initial: NutritionInfo = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0
  };

  return meals.reduce((total, meal) => {
    return {
      calories: total.calories + meal.nutrition.calories,
      protein: total.protein + meal.nutrition.protein,
      carbs: total.carbs + meal.nutrition.carbs,
      fat: total.fat + meal.nutrition.fat,
      fiber: total.fiber + meal.nutrition.fiber,
      sugar: total.sugar + meal.nutrition.sugar,
      sodium: (total.sodium || 0) + (meal.nutrition.sodium || 0),
      potassium: (total.potassium || 0) + (meal.nutrition.potassium || 0),
      calcium: (total.calcium || 0) + (meal.nutrition.calcium || 0),
      iron: (total.iron || 0) + (meal.nutrition.iron || 0),
      vitaminD: (total.vitaminD || 0) + (meal.nutrition.vitaminD || 0),
      omega3: (total.omega3 || 0) + (meal.nutrition.omega3 || 0)
    };
  }, initial);
};

// Diabetic meal plan
const diabeticMeals: Meal[] = [
  {
    name: "Berry Greek Yogurt Parfait",
    description: "Low-glycemic breakfast with protein-rich Greek yogurt and berries",
    ingredients: [
      { name: "Greek yogurt (plain, unsweetened)", amount: "1 cup" },
      { name: "Mixed berries (fresh or frozen, unsweetened)", amount: "1/2 cup" },
      { name: "Chia seeds", amount: "1 tablespoon" },
      { name: "Almonds, sliced", amount: "1 tablespoon" },
      { name: "Cinnamon", amount: "1/4 teaspoon" }
    ],
    instructions: [
      "In a bowl or glass, layer half of the yogurt.",
      "Add half of the berries.",
      "Sprinkle with half of the chia seeds and almonds.",
      "Repeat layers.",
      "Dust with cinnamon on top."
    ],
    nutrition: {
      calories: 245,
      protein: 21,
      carbs: 18,
      fat: 10,
      fiber: 6,
      sugar: 8
    },
    benefits: [
      "Low glycemic index to prevent blood sugar spikes",
      "High in protein for satiety",
      "Rich in antioxidants from berries",
      "Contains healthy fats from nuts and seeds"
    ]
  },
  {
    name: "Mediterranean Lentil Salad",
    description: "Fiber-rich lentil salad with vegetables and olive oil dressing",
    ingredients: [
      { name: "Cooked lentils", amount: "3/4 cup" },
      { name: "Cucumber, diced", amount: "1/2 cup" },
      { name: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { name: "Bell pepper, diced", amount: "1/4 cup" },
      { name: "Red onion, finely chopped", amount: "2 tablespoons" },
      { name: "Feta cheese, crumbled", amount: "2 tablespoons" },
      { name: "Extra virgin olive oil", amount: "1 tablespoon" },
      { name: "Lemon juice", amount: "1 teaspoon" },
      { name: "Fresh herbs (parsley, mint)", amount: "1 tablespoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Combine lentils, cucumber, tomatoes, bell pepper, and red onion in a bowl.",
      "Whisk together olive oil, lemon juice, herbs, salt, and pepper in a small bowl.",
      "Pour dressing over the lentil mixture and toss to combine.",
      "Sprinkle with feta cheese before serving."
    ],
    nutrition: {
      calories: 320,
      protein: 15,
      carbs: 35,
      fat: 12,
      fiber: 12,
      sugar: 5,
      iron: 6
    },
    benefits: [
      "Complex carbs from lentils release glucose slowly",
      "High fiber content supports digestive health",
      "Healthy fats from olive oil improve insulin sensitivity"
    ]
  },
  {
    name: "Herb-Baked Fish with Roasted Vegetables",
    description: "Lean protein with non-starchy vegetables for a balanced dinner",
    ingredients: [
      { name: "White fish fillet (cod, tilapia, etc.)", amount: "4 oz" },
      { name: "Zucchini, sliced", amount: "1 cup" },
      { name: "Bell peppers, sliced", amount: "1 cup" },
      { name: "Cherry tomatoes", amount: "1/2 cup" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Lemon juice", amount: "1 tablespoon" },
      { name: "Garlic, minced", amount: "1 clove" },
      { name: "Fresh herbs (dill, parsley)", amount: "1 tablespoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss vegetables with half the olive oil, salt, and pepper.",
      "Spread vegetables on a baking sheet and roast for 15 minutes.",
      "Mix remaining olive oil with lemon juice, garlic, and herbs.",
      "Place fish on top of vegetables, drizzle with herb mixture.",
      "Bake for another 10-12 minutes until fish is cooked through."
    ],
    nutrition: {
      calories: 275,
      protein: 28,
      carbs: 12,
      fat: 14,
      fiber: 4,
      sugar: 6,
      omega3: 0.8
    },
    benefits: [
      "Lean protein helps maintain stable blood sugar",
      "Non-starchy vegetables provide nutrients with minimal carbs",
      "Healthy fats support heart health"
    ]
  }
];

// Heart-healthy meal plan
const heartHealthyMeals: Meal[] = [
  {
    name: "Overnight Oats with Berries and Nuts",
    description: "Heart-healthy breakfast rich in soluble fiber and omega-3 fatty acids",
    ingredients: [
      { name: "Rolled oats", amount: "1/2 cup" },
      { name: "Unsweetened almond milk", amount: "2/3 cup" },
      { name: "Chia seeds", amount: "1 tablespoon" },
      { name: "Ground flaxseed", amount: "1 tablespoon" },
      { name: "Mixed berries", amount: "1/2 cup" },
      { name: "Walnuts, chopped", amount: "1 tablespoon" },
      { name: "Cinnamon", amount: "1/4 teaspoon" }
    ],
    instructions: [
      "Combine oats, almond milk, chia seeds, and flaxseed in a jar or container.",
      "Stir well and refrigerate overnight.",
      "In the morning, top with berries, walnuts, and cinnamon."
    ],
    nutrition: {
      calories: 320,
      protein: 10,
      carbs: 45,
      fat: 14,
      fiber: 11,
      sugar: 6,
      omega3: 2.5
    },
    benefits: [
      "Soluble fiber from oats helps lower cholesterol",
      "Omega-3 fatty acids from walnuts and flax support heart health",
      "Antioxidants from berries reduce inflammation"
    ]
  },
  {
    name: "Salmon and Quinoa Bowl",
    description: "Omega-3 rich meal with whole grains and vegetables",
    ingredients: [
      { name: "Salmon fillet", amount: "4 oz" },
      { name: "Quinoa, cooked", amount: "1/2 cup" },
      { name: "Spinach, fresh", amount: "1 cup" },
      { name: "Avocado, sliced", amount: "1/4" },
      { name: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Lemon juice", amount: "1 teaspoon" },
      { name: "Dill, fresh", amount: "1 teaspoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Season salmon with salt, pepper, and dill.",
      "Grill or bake salmon until cooked through (about 12-15 minutes at 375°F).",
      "Toss quinoa with spinach, tomatoes, and lemon juice.",
      "Place salmon over quinoa mixture and top with avocado slices.",
      "Drizzle with olive oil before serving."
    ],
    nutrition: {
      calories: 425,
      protein: 30,
      carbs: 25,
      fat: 22,
      fiber: 7,
      sugar: 3,
      omega3: 1.8,
      potassium: 800
    },
    benefits: [
      "Omega-3 fatty acids from salmon reduce inflammation and triglycerides",
      "Monounsaturated fats from avocado support healthy cholesterol levels",
      "Quinoa provides heart-healthy whole grains and protein"
    ]
  }
];

// Thyroid meal plan
const thyroidMeals: Meal[] = [
  {
    name: "Seaweed and Egg Breakfast Bowl",
    description: "Iodine-rich breakfast to support thyroid function",
    ingredients: [
      { name: "Eggs", amount: "2 large" },
      { name: "Dried seaweed (nori, kelp)", amount: "1 sheet, crumbled" },
      { name: "Spinach, fresh", amount: "1 cup" },
      { name: "Avocado, sliced", amount: "1/4" },
      { name: "Extra virgin olive oil", amount: "1 teaspoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Sauté spinach in olive oil until wilted.",
      "Scramble eggs and add to the spinach.",
      "Top with crumbled seaweed and avocado slices.",
      "Season with salt and pepper to taste."
    ],
    nutrition: {
      calories: 290,
      protein: 15,
      carbs: 9,
      fat: 22,
      fiber: 5,
      sugar: 1,
      iodine: 150
    },
    benefits: [
      "Rich in iodine from seaweed to support thyroid hormone production",
      "Selenium from eggs aids thyroid hormone metabolism",
      "Healthy fats support hormone production and nutrient absorption"
    ]
  }
];

// PCOS meal plan
const pcosMeals: Meal[] = [
  {
    name: "Anti-Inflammatory Berry Smoothie",
    description: "Low-glycemic breakfast with anti-inflammatory properties",
    ingredients: [
      { name: "Unsweetened almond milk", amount: "1 cup" },
      { name: "Mixed berries (frozen)", amount: "1/2 cup" },
      { name: "Spinach", amount: "1 cup" },
      { name: "Chia seeds", amount: "1 tablespoon" },
      { name: "Protein powder (plant-based)", amount: "1 scoop" },
      { name: "Cinnamon", amount: "1/4 teaspoon" },
      { name: "Ground flaxseed", amount: "1 tablespoon" }
    ],
    instructions: [
      "Combine all ingredients in a blender.",
      "Blend until smooth and creamy.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 280,
      protein: 20,
      carbs: 22,
      fat: 12,
      fiber: 10,
      sugar: 8
    },
    benefits: [
      "Low glycemic load helps manage insulin resistance",
      "Anti-inflammatory ingredients reduce PCOS symptoms",
      "High fiber content supports hormone balance",
      "Good protein content helps maintain lean muscle mass"
    ]
  }
];

// Kidney-friendly meal plan
const kidneyMeals: Meal[] = [
  {
    name: "Low-Sodium Vegetable Stir Fry",
    description: "Kidney-friendly meal with controlled sodium, phosphorus, and potassium",
    ingredients: [
      { name: "Rice, white, cooked", amount: "1/2 cup" },
      { name: "Bell peppers, sliced", amount: "1/2 cup" },
      { name: "Snow peas", amount: "1/2 cup" },
      { name: "Carrots, sliced", amount: "1/4 cup" },
      { name: "Onion, sliced", amount: "1/4 cup" },
      { name: "Chicken breast, sliced", amount: "3 oz" },
      { name: "Garlic, minced", amount: "1 clove" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Low-sodium soy sauce", amount: "1 teaspoon" },
      { name: "Fresh ginger, grated", amount: "1/2 teaspoon" }
    ],
    instructions: [
      "Heat oil in a wok or large skillet over medium-high heat.",
      "Add garlic and ginger and sauté for 30 seconds.",
      "Add chicken and cook until no longer pink, about 5 minutes.",
      "Add vegetables and stir-fry until crisp-tender, about 5 minutes.",
      "Add low-sodium soy sauce and toss to combine.",
      "Serve over cooked rice."
    ],
    nutrition: {
      calories: 310,
      protein: 25,
      carbs: 30,
      fat: 10,
      fiber: 3,
      sugar: 5,
      sodium: 180,
      potassium: 350,
      phosphorus: 200
    },
    benefits: [
      "Low sodium content reduces strain on kidneys",
      "Controlled potassium and phosphorus levels",
      "Lean protein supports overall health without taxing kidneys"
    ]
  }
];

// Liver-friendly meal plan
const liverMeals: Meal[] = [
  {
    name: "Turmeric Lentil Soup",
    description: "Detoxifying soup with anti-inflammatory properties",
    ingredients: [
      { name: "Red lentils, dry", amount: "1/2 cup" },
      { name: "Carrots, diced", amount: "1/2 cup" },
      { name: "Onion, diced", amount: "1/4 cup" },
      { name: "Celery, diced", amount: "1/4 cup" },
      { name: "Garlic, minced", amount: "2 cloves" },
      { name: "Turmeric, ground", amount: "1 teaspoon" },
      { name: "Cumin, ground", amount: "1/2 teaspoon" },
      { name: "Vegetable broth, low-sodium", amount: "2 cups" },
      { name: "Lemon juice", amount: "1 tablespoon" },
      { name: "Fresh cilantro, chopped", amount: "2 tablespoons" },
      { name: "Olive oil", amount: "1 tablespoon" }
    ],
    instructions: [
      "Heat olive oil in a pot over medium heat.",
      "Add onion, carrot, and celery and sauté for 5 minutes.",
      "Add garlic, turmeric, and cumin and sauté for 1 minute.",
      "Add lentils and vegetable broth, bring to a boil.",
      "Reduce heat and simmer for 20-25 minutes until lentils are tender.",
      "Stir in lemon juice and top with fresh cilantro before serving."
    ],
    nutrition: {
      calories: 280,
      protein: 14,
      carbs: 40,
      fat: 8,
      fiber: 16,
      sugar: 6,
      sodium: 150
    },
    benefits: [
      "Turmeric has anti-inflammatory and liver-protective effects",
      "High fiber content supports detoxification",
      "Low in fat to reduce liver strain",
      "Rich in antioxidants to combat oxidative stress"
    ]
  }
];

// Joint-friendly meal plan
const jointMeals: Meal[] = [
  {
    name: "Anti-Inflammatory Salmon and Sweet Potato Bowl",
    description: "Omega-3 rich meal with anti-inflammatory ingredients",
    ingredients: [
      { name: "Salmon fillet", amount: "4 oz" },
      { name: "Sweet potato, cubed", amount: "1/2 cup" },
      { name: "Broccoli florets", amount: "1 cup" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Turmeric, ground", amount: "1/2 teaspoon" },
      { name: "Ginger, ground", amount: "1/4 teaspoon" },
      { name: "Black pepper", amount: "1/4 teaspoon" },
      { name: "Garlic, minced", amount: "1 clove" },
      { name: "Lemon juice", amount: "1 teaspoon" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss sweet potato with 1/2 tablespoon olive oil, turmeric, and salt.",
      "Roast for 20 minutes, then add broccoli and roast for 10 more minutes.",
      "Meanwhile, season salmon with garlic, ginger, and black pepper.",
      "Heat remaining oil in a skillet and cook salmon for 4-5 minutes per side.",
      "Combine roasted vegetables and salmon in a bowl, drizzle with lemon juice."
    ],
    nutrition: {
      calories: 350,
      protein: 28,
      carbs: 25,
      fat: 16,
      fiber: 5,
      sugar: 6,
      omega3: 2.2
    },
    benefits: [
      "Omega-3 fatty acids from salmon reduce joint inflammation",
      "Turmeric and ginger have natural anti-inflammatory properties",
      "Sweet potatoes provide antioxidants to combat oxidative stress",
      "Low in processed ingredients that may trigger inflammation"
    ]
  }
];

// General fitness meal plan
const generalFitnessMeals: Meal[] = [
  {
    name: "Protein-Packed Breakfast Bowl",
    description: "Balanced breakfast with protein, healthy fats, and complex carbs",
    ingredients: [
      { name: "Eggs", amount: "2 large" },
      { name: "Quinoa, cooked", amount: "1/3 cup" },
      { name: "Avocado, sliced", amount: "1/4" },
      { name: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { name: "Baby spinach", amount: "1 cup" },
      { name: "Olive oil", amount: "1 teaspoon" },
      { name: "Salt and pepper", amount: "To taste" },
      { name: "Hot sauce (optional)", amount: "To taste" }
    ],
    instructions: [
      "Heat olive oil in a pan over medium heat.",
      "Add spinach and sauté until wilted, about 1 minute.",
      "Push spinach to the side and add eggs to the pan.",
      "Cook eggs to your preference (scrambled or fried).",
      "In a bowl, layer quinoa, spinach, eggs, tomatoes, and avocado.",
      "Season with salt, pepper, and hot sauce if desired."
    ],
    nutrition: {
      calories: 340,
      protein: 18,
      carbs: 25,
      fat: 20,
      fiber: 8,
      sugar: 3
    },
    benefits: [
      "Balanced macronutrients provide sustained energy",
      "Protein supports muscle recovery and growth",
      "Healthy fats and fiber promote satiety",
      "Rich in micronutrients for overall health"
    ]
  },
  {
    name: "Grilled Chicken and Roasted Vegetable Bowl",
    description: "High-protein meal with complex carbs for energy and recovery",
    ingredients: [
      { name: "Chicken breast", amount: "4 oz" },
      { name: "Sweet potato, cubed", amount: "1/2 cup" },
      { name: "Broccoli florets", amount: "1 cup" },
      { name: "Bell pepper, sliced", amount: "1/2 cup" },
      { name: "Brown rice, cooked", amount: "1/2 cup" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Lemon juice", amount: "1 tablespoon" },
      { name: "Garlic powder", amount: "1/2 teaspoon" },
      { name: "Paprika", amount: "1/2 teaspoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss sweet potato, broccoli, and bell pepper with half the olive oil, salt, and pepper.",
      "Roast vegetables for 25-30 minutes, stirring halfway through.",
      "Season chicken with garlic powder, paprika, salt, and pepper.",
      "Grill or pan-cook chicken for 6-7 minutes per side until cooked through.",
      "Combine brown rice, roasted vegetables, and sliced chicken in a bowl.",
      "Whisk together remaining olive oil and lemon juice, then drizzle over bowl."
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      carbs: 45,
      fat: 12,
      fiber: 8,
      sugar: 6
    },
    benefits: [
      "High in lean protein for muscle repair and growth",
      "Complex carbs provide energy for workouts and recovery",
      "Rich in vitamins and minerals to support overall health",
      "Balanced meal to support fitness goals"
    ]
  }
];

// Create daily plans for each condition
const createDailyPlan = (condition: HealthCondition): DailyPlan => {
  let meals: Meal[] = [];
  
  // Select appropriate meals based on condition
  switch (condition) {
    case "diabetic":
      meals = diabeticMeals;
      break;
    case "heart":
      meals = heartHealthyMeals;
      break;
    case "thyroid":
      meals = thyroidMeals;
      break;
    case "pcos":
      meals = pcosMeals;
      break;
    case "kidney":
      meals = kidneyMeals;
      break;
    case "liver":
      meals = liverMeals;
      break;
    case "joint":
      meals = jointMeals;
      break;
    case "general":
    default:
      meals = generalFitnessMeals;
      break;
  }
  
  // For this example, just use the first meal as breakfast, second as lunch, etc.
  // In a real app, you would have more variety and randomization
  return {
    breakfast: meals[0] || generalFitnessMeals[0],
    lunch: meals[1] || generalFitnessMeals[0],
    dinner: meals[0] || generalFitnessMeals[1], // Reuse first meal if needed
    snacks: [generalFitnessMeals[0]], // Simple snack
    totalNutrition: calculateDailyNutrition([
      meals[0] || generalFitnessMeals[0], 
      meals[1] || generalFitnessMeals[0], 
      meals[0] || generalFitnessMeals[1],
      generalFitnessMeals[0]
    ])
  };
};

// Create a week's worth of meal plans for each condition
const createWeeklyPlan = (condition: HealthCondition): WeeklyPlan => {
  const days: DailyPlan[] = [];
  
  // Create 7 days of meals
  for (let i = 0; i < 7; i++) {
    days.push(createDailyPlan(condition));
  }
  
  // Dietary notes based on condition
  const dietaryNotes: Record<HealthCondition, string[]> = {
    diabetic: [
      "Focus on low glycemic index foods to avoid blood sugar spikes",
      "Include protein and healthy fats with each meal to slow carbohydrate absorption",
      "Space meals evenly throughout the day to maintain stable blood sugar",
      "Limit added sugars and refined carbohydrates",
      "Aim for 25-30g of fiber daily from whole foods"
    ],
    heart: [
      "Limit sodium to less than 2,300mg per day",
      "Focus on unsaturated fats from sources like olive oil, avocados, and fatty fish",
      "Minimize saturated and trans fats",
      "Include soluble fiber from oats, beans, and fruits",
      "Aim for at least two servings of fatty fish weekly for omega-3 fatty acids"
    ],
    thyroid: [
      "Include iodine-rich foods like seaweed, fish, and dairy",
      "Consume selenium-rich foods like Brazil nuts and eggs",
      "Limit goitrogenic foods (raw cruciferous vegetables) if thyroid function is low",
      "Space calcium supplements and thyroid medication by 4 hours",
      "Stay consistent with meal timing to support medication effectiveness"
    ],
    pcos: [
      "Focus on anti-inflammatory foods",
      "Maintain low glycemic load to improve insulin sensitivity",
      "Include healthy fats and protein with each meal",
      "Limit processed foods and added sugars",
      "Consider supplements like inositol, omega-3s, and vitamin D (with doctor's approval)"
    ],
    kidney: [
      "Limit phosphorus, potassium, and sodium based on kidney function",
      "Adjust protein intake according to kidney function and doctor's advice",
      "Stay well-hydrated unless fluid restrictions are in place",
      "Avoid processed foods high in phosphate additives",
      "Work with a renal dietitian for personalized recommendations"
    ],
    liver: [
      "Limit saturated fats and avoid fried foods",
      "Choose complex carbohydrates over simple sugars",
      "Eat small, frequent meals throughout the day",
      "Include foods high in antioxidants and fiber",
      "Avoid alcohol and limit high-sodium foods"
    ],
    joint: [
      "Focus on anti-inflammatory foods rich in omega-3 fatty acids",
      "Include sources of anthocyanins (berries, cherries)",
      "Consume adequate vitamin D and calcium for bone health",
      "Include turmeric and ginger regularly",
      "Limit added sugars, refined carbohydrates, and saturated fats"
    ],
    general: [
      "Balance macronutrients (protein, carbs, fats) at each meal",
      "Stay hydrated throughout the day",
      "Time protein intake around workouts for optimal recovery",
      "Include a variety of colorful fruits and vegetables",
      "Choose whole food sources over supplements when possible"
    ]
  };
  
  return {
    condition,
    days,
    dietaryNotes: dietaryNotes[condition]
  };
};

// Export all condition meal plans
export const healthMealPlans: Record<HealthCondition, WeeklyPlan> = {
  diabetic: createWeeklyPlan("diabetic"),
  thyroid: createWeeklyPlan("thyroid"),
  heart: createWeeklyPlan("heart"),
  pcos: createWeeklyPlan("pcos"),
  kidney: createWeeklyPlan("kidney"),
  liver: createWeeklyPlan("liver"),
  joint: createWeeklyPlan("joint"),
  general: createWeeklyPlan("general")
};

// Helper function to get recommendations for a specific condition
export const getMealPlanForCondition = (condition: HealthCondition): WeeklyPlan => {
  return healthMealPlans[condition] || healthMealPlans.general;
};
