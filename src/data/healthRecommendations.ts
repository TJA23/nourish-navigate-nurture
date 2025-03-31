import { HealthCondition, HealthRecommendation } from "@/types/health";

export const getHealthRecommendations = (
  condition: string,
  age: number,
  weight: number,
  height: number,
  gender: string,
  activityLevel: string
): HealthRecommendation => {
  // Calculate BMI
  const bmi = weight / ((height / 100) * (height / 100));
  
  // Calculate base calorie needs using Harris-Benedict Equation
  let bmr = 0;
  if (gender === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
  
  // Activity multiplier
  let activityMultiplier = 1.2; // Sedentary
  switch (activityLevel) {
    case "light":
      activityMultiplier = 1.375;
      break;
    case "moderate":
      activityMultiplier = 1.55;
      break;
    case "active":
      activityMultiplier = 1.725;
      break;
    case "very active":
      activityMultiplier = 1.9;
      break;
  }
  
  // Calculate daily calorie needs
  const dailyCalories = Math.round(bmr * activityMultiplier);
  
  // Adjust calories based on condition
  let calorieAdjustment = 0;
  switch (condition) {
    case "heart disease":
      calorieAdjustment = -200;
      break;
    case "diabetes":
      calorieAdjustment = -150;
      break;
    case "kidney disease":
      calorieAdjustment = -300;
      break;
    case "liver disease":
      calorieAdjustment = -250;
      break;
    case "pcos":
      calorieAdjustment = -200;
      break;
    case "vegan":
      calorieAdjustment = -50; // Slight adjustment for plant-based diet
      break;
    case "non-vegetarian":
      calorieAdjustment = 0; // No specific adjustment for non-vegetarian diet
      break;
  }
  
  const adjustedCalories = dailyCalories + calorieAdjustment;
  
  // Calculate macronutrient ranges
  let proteinPercent = 0.2; // 20% of calories from protein
  let carbPercent = 0.5; // 50% of calories from carbs
  let fatPercent = 0.3; // 30% of calories from fat
  
  // Adjust macronutrient percentages based on condition
  switch (condition) {
    case "heart disease":
      fatPercent = 0.25;
      carbPercent = 0.55;
      proteinPercent = 0.2;
      break;
    case "diabetes":
      carbPercent = 0.4;
      proteinPercent = 0.3;
      fatPercent = 0.3;
      break;
    case "kidney disease":
      proteinPercent = 0.15;
      carbPercent = 0.55;
      fatPercent = 0.3;
      break;
    case "liver disease":
      proteinPercent = 0.15;
      fatPercent = 0.25;
      carbPercent = 0.6;
      break;
    case "pcos":
      carbPercent = 0.4;
      proteinPercent = 0.3;
      fatPercent = 0.3;
      break;
    case "vegan":
      proteinPercent = 0.15; // Lower protein percentage for plant-based diet
      carbPercent = 0.6; // Higher carbs from plant sources
      fatPercent = 0.25; // Moderate healthy fats
      break;
    case "non-vegetarian":
      proteinPercent = 0.25; // Higher protein from animal sources
      carbPercent = 0.45; // Moderate carbs
      fatPercent = 0.3; // Standard fat percentage
      break;
  }
  
  // Calculate grams of each macronutrient
  const proteinCals = adjustedCalories * proteinPercent;
  const carbCals = adjustedCalories * carbPercent;
  const fatCals = adjustedCalories * fatPercent;
  
  const proteinGrams = Math.round(proteinCals / 4); // 4 calories per gram of protein
  const carbGrams = Math.round(carbCals / 4); // 4 calories per gram of carbs
  const fatGrams = Math.round(fatCals / 9); // 9 calories per gram of fat
  
  // Calculate fiber based on calories (general recommendation is 14g per 1000 calories)
  const fiberGrams = Math.round(adjustedCalories / 1000 * 14);

  // Add vegan meal plan
  if (condition === "vegan") {
    return {
      condition: "vegan" as HealthCondition,
      dailyNutritionTargets: {
        calories: { min: adjustedCalories - 100, max: adjustedCalories + 100 },
        protein: { min: proteinGrams - 5, max: proteinGrams + 5 },
        carbs: { min: carbGrams - 15, max: carbGrams + 15 },
        fat: { min: fatGrams - 5, max: fatGrams + 5 },
        fiber: { min: fiberGrams + 5, max: fiberGrams + 15 }, // Higher fiber for vegan diet
        sugar: { max: 30 }
      },
      dietaryGuidelines: {
        recommended: [
          "Varied legumes (beans, lentils, chickpeas)",
          "Plant proteins (tofu, tempeh, seitan)",
          "Whole grains (quinoa, brown rice, oats)",
          "Nuts and seeds (especially flaxseeds and walnuts for omega-3)",
          "Nutritional yeast (B12 fortified)",
          "Fortified plant milks",
          "Variety of fruits and vegetables"
        ],
        avoid: [
          "All animal products (meat, fish, dairy, eggs, honey)",
          "Foods with hidden animal ingredients",
          "Excessive processed vegan foods",
          "Refined sugars and flours",
          "High-sodium processed foods",
          "Alcohol in excess",
          "Excessive caffeine"
        ]
      },
      mealPlan: {
        breakfast: {
          name: "Protein-Packed Tofu Scramble",
          ingredients: [
            { name: "firm tofu", amount: "150g" },
            { name: "nutritional yeast", amount: "2 tbsp" },
            { name: "bell pepper", amount: "1/2, diced" },
            { name: "spinach", amount: "1 cup, fresh" },
            { name: "turmeric", amount: "1/4 tsp" },
            { name: "garlic powder", amount: "1/4 tsp" },
            { name: "black salt (kala namak)", amount: "a pinch" },
            { name: "whole grain toast", amount: "1 slice" },
            { name: "avocado", amount: "1/4" }
          ],
          instructions: [
            "Drain and crumble tofu in a bowl",
            "Heat a non-stick pan and add tofu, turmeric, garlic powder, and black salt",
            "Cook for 3-4 minutes, then add bell pepper and spinach",
            "Stir in nutritional yeast and cook until vegetables are tender",
            "Serve with whole grain toast and sliced avocado"
          ],
          nutritionInfo: {
            calories: 320,
            protein: 20,
            carbs: 30,
            fat: 15,
            fiber: 8,
            sugar: 4
          },
          benefits: [
            "Complete plant protein from tofu",
            "B12 from nutritional yeast",
            "Anti-inflammatory properties from turmeric",
            "High in iron and calcium from tofu and spinach",
            "Healthy fats from avocado"
          ]
        },
        lunch: {
          name: "Buddha Bowl with Tahini Dressing",
          ingredients: [
            { name: "quinoa", amount: "1/2 cup, cooked" },
            { name: "chickpeas", amount: "1/2 cup, cooked" },
            { name: "sweet potato", amount: "1/2 cup, roasted" },
            { name: "kale", amount: "1 cup, chopped" },
            { name: "red cabbage", amount: "1/4 cup, shredded" },
            { name: "carrot", amount: "1/2, grated" },
            { name: "avocado", amount: "1/4" },
            { name: "tahini", amount: "1 tbsp" },
            { name: "lemon juice", amount: "1 tsp" },
            { name: "maple syrup", amount: "1/2 tsp" },
            { name: "water", amount: "1 tbsp" },
            { name: "pumpkin seeds", amount: "1 tbsp" }
          ],
          instructions: [
            "Arrange quinoa, chickpeas, sweet potato, kale, cabbage, and carrot in a bowl",
            "Mix tahini, lemon juice, maple syrup, and water to make dressing",
            "Drizzle dressing over the bowl",
            "Top with avocado slices and pumpkin seeds"
          ],
          nutritionInfo: {
            calories: 450,
            protein: 16,
            carbs: 60,
            fat: 18,
            fiber: 15,
            sugar: 8
          },
          benefits: [
            "Complete protein from quinoa and chickpeas combination",
            "Rich in iron, calcium, and zinc from leafy greens",
            "High fiber content supports digestive health",
            "Healthy fats from avocado and tahini",
            "Wide spectrum of antioxidants from colorful vegetables"
          ]
        },
        dinner: {
          name: "Lentil and Vegetable Curry with Brown Rice",
          ingredients: [
            { name: "red lentils", amount: "1/2 cup, dry" },
            { name: "brown rice", amount: "1/2 cup, cooked" },
            { name: "onion", amount: "1/2, diced" },
            { name: "garlic", amount: "2 cloves, minced" },
            { name: "ginger", amount: "1 tsp, minced" },
            { name: "tomatoes", amount: "1 cup, diced" },
            { name: "coconut milk", amount: "1/4 cup" },
            { name: "curry powder", amount: "1 tsp" },
            { name: "turmeric", amount: "1/2 tsp" },
            { name: "cumin", amount: "1/2 tsp" },
            { name: "spinach", amount: "1 cup, fresh" },
            { name: "cilantro", amount: "for garnish" }
          ],
          instructions: [
            "Rinse lentils and cook in 1.5 cups water until tender (about 15-20 minutes)",
            "In a separate pan, sauté onion, garlic, and ginger until fragrant",
            "Add tomatoes, spices, and cook for 2-3 minutes",
            "Add cooked lentils and coconut milk, simmer for 5 minutes",
            "Stir in spinach until wilted",
            "Serve over brown rice and garnish with cilantro"
          ],
          nutritionInfo: {
            calories: 420,
            protein: 18,
            carbs: 70,
            fat: 10,
            fiber: 16,
            sugar: 6
          },
          benefits: [
            "High in plant protein from lentils",
            "Rich in iron and B vitamins",
            "Anti-inflammatory properties from turmeric and ginger",
            "Complete meal with protein, complex carbs, and healthy fats",
            "High fiber content for digestive health"
          ]
        },
        snacks: [
          {
            name: "Chia Seed Pudding",
            ingredients: [
              { name: "chia seeds", amount: "2 tbsp" },
              { name: "plant milk", amount: "1/2 cup" },
              { name: "maple syrup", amount: "1 tsp" },
              { name: "berries", amount: "1/4 cup" }
            ],
            instructions: [
              "Mix chia seeds, plant milk, and maple syrup",
              "Refrigerate for at least 2 hours or overnight",
              "Top with fresh berries before eating"
            ],
            nutritionInfo: {
              calories: 150,
              protein: 5,
              carbs: 18,
              fat: 7,
              fiber: 10,
              sugar: 6
            },
            benefits: [
              "Rich in omega-3 fatty acids",
              "High in fiber and protein",
              "Provides sustained energy",
              "Antioxidants from berries"
            ]
          },
          {
            name: "Trail Mix",
            ingredients: [
              { name: "almonds", amount: "10" },
              { name: "walnuts", amount: "5 halves" },
              { name: "pumpkin seeds", amount: "1 tbsp" },
              { name: "dried mulberries", amount: "1 tbsp" },
              { name: "dark chocolate chips", amount: "1 tsp" }
            ],
            instructions: [
              "Mix all ingredients together in a small container"
            ],
            nutritionInfo: {
              calories: 180,
              protein: 6,
              carbs: 10,
              fat: 14,
              fiber: 4,
              sugar: 5
            },
            benefits: [
              "Rich in plant proteins",
              "Healthy fats from nuts and seeds",
              "Contains essential minerals like zinc and magnesium",
              "Natural energy boost from complex carbs"
            ]
          }
        ]
      }
    };
  }
  
  // Add non-vegetarian meal plan
  if (condition === "non-vegetarian") {
    return {
      condition: "non-vegetarian" as HealthCondition,
      dailyNutritionTargets: {
        calories: { min: adjustedCalories - 100, max: adjustedCalories + 100 },
        protein: { min: proteinGrams - 5, max: proteinGrams + 10 },
        carbs: { min: carbGrams - 15, max: carbGrams + 5 },
        fat: { min: fatGrams - 5, max: fatGrams + 5 },
        fiber: { min: fiberGrams - 2, max: fiberGrams + 5 },
        sugar: { max: 30 }
      },
      dietaryGuidelines: {
        recommended: [
          "Lean proteins (chicken breast, turkey, fish)",
          "Eggs and low-fat dairy",
          "Whole grains (brown rice, quinoa, whole wheat)",
          "Plenty of fruits and vegetables",
          "Healthy fats (olive oil, avocado, nuts)",
          "Fatty fish rich in omega-3s (salmon, mackerel)",
          "Fermented foods (yogurt, kefir)"
        ],
        avoid: [
          "Processed meats (bacon, sausage, deli meats)",
          "Excessive red meat",
          "Fried foods",
          "Refined carbohydrates",
          "Added sugars",
          "Excessive sodium",
          "Trans fats"
        ]
      },
      mealPlan: {
        breakfast: {
          name: "Greek Yogurt Protein Bowl",
          ingredients: [
            { name: "Greek yogurt", amount: "1 cup" },
            { name: "mixed berries", amount: "1/2 cup" },
            { name: "almonds", amount: "1 tbsp, sliced" },
            { name: "pumpkin seeds", amount: "1 tsp" },
            { name: "honey", amount: "1 tsp" },
            { name: "cinnamon", amount: "a pinch" }
          ],
          instructions: [
            "Add Greek yogurt to a bowl",
            "Top with berries, almonds, and pumpkin seeds",
            "Drizzle with honey and sprinkle with cinnamon"
          ],
          nutritionInfo: {
            calories: 280,
            protein: 25,
            carbs: 26,
            fat: 10,
            fiber: 5,
            sugar: 18
          },
          benefits: [
            "High in protein for muscle maintenance",
            "Probiotics from yogurt support gut health",
            "Antioxidants from berries",
            "Healthy fats from nuts and seeds",
            "Calcium for bone health"
          ]
        },
        lunch: {
          name: "Grilled Chicken Salad with Quinoa",
          ingredients: [
            { name: "chicken breast", amount: "4 oz, grilled" },
            { name: "quinoa", amount: "1/2 cup, cooked" },
            { name: "mixed greens", amount: "2 cups" },
            { name: "cherry tomatoes", amount: "1/2 cup, halved" },
            { name: "cucumber", amount: "1/2 cup, diced" },
            { name: "red onion", amount: "2 tbsp, diced" },
            { name: "feta cheese", amount: "2 tbsp, crumbled" },
            { name: "olive oil", amount: "1 tbsp" },
            { name: "lemon juice", amount: "1 tbsp" },
            { name: "herbs", amount: "to taste" }
          ],
          instructions: [
            "Combine mixed greens, quinoa, tomatoes, cucumber, and red onion in a bowl",
            "Top with grilled chicken and feta cheese",
            "Whisk together olive oil, lemon juice, and herbs for dressing",
            "Drizzle dressing over salad"
          ],
          nutritionInfo: {
            calories: 420,
            protein: 35,
            carbs: 30,
            fat: 18,
            fiber: 6,
            sugar: 4
          },
          benefits: [
            "Lean protein from chicken for muscle support",
            "Complex carbohydrates from quinoa provide sustained energy",
            "High in fiber from vegetables",
            "Healthy fats from olive oil support heart health",
            "Balanced meal with all essential nutrients"
          ]
        },
        dinner: {
          name: "Baked Salmon with Roasted Vegetables",
          ingredients: [
            { name: "salmon fillet", amount: "5 oz" },
            { name: "asparagus", amount: "1 cup" },
            { name: "bell peppers", amount: "1/2 cup, sliced" },
            { name: "zucchini", amount: "1/2 cup, sliced" },
            { name: "olive oil", amount: "1 tbsp" },
            { name: "lemon", amount: "1/2" },
            { name: "garlic", amount: "2 cloves, minced" },
            { name: "dill", amount: "1 tsp, fresh" },
            { name: "sweet potato", amount: "1/2 medium, cubed" }
          ],
          instructions: [
            "Preheat oven to 400°F (200°C)",
            "Toss vegetables with olive oil, salt, and pepper",
            "Place salmon on a baking sheet, season with garlic, dill, and lemon juice",
            "Roast vegetables for 20 minutes, add salmon for the last 12-15 minutes",
            "Serve salmon with roasted vegetables"
          ],
          nutritionInfo: {
            calories: 480,
            protein: 36,
            carbs: 28,
            fat: 24,
            fiber: 7,
            sugar: 5
          },
          benefits: [
            "Omega-3 fatty acids from salmon support heart and brain health",
            "High-quality complete protein",
            "Wide range of vitamins and minerals from diverse vegetables",
            "Complex carbohydrates from sweet potato",
            "Anti-inflammatory properties from omega-3s and antioxidants"
          ]
        },
        snacks: [
          {
            name: "Hard-Boiled Eggs with Fruit",
            ingredients: [
              { name: "eggs", amount: "2, hard-boiled" },
              { name: "apple", amount: "1 small" },
              { name: "salt and pepper", amount: "to taste" }
            ],
            instructions: [
              "Peel hard-boiled eggs and sprinkle with salt and pepper",
              "Enjoy with a sliced apple"
            ],
            nutritionInfo: {
              calories: 220,
              protein: 13,
              carbs: 19,
              fat: 10,
              fiber: 4,
              sugar: 14
            },
            benefits: [
              "Complete protein with all essential amino acids",
              "Choline from eggs supports brain health",
              "Fiber from apple aids digestion",
              "Balanced combination of protein, fat, and carbs"
            ]
          },
          {
            name: "Cottage Cheese with Pineapple",
            ingredients: [
              { name: "cottage cheese", amount: "1/2 cup" },
              { name: "pineapple chunks", amount: "1/4 cup" },
              { name: "walnuts", amount: "1 tbsp, chopped" }
            ],
            instructions: [
              "Combine cottage cheese and pineapple in a bowl",
              "Top with chopped walnuts"
            ],
            nutritionInfo: {
              calories: 170,
              protein: 15,
              carbs: 14,
              fat: 7,
              fiber: 2,
              sugar: 12
            },
            benefits: [
              "High in protein for muscle maintenance",
              "Calcium and phosphorus for bone health",
              "Bromelain from pineapple has anti-inflammatory properties",
              "Healthy fats from walnuts support brain function"
            ]
          }
        ]
      }
    };
  }

  // Default or general case, for any other condition
  return {
    condition: condition as HealthCondition,
    dailyNutritionTargets: {
      calories: { min: adjustedCalories - 100, max: adjustedCalories + 100 },
      protein: { min: proteinGrams - 10, max: proteinGrams + 10 },
      carbs: { min: carbGrams - 20, max: carbGrams + 20 },
      fat: { min: fatGrams - 5, max: fatGrams + 5 },
      fiber: { min: fiberGrams - 5, max: fiberGrams + 5 },
      sugar: { max: 36 }
    },
    dietaryGuidelines: {
      recommended: [
        "Variety of fruits and vegetables",
        "Whole grains",
        "Lean proteins",
        "Healthy fats",
        "Low-fat dairy or alternatives",
        "Adequate hydration",
        "Mindful portion sizes"
      ],
      avoid: [
        "Excessive processed foods",
        "Added sugars",
        "Trans fats",
        "Excessive sodium",
        "Excessive alcohol",
        "Large portion sizes",
        "Sugar-sweetened beverages"
      ]
    },
    mealPlan: {
      breakfast: {
        name: "Balanced Breakfast Bowl",
        ingredients: [
          { name: "Greek yogurt", amount: "3/4 cup" },
          { name: "mixed berries", amount: "1/2 cup" },
          { name: "granola", amount: "1/4 cup" },
          { name: "honey", amount: "1 tsp" },
          { name: "chia seeds", amount: "1 tsp" }
        ],
        instructions: [
          "Layer yogurt in a bowl",
          "Top with berries, granola, and chia seeds",
          "Drizzle with honey"
        ],
        nutritionInfo: {
          calories: 320,
          protein: 20,
          carbs: 45,
          fat: 8,
          fiber: 7,
          sugar: 22
        },
        benefits: [
          "Balanced macronutrients for sustained energy",
          "Protein supports muscle maintenance",
          "Antioxidants from berries",
          "Fiber supports digestive health"
        ]
      },
      lunch: {
        name: "Chicken and Avocado Wrap",
        ingredients: [
          { name: "whole grain wrap", amount: "1 medium" },
          { name: "grilled chicken breast", amount: "3 oz" },
          { name: "avocado", amount: "1/4, sliced" },
          { name: "lettuce", amount: "1/2 cup" },
          { name: "tomato", amount: "2 slices" },
          { name: "hummus", amount: "1 tbsp" },
          { name: "mixed greens salad", amount: "1 cup" },
          { name: "olive oil and vinegar dressing", amount: "1 tbsp" }
        ],
        instructions: [
          "Spread hummus on wrap",
          "Layer with chicken, avocado, lettuce, and tomato",
          "Roll up and slice in half",
          "Serve with side salad dressed with olive oil and vinegar"
        ],
        nutritionInfo: {
          calories: 420,
          protein: 28,
          carbs: 40,
          fat: 18,
          fiber: 9,
          sugar: 4
        },
        benefits: [
          "Balanced meal with all food groups",
          "Healthy fats from avocado",
          "Whole grains provide complex carbohydrates",
          "Lean protein for muscle support"
        ]
      },
      dinner: {
        name: "Baked Salmon with Quinoa and Vegetables",
        ingredients: [
          { name: "salmon fillet", amount: "4 oz" },
          { name: "quinoa", amount: "1/2 cup, cooked" },
          { name: "asparagus", amount: "1 cup" },
          { name: "cherry tomatoes", amount: "1/2 cup" },
          { name: "olive oil", amount: "1 tbsp" },
          { name: "lemon", amount: "1/2" },
          { name: "dill", amount: "1 tsp, fresh" },
          { name: "garlic", amount: "1 clove, minced" }
        ],
        instructions: [
          "Preheat oven to 400°F (200°C)",
          "Season salmon with dill, garlic, and lemon juice",
          "Bake salmon for 12-15 minutes",
          "Roast asparagus and tomatoes with olive oil",
          "Serve salmon over quinoa with roasted vegetables"
        ],
        nutritionInfo: {
          calories: 450,
          protein: 32,
          carbs: 33,
          fat: 20,
          fiber: 6,
          sugar: 4
        },
        benefits: [
          "Omega-3 fatty acids from salmon support heart health",
          "Complete protein from quinoa",
          "High in vitamins and minerals",
          "Balanced macronutrients"
        ]
      },
      snacks: [
        {
          name: "Apple with Peanut Butter",
          ingredients: [
            { name: "apple", amount: "1 medium" },
            { name: "natural peanut butter", amount: "1 tbsp" }
          ],
          instructions: [
            "Slice apple and serve with peanut butter for dipping"
          ],
          nutritionInfo: {
            calories: 170,
            protein: 4,
            carbs: 25,
            fat: 8,
            fiber: 5,
            sugar: 19
          },
          benefits: [
            "Combination of fiber, protein, and healthy fats for satiety",
            "Natural sugars from fruit with fiber to slow digestion",
            "Portable and convenient",
            "Satisfies sweet and savory cravings"
          ]
        },
        {
          name: "Vegetable Sticks with Hummus",
          ingredients: [
            { name: "carrot sticks", amount: "1/2 cup" },
            { name: "cucumber slices", amount: "1/2 cup" },
            { name: "bell pepper strips", amount: "1/2 cup" },
            { name: "hummus", amount: "2 tbsp" }
          ],
          instructions: [
            "Serve vegetable sticks with hummus for dipping"
          ],
          nutritionInfo: {
            calories: 120,
            protein: 4,
            carbs: 14,
            fat: 6,
            fiber: 5,
            sugar: 6
          },
          benefits: [
            "Low calorie, high nutrient snack",
            "Plant-based protein from chickpeas",
            "High fiber content supports digestive health",
            "Variety of vitamins and minerals from different vegetables"
          ]
        }
      ]
    }
  };
};
