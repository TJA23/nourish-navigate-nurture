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
      omega3: (total.omega3 || 0) + (meal.nutrition.omega3 || 0),
      iodine: (total.iodine || 0) + (meal.nutrition.iodine || 0),
      phosphorus: (total.phosphorus || 0) + (meal.nutrition.phosphorus || 0)
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
  },
  {
    name: "Spiced Lentil and Vegetable Soup",
    description: "Fiber-rich soup with complex carbohydrates for stable blood sugar",
    ingredients: [
      { name: "Red lentils", amount: "3/4 cup" },
      { name: "Carrots, diced", amount: "2 medium" },
      { name: "Celery, diced", amount: "2 stalks" },
      { name: "Onion, diced", amount: "1 medium" },
      { name: "Garlic, minced", amount: "2 cloves" },
      { name: "Vegetable broth, low-sodium", amount: "4 cups" },
      { name: "Cumin", amount: "1 teaspoon" },
      { name: "Turmeric", amount: "1/2 teaspoon" },
      { name: "Coriander", amount: "1/2 teaspoon" },
      { name: "Fresh spinach", amount: "2 cups" },
      { name: "Lemon juice", amount: "1 tablespoon" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery and sauté for 5 minutes.",
      "Add garlic and spices and cook for 1 minute.",
      "Add lentils and vegetable broth and bring to a boil.",
      "Reduce heat and simmer for 20-25 minutes until lentils are tender.",
      "Stir in spinach and lemon juice and cook for 2 more minutes.",
      "Season with salt and pepper to taste."
    ],
    nutrition: {
      calories: 250,
      protein: 12,
      carbs: 35,
      fat: 6,
      fiber: 15,
      sugar: 4,
      iron: 3
    },
    benefits: [
      "Low glycemic index meal for stable blood sugar",
      "High in plant-based protein and fiber",
      "Anti-inflammatory spices benefit overall health"
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
  },
  {
    name: "Mediterranean Chickpea Salad",
    description: "Plant-based protein with heart-healthy olive oil and vegetables",
    ingredients: [
      { name: "Chickpeas, cooked", amount: "1 cup" },
      { name: "Cucumber, diced", amount: "1 cup" },
      { name: "Cherry tomatoes, halved", amount: "1 cup" },
      { name: "Red bell pepper, diced", amount: "1/2 cup" },
      { name: "Red onion, finely diced", amount: "1/4 cup" },
      { name: "Kalamata olives, sliced", amount: "1/4 cup" },
      { name: "Feta cheese, crumbled", amount: "1/4 cup" },
      { name: "Extra virgin olive oil", amount: "2 tablespoons" },
      { name: "Red wine vinegar", amount: "1 tablespoon" },
      { name: "Lemon juice", amount: "1 tablespoon" },
      { name: "Fresh herbs (parsley, mint, oregano)", amount: "1/4 cup" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "In a large bowl, combine chickpeas, cucumber, tomatoes, bell pepper, onion, and olives.",
      "In a small bowl, whisk together olive oil, vinegar, lemon juice, herbs, salt, and pepper.",
      "Pour dressing over the salad and toss to combine.",
      "Sprinkle with feta cheese before serving.",
      "For best flavor, let sit for 30 minutes before serving."
    ],
    nutrition: {
      calories: 380,
      protein: 15,
      carbs: 30,
      fat: 22,
      fiber: 10,
      sugar: 6,
      sodium: 380
    },
    benefits: [
      "Plant sterols in chickpeas help lower cholesterol",
      "Monounsaturated fats from olive oil improve heart health",
      "Low in saturated fat and high in fiber"
    ]
  },
  {
    name: "Oatmeal Berry Breakfast Bars",
    description: "Make-ahead heart-healthy breakfast or snack",
    ingredients: [
      { name: "Rolled oats", amount: "2 cups" },
      { name: "Almond flour", amount: "1/2 cup" },
      { name: "Ground flaxseed", amount: "2 tablespoons" },
      { name: "Cinnamon", amount: "1 teaspoon" },
      { name: "Baking powder", amount: "1/2 teaspoon" },
      { name: "Salt", amount: "1/4 teaspoon" },
      { name: "Unsweetened applesauce", amount: "1/2 cup" },
      { name: "Honey or maple syrup", amount: "1/4 cup" },
      { name: "Almond butter", amount: "1/4 cup" },
      { name: "Vanilla extract", amount: "1 teaspoon" },
      { name: "Mixed berries (fresh or frozen)", amount: "1 1/2 cups" },
      { name: "Chopped walnuts", amount: "1/3 cup" }
    ],
    instructions: [
      "Preheat oven to 350°F (175°C) and line an 8x8-inch baking dish with parchment paper.",
      "In a large bowl, combine oats, almond flour, flaxseed, cinnamon, baking powder, and salt.",
      "In another bowl, mix applesauce, honey/maple syrup, almond butter, and vanilla.",
      "Add wet ingredients to dry ingredients and stir until combined.",
      "Fold in 1 cup of berries and walnuts.",
      "Press mixture into prepared baking dish and top with remaining berries.",
      "Bake for 30-35 minutes until golden and set.",
      "Cool completely before cutting into bars."
    ],
    nutrition: {
      calories: 180,
      protein: 5,
      carbs: 23,
      fat: 8,
      fiber: 5,
      sugar: 7,
      omega3: 0.5
    },
    benefits: [
      "Beta-glucan in oats helps lower cholesterol",
      "Antioxidants from berries support heart health",
      "Plant-based omega-3s from flax and walnuts"
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
  },
  {
    name: "Brazil Nut and Berry Breakfast Bowl",
    description: "Selenium-rich breakfast to support thyroid hormone conversion",
    ingredients: [
      { name: "Greek yogurt, plain", amount: "1 cup" },
      { name: "Mixed berries", amount: "1/2 cup" },
      { name: "Brazil nuts", amount: "2, chopped" },
      { name: "Pumpkin seeds", amount: "1 tablespoon" },
      { name: "Honey", amount: "1 teaspoon" },
      { name: "Cinnamon", amount: "1/4 teaspoon" }
    ],
    instructions: [
      "Place yogurt in a bowl.",
      "Top with berries, chopped Brazil nuts, and pumpkin seeds.",
      "Drizzle with honey and sprinkle with cinnamon."
    ],
    nutrition: {
      calories: 280,
      protein: 20,
      carbs: 22,
      fat: 14,
      fiber: 4,
      sugar: 16,
      selenium: 150
    },
    benefits: [
      "High in selenium from Brazil nuts for thyroid hormone conversion",
      "Zinc from pumpkin seeds supports thyroid function",
      "Protein from Greek yogurt provides amino acids necessary for hormone production"
    ]
  },
  {
    name: "Baked Cod with Roasted Vegetables",
    description: "Iodine and selenium-rich dinner to support thyroid health",
    ingredients: [
      { name: "Cod fillet", amount: "5 oz" },
      { name: "Brussels sprouts, halved", amount: "1 cup" },
      { name: "Sweet potato, cubed", amount: "3/4 cup" },
      { name: "Red bell pepper, sliced", amount: "1/2 cup" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Garlic, minced", amount: "2 cloves" },
      { name: "Lemon, sliced", amount: "1/2" },
      { name: "Fresh thyme", amount: "1 teaspoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss vegetables with half the olive oil, garlic, salt, and pepper.",
      "Spread on a baking sheet and roast for 15 minutes.",
      "Season cod with salt, pepper, and thyme.",
      "Place cod and lemon slices on top of vegetables.",
      "Drizzle with remaining olive oil.",
      "Bake for another 12-15 minutes until fish is cooked through."
    ],
    nutrition: {
      calories: 350,
      protein: 30,
      carbs: 25,
      fat: 12,
      fiber: 6,
      sugar: 5,
      iodine: 120,
      selenium: 55
    },
    benefits: [
      "Rich in iodine from cod for thyroid hormone production",
      "Selenium in fish supports thyroid conversion",
      "Nutrient-dense vegetables provide vitamins and minerals for overall thyroid health"
    ]
  },
  {
    name: "Miso Soup with Seaweed and Tofu",
    description: "Iodine-rich soup that supports thyroid function",
    ingredients: [
      { name: "Dashi stock or vegetable broth", amount: "3 cups" },
      { name: "Miso paste", amount: "2 tablespoons" },
      { name: "Firm tofu, cubed", amount: "4 oz" },
      { name: "Wakame seaweed, dried", amount: "1 tablespoon" },
      { name: "Green onions, sliced", amount: "2" },
      { name: "Shiitake mushrooms, sliced", amount: "1/2 cup" },
      { name: "Ginger, grated", amount: "1 teaspoon" }
    ],
    instructions: [
      "Soak wakame seaweed in cold water for 5 minutes, then drain and chop.",
      "Heat dashi or broth in a pot and bring to a simmer.",
      "Add mushrooms and ginger and simmer for 2 minutes.",
      "Add tofu and seaweed and simmer for another 2 minutes.",
      "Remove from heat and stir in miso paste until dissolved.",
      "Garnish with green onions before serving."
    ],
    nutrition: {
      calories: 180,
      protein: 12,
      carbs: 15,
      fat: 8,
      fiber: 3,
      sugar: 2,
      iodine: 80,
      sodium: 750
    },
    benefits: [
      "Seaweed provides natural iodine for thyroid health",
      "Fermented miso contains probiotics that may improve nutrient absorption",
      "Light, easy-to-digest meal that's gentle on the digestive system"
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
  },
  {
    name: "Mediterranean Chicken and Vegetable Bowl",
    description: "Balanced meal with lean protein and anti-inflammatory ingredients",
    ingredients: [
      { name: "Chicken breast, cooked and sliced", amount: "4 oz" },
      { name: "Quinoa, cooked", amount: "1/2 cup" },
      { name: "Spinach, fresh", amount: "2 cups" },
      { name: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { name: "Cucumber, diced", amount: "1/2 cup" },
      { name: "Red onion, thinly sliced", amount: "2 tablespoons" },
      { name: "Kalamata olives", amount: "6" },
      { name: "Feta cheese, crumbled", amount: "2 tablespoons" },
      { name: "Extra virgin olive oil", amount: "1 tablespoon" },
      { name: "Lemon juice", amount: "1 tablespoon" },
      { name: "Oregano, dried", amount: "1/2 teaspoon" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "In a large bowl, combine spinach, tomatoes, cucumber, and red onion.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Add cooked quinoa and sliced chicken to the vegetables.",
      "Pour dressing over the salad and toss to combine.",
      "Top with olives and feta cheese before serving."
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      carbs: 25,
      fat: 20,
      fiber: 6,
      sugar: 5
    },
    benefits: [
      "Balanced macronutrients help manage insulin levels",
      "Anti-inflammatory Mediterranean ingredients",
      "Lean protein supports hormone production and muscle maintenance",
      "Low-glycemic carbohydrates for sustainable energy"
    ]
  },
  {
    name: "Spiced Salmon with Turmeric Cauliflower Rice",
    description: "Anti-inflammatory dinner rich in omega-3 fatty acids",
    ingredients: [
      { name: "Salmon fillet", amount: "5 oz" },
      { name: "Cauliflower rice", amount: "1 cup" },
      { name: "Turmeric, ground", amount: "1/2 teaspoon" },
      { name: "Cumin, ground", amount: "1/4 teaspoon" },
      { name: "Paprika", amount: "1/2 teaspoon" },
      { name: "Garlic, minced", amount: "2 cloves" },
      { name: "Olive oil", amount: "1 1/2 tablespoons" },
      { name: "Lemon juice", amount: "1 tablespoon" },
      { name: "Fresh cilantro, chopped", amount: "2 tablespoons" },
      { name: "Avocado, sliced", amount: "1/4" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Mix paprika, 1/4 teaspoon turmeric, 1/4 teaspoon salt, and pepper in a small bowl.",
      "Rub salmon with 1/2 tablespoon olive oil and spice mixture.",
      "Place salmon on a baking sheet and bake for 12-15 minutes.",
      "Meanwhile, heat remaining olive oil in a pan over medium heat.",
      "Add garlic and sauté for 30 seconds.",
      "Add cauliflower rice, remaining turmeric, cumin, salt, and pepper.",
      "Cook for 5-7 minutes until cauliflower is tender.",
      "Stir in lemon juice and cilantro.",
      "Serve salmon over cauliflower rice and top with avocado slices."
    ],
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 12,
      fat: 30,
      fiber: 7,
      sugar: 3,
      omega3: 2
    },
    benefits: [
      "Omega-3 fatty acids help reduce inflammation and support hormone balance",
      "Low-carb, anti-inflammatory meal to support insulin sensitivity",
      "Turmeric has potential benefits for reducing PCOS symptoms",
      "Healthy fats from avocado and salmon support hormone production"
    ]
  },
  {
    name: "Cinnamon Almond Butter Energy Bites",
    description: "Low-glycemic snack with blood sugar balancing cinnamon",
    ingredients: [
      { name: "Rolled oats", amount: "1 cup" },
      { name: "Almond butter", amount: "1/2 cup" },
      { name: "Ground flaxseed", amount: "1/4 cup" },
      { name: "Chia seeds", amount: "2 tablespoons" },
      { name: "Cinnamon", amount: "1 teaspoon" },
      { name: "Vanilla extract", amount: "1/2 teaspoon" },
      { name: "Honey", amount: "2 tablespoons" },
      { name: "Dark chocolate chips (70% or higher)", amount: "1/4 cup" }
    ],
    instructions: [
      "In a large bowl, combine all ingredients.",
      "Mix well until thoroughly combined.",
      "Roll into 1-inch balls.",
      "Place on a baking sheet and refrigerate for at least 30 minutes to set.",
      "Store in an airtight container in the refrigerator for up to 1 week."
    ],
    nutrition: {
      calories: 120,
      protein: 4,
      carbs: 10,
      fat: 7,
      fiber: 3,
      sugar: 4
    },
    benefits: [
      "Cinnamon helps improve insulin sensitivity",
      "Balanced snack with protein, healthy fats, and fiber",
      "Chia and flax provide omega-3 fatty acids for hormone balance",
      "Satisfies sweet cravings with minimal impact on blood sugar"
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
  },
  {
    name: "Herb-Roasted Chicken with Rice and Green Beans",
    description: "Kidney-friendly dinner with controlled mineral content",
    ingredients: [
      { name: "Chicken breast", amount: "4 oz" },
      { name: "White rice, cooked", amount: "1/2 cup" },
      { name: "Green beans", amount: "1 cup" },
      { name: "Olive oil", amount: "1 tablespoon" },
      { name: "Dried herbs (thyme, oregano, basil)", amount: "1 teaspoon" },
      { name: "Garlic powder", amount: "1/4 teaspoon" },
      { name: "Lemon juice", amount: "1 teaspoon" },
      { name: "Unsalted butter", amount: "1 teaspoon" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Season chicken with herbs and garlic powder.",
      "Heat olive oil in an oven-safe skillet over medium-high heat.",
      "Sear chicken for 2 minutes per side.",
      "Transfer skillet to oven and bake for 15-20 minutes until chicken is cooked through.",
      "Meanwhile, steam green beans until tender-crisp.",
      "Toss green beans with butter and a squeeze of lemon juice.",
      "Serve chicken with rice and green beans."
    ],
    nutrition: {
      calories: 350,
      protein: 30,
      carbs: 28,
      fat: 12,
      fiber: 3,
      sugar: 2,
      sodium: 75,
      potassium: 300,
      phosphorus: 180
    },
    benefits: [
      "Low in sodium, potassium, and phosphorus",
      "Provides adequate protein for tissue repair without stressing kidneys",
      "Simple carbohydrates are easier for compromised kidneys to process"
    ]
  },
  {
    name: "Apple and Cranberry Salad",
    description: "Kidney-friendly fruit salad with controlled potassium",
    ingredients: [
      { name: "Apple, diced", amount: "1 medium" },
      { name: "Cranberries, dried, unsweetened", amount: "2 tablespoons" },
      { name: "Celery, diced", amount: "1 stalk" },
      { name: "Honey", amount: "1 teaspoon" },
      { name: "Lemon juice", amount: "1 teaspoon" },
      { name: "Cinnamon", amount: "1/4 teaspoon" }
    ],
    instructions: [
      "Combine apple, cranberries, and celery in a bowl.",
      "In a small bowl, mix honey, lemon juice, and cinnamon.",
      "Pour dressing over fruit mixture and toss to coat.",
      "Refrigerate for 30 minutes before serving for best flavor."
    ],
    nutrition: {
      calories: 120,
      protein: 1,
      carbs: 30,
      fat: 0,
      fiber: 5,
      sugar: 22,
      potassium: 150
    },
    benefits: [
      "Lower in potassium than most fruits",
      "Provides antioxidants and fiber",
      "Natural sweetness without added phosphate additives"
    ]
  },
  {
    name: "Simple Egg White Omelet",
    description: "Low-phosphorus, kidney-friendly breakfast",
    ingredients: [
      { name: "Egg whites", amount: "3" },
      { name: "Red bell pepper, diced", amount: "1/4 cup" },
      { name: "Onion, diced", amount: "2 tablespoons" },
      { name: "Fresh herbs (parsley, chives)", amount: "1 tablespoon" },
      { name: "Olive oil", amount: "1 teaspoon" },
      { name: "Black pepper", amount: "To taste" }
    ],
    instructions: [
      "Heat olive oil in a non-stick skillet over medium heat.",
      "Sauté bell pepper and onion until softened, about 3 minutes.",
      "Whisk egg whites until frothy and pour over vegetables.",
      "Cook until edges begin to set, then use a spatula to lift edges and let uncooked egg flow underneath.",
      "When almost set, sprinkle with herbs and fold in half.",
      "Season with black pepper to taste."
    ],
    nutrition: {
      calories: 120,
      protein: 13,
      carbs: 5,
      fat: 5,
      fiber: 1,
      sugar: 3,
      phosphorus: 80,
      sodium: 120,
      potassium: 180
    },
    benefits: [
      "Lower in phosphorus than whole eggs",
      "Provides quality protein with reduced mineral content",
      "No added salt helps control sodium intake"
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
  },
  {
    name: "Mediterranean Chickpea Salad with Herbs",
    description: "Liver-friendly plant-based protein with detoxifying herbs",
    ingredients: [
      { name: "Chickpeas, cooked", amount: "1 cup" },
      { name: "Cucumber, diced", amount: "1/2 cup" },
      { name: "Cherry tomatoes, halved", amount: "1/2 cup" },
      { name: "Red onion, finely diced", amount: "2 tablespoons" },
      { name: "Fresh parsley, chopped", amount: "1/4 cup" },
      { name: "Fresh mint, chopped", amount: "2 tablespoons" },
      { name: "Lemon juice", amount: "1 1/2 tablespoons" },
      { name: "Extra virgin olive oil", amount: "1 tablespoon" },
      { name: "Garlic, minced", amount: "1 clove" },
      { name: "Salt and pepper", amount: "To taste" }
    ],
    instructions: [
      "In a large bowl, combine chickpeas, cucumber, tomatoes, and red onion.",
      "In a small bowl, whisk together lemon juice, olive oil, garlic, salt, and pepper.",
      "Pour dressing over the salad and toss to combine.",
      "Add fresh herbs and gently mix.",
      "Let sit for at least 30 minutes before serving."
    ],
    nutrition: {
      calories: 380,
      protein: 15,
      carbs: 30,
      fat: 22,
      fiber: 10,
      sugar: 6,
      sodium: 380
    },
    benefits: [
      "Plant sterols in chickpeas help lower cholesterol",
      "Monounsaturated fats from olive oil improve heart health",
      "Low in saturated fat and high in fiber"
    ]
  },
  {
    name: "Oatmeal Berry Breakfast Bars",
    description: "Make-ahead liver-friendly breakfast or snack",
    ingredients: [
      { name: "Rolled oats", amount: "2 cups" },
      { name: "Almond flour", amount: "1/2 cup" },
      { name: "Ground flaxseed", amount: "2 tablespoons" },
      { name: "Cinnamon", amount: "1 teaspoon" },
      { name: "Baking powder", amount: "1/2 teaspoon" },
      { name: "Salt", amount: "1/4 teaspoon" },
      { name: "Unsweetened applesauce", amount: "1/2 cup" },
      { name: "Honey or maple syrup", amount: "1/4 cup" },
      { name: "Almond butter", amount: "1/4 cup" },
      { name: "Vanilla extract", amount: "1 teaspoon" },
      { name: "Mixed berries (fresh or frozen)", amount: "1 1/2 cups" },
      { name: "Chopped walnuts", amount: "1/3 cup" }
    ],
    instructions: [
      "Preheat oven to 350°F (175°C) and line an 8x8-inch baking dish with parchment paper.",
      "In a large bowl, combine oats, almond flour, flaxseed, cinnamon, baking powder, and salt.",
      "In another bowl, mix applesauce, honey/maple syrup, almond butter, and vanilla.",
      "Add wet ingredients to dry ingredients and stir until combined.",
      "Fold in 1 cup of berries and walnuts.",
      "Press mixture into prepared baking dish and top with remaining berries.",
      "Bake for 30-35 minutes until golden and set.",
      "Cool completely before cutting into bars."
    ],
    nutrition: {
      calories: 180,
      protein: 5,
      carbs: 23,
      fat: 8,
      fiber: 5,
      sugar: 7,
      omega3: 0.5
    },
    benefits: [
      "Beta-glucan in oats helps lower cholesterol",
      "Antioxidants from berries support heart health",
      "Plant-based omega-3s from flax and walnuts"
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
