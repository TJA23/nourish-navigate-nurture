
import { HealthRecommendation } from "@/types/health";

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
    case "joint issues":
      calorieAdjustment = -100;
      break;
    case "pcos":
      calorieAdjustment = -200;
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
    case "joint issues":
      // Standard macronutrient distribution
      break;
    case "pcos":
      carbPercent = 0.4;
      proteinPercent = 0.3;
      fatPercent = 0.3;
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
  
  // Example recommendations
  switch (condition) {
    case "heart disease":
      return {
        condition: "heart disease",
        dailyNutritionTargets: {
          calories: { min: adjustedCalories - 100, max: adjustedCalories },
          protein: { min: proteinGrams - 5, max: proteinGrams + 5 },
          carbs: { min: carbGrams - 10, max: carbGrams + 10 },
          fat: { min: fatGrams - 5, max: fatGrams + 5 },
          fiber: { min: fiberGrams, max: fiberGrams + 10 },
          sugar: { max: 25 }
        },
        dietaryGuidelines: {
          recommended: [
            "Fatty fish rich in omega-3 (salmon, mackerel)",
            "Whole grains and high-fiber foods",
            "Fruits and vegetables",
            "Nuts and seeds",
            "Lean proteins",
            "Olive oil and avocado",
            "Low-fat dairy products"
          ],
          avoid: [
            "Trans fats and saturated fats",
            "High-sodium foods",
            "Processed meats",
            "Refined carbohydrates",
            "Sugary beverages",
            "Excessive alcohol",
            "Full-fat dairy products"
          ]
        },
        mealPlan: {
          breakfast: {
            name: "Heart-Healthy Oatmeal Bowl",
            ingredients: [
              { name: "rolled oats", amount: "1/2 cup" },
              { name: "unsweetened almond milk", amount: "1 cup" },
              { name: "ground flaxseed", amount: "1 tbsp" },
              { name: "berries", amount: "1/2 cup" },
              { name: "walnuts", amount: "1 tbsp" },
              { name: "cinnamon", amount: "1/4 tsp" }
            ],
            instructions: [
              "Combine oats and almond milk in a pot over medium heat",
              "Cook for 5 minutes, stirring occasionally",
              "Remove from heat and stir in flaxseed and cinnamon",
              "Top with berries and walnuts"
            ],
            nutritionInfo: {
              calories: 310,
              protein: 8,
              carbs: 45,
              fat: 12,
              fiber: 9,
              sugar: 6
            },
            benefits: [
              "Helps lower cholesterol with soluble fiber",
              "Omega-3 fatty acids support heart health",
              "Low in sodium and saturated fat",
              "Provides steady energy without blood sugar spikes"
            ]
          },
          lunch: {
            name: "Mediterranean Quinoa Salad",
            ingredients: [
              { name: "cooked quinoa", amount: "3/4 cup" },
              { name: "cucumber", amount: "1/2 cup, diced" },
              { name: "cherry tomatoes", amount: "1/2 cup, halved" },
              { name: "red bell pepper", amount: "1/2, diced" },
              { name: "feta cheese", amount: "2 tbsp, crumbled" },
              { name: "chickpeas", amount: "1/4 cup, cooked" },
              { name: "olive oil", amount: "1 tbsp" },
              { name: "lemon juice", amount: "1 tbsp" },
              { name: "fresh herbs", amount: "1 tbsp" }
            ],
            instructions: [
              "Mix cooked quinoa with all vegetables and chickpeas",
              "Whisk together olive oil, lemon juice, and herbs",
              "Toss the salad with the dressing",
              "Sprinkle crumbled feta on top"
            ],
            nutritionInfo: {
              calories: 380,
              protein: 12,
              carbs: 48,
              fat: 15,
              fiber: 8,
              sugar: 5
            },
            benefits: [
              "Rich in plant-based protein",
              "Healthy monounsaturated fats from olive oil",
              "High in potassium which helps control blood pressure",
              "Packed with antioxidants from colorful vegetables"
            ]
          },
          dinner: {
            name: "Baked Salmon with Roasted Vegetables",
            ingredients: [
              { name: "salmon fillet", amount: "4 oz" },
              { name: "broccoli", amount: "1 cup" },
              { name: "carrots", amount: "1/2 cup, sliced" },
              { name: "olive oil", amount: "1 tbsp" },
              { name: "garlic", amount: "2 cloves, minced" },
              { name: "lemon", amount: "1/2, sliced" },
              { name: "dill", amount: "1 tsp, fresh" },
              { name: "brown rice", amount: "1/2 cup, cooked" }
            ],
            instructions: [
              "Preheat oven to 400°F (200°C)",
              "Toss vegetables with olive oil and garlic",
              "Arrange salmon on a baking sheet, top with lemon and dill",
              "Roast vegetables and salmon for 15-20 minutes",
              "Serve with a side of brown rice"
            ],
            nutritionInfo: {
              calories: 420,
              protein: 30,
              carbs: 35,
              fat: 18,
              fiber: 6,
              sugar: 4
            },
            benefits: [
              "High in omega-3 fatty acids from salmon",
              "Complex carbohydrates provide sustained energy",
              "Antioxidants from vegetables support heart health",
              "Lean protein helps maintain muscle mass"
            ]
          },
          snacks: [
            {
              name: "Greek Yogurt with Berries",
              ingredients: [
                { name: "low-fat Greek yogurt", amount: "3/4 cup" },
                { name: "mixed berries", amount: "1/4 cup" },
                { name: "honey", amount: "1 tsp" }
              ],
              instructions: [
                "Top yogurt with berries and a drizzle of honey"
              ],
              nutritionInfo: {
                calories: 120,
                protein: 15,
                carbs: 12,
                fat: 2,
                fiber: 2,
                sugar: 8
              },
              benefits: [
                "High protein helps control appetite",
                "Probiotics support gut health",
                "Low in fat and sodium",
                "Antioxidants from berries"
              ]
            },
            {
              name: "Almond and Apple Slices",
              ingredients: [
                { name: "apple", amount: "1 medium" },
                { name: "almonds", amount: "12 (approx. 1/2 oz)" }
              ],
              instructions: [
                "Slice apple and enjoy with almonds"
              ],
              nutritionInfo: {
                calories: 150,
                protein: 4,
                carbs: 20,
                fat: 8,
                fiber: 5,
                sugar: 15
              },
              benefits: [
                "Heart-healthy fats from almonds",
                "Fiber helps lower cholesterol",
                "Natural sweetness without added sugars",
                "Combination provides sustained energy"
              ]
            }
          ]
        }
      };
    
    case "diabetes":
      return {
        condition: "diabetes",
        dailyNutritionTargets: {
          calories: { min: adjustedCalories - 100, max: adjustedCalories },
          protein: { min: proteinGrams - 5, max: proteinGrams + 5 },
          carbs: { min: carbGrams - 15, max: carbGrams - 5 },
          fat: { min: fatGrams - 5, max: fatGrams + 5 },
          fiber: { min: fiberGrams, max: fiberGrams + 10 },
          sugar: { max: 24 }
        },
        dietaryGuidelines: {
          recommended: [
            "High-fiber, low-glycemic index foods",
            "Lean proteins (chicken, fish, tofu)",
            "Healthy fats (avocado, nuts, olive oil)",
            "Non-starchy vegetables",
            "Whole grains in moderation",
            "Water and unsweetened beverages",
            "Berries and citrus fruits in moderation"
          ],
          avoid: [
            "Sugary beverages and desserts",
            "Refined carbohydrates and white flour",
            "Processed meats and foods",
            "Fried foods",
            "High-fat dairy products",
            "Alcohol in excess",
            "Large portions of starchy foods"
          ]
        },
        mealPlan: {
          breakfast: {
            name: "Low-Carb Veggie Frittata",
            ingredients: [
              { name: "eggs", amount: "2 large" },
              { name: "spinach", amount: "1 cup, fresh" },
              { name: "bell pepper", amount: "1/4 cup, diced" },
              { name: "onion", amount: "2 tbsp, chopped" },
              { name: "feta cheese", amount: "1 tbsp, crumbled" },
              { name: "olive oil", amount: "1 tsp" },
              { name: "fresh herbs", amount: "1 tsp" }
            ],
            instructions: [
              "Preheat oven to 350°F (175°C)",
              "Sauté vegetables in olive oil until softened",
              "Whisk eggs with herbs and pour over vegetables in an oven-safe pan",
              "Sprinkle with feta cheese and bake for 15 minutes until set"
            ],
            nutritionInfo: {
              calories: 240,
              protein: 16,
              carbs: 7,
              fat: 17,
              fiber: 2,
              sugar: 3
            },
            benefits: [
              "Low in carbohydrates to help control blood sugar",
              "High-quality protein helps maintain satiety",
              "Rich in vitamins and minerals from vegetables",
              "Healthy fats support steady glucose levels"
            ]
          },
          lunch: {
            name: "Grilled Chicken and Quinoa Bowl",
            ingredients: [
              { name: "chicken breast", amount: "3 oz, grilled" },
              { name: "quinoa", amount: "1/2 cup, cooked" },
              { name: "broccoli", amount: "1 cup, steamed" },
              { name: "avocado", amount: "1/4, sliced" },
              { name: "olive oil", amount: "1 tsp" },
              { name: "lemon juice", amount: "1 tsp" },
              { name: "herbs and spices", amount: "to taste" }
            ],
            instructions: [
              "Cook quinoa according to package instructions",
              "Grill chicken breast with herbs and spices",
              "Steam broccoli until tender-crisp",
              "Combine all ingredients in a bowl",
              "Drizzle with olive oil and lemon juice"
            ],
            nutritionInfo: {
              calories: 340,
              protein: 29,
              carbs: 26,
              fat: 13,
              fiber: 7,
              sugar: 2
            },
            benefits: [
              "Balanced macronutrients for steady blood sugar",
              "High fiber content slows carbohydrate absorption",
              "Lean protein supports muscle maintenance",
              "Healthy fats from avocado improve insulin sensitivity"
            ]
          },
          dinner: {
            name: "Baked Cod with Roasted Vegetables",
            ingredients: [
              { name: "cod fillet", amount: "4 oz" },
              { name: "zucchini", amount: "1 cup, sliced" },
              { name: "bell peppers", amount: "1/2 cup, sliced" },
              { name: "cherry tomatoes", amount: "1/2 cup" },
              { name: "olive oil", amount: "1 tbsp" },
              { name: "garlic", amount: "1 clove, minced" },
              { name: "lemon", amount: "1/2" },
              { name: "herbs", amount: "1 tbsp, fresh" }
            ],
            instructions: [
              "Preheat oven to 400°F (200°C)",
              "Toss vegetables with olive oil and garlic",
              "Place cod on a baking sheet, season with herbs",
              "Roast vegetables and cod for 15 minutes",
              "Squeeze lemon over cod before serving"
            ],
            nutritionInfo: {
              calories: 280,
              protein: 26,
              carbs: 12,
              fat: 14,
              fiber: 4,
              sugar: 5
            },
            benefits: [
              "Low glycemic impact meal",
              "Lean protein supports satiety without raising blood sugar",
              "Heart-healthy omega-3 fatty acids",
              "Non-starchy vegetables provide nutrients with minimal carbs"
            ]
          },
          snacks: [
            {
              name: "Celery with Almond Butter",
              ingredients: [
                { name: "celery sticks", amount: "2 large" },
                { name: "almond butter", amount: "1 tbsp" }
              ],
              instructions: [
                "Spread almond butter on celery sticks"
              ],
              nutritionInfo: {
                calories: 110,
                protein: 3,
                carbs: 4,
                fat: 9,
                fiber: 2,
                sugar: 1
              },
              benefits: [
                "Very low carbohydrate snack",
                "Healthy fats provide satiety without blood sugar spikes",
                "Crunchy texture is satisfying",
                "Contains magnesium which may improve insulin sensitivity"
              ]
            },
            {
              name: "Greek Yogurt with Walnuts",
              ingredients: [
                { name: "plain Greek yogurt", amount: "1/2 cup" },
                { name: "walnuts", amount: "1 tbsp, chopped" },
                { name: "cinnamon", amount: "a pinch" }
              ],
              instructions: [
                "Top yogurt with walnuts and cinnamon"
              ],
              nutritionInfo: {
                calories: 120,
                protein: 12,
                carbs: 5,
                fat: 7,
                fiber: 1,
                sugar: 4
              },
              benefits: [
                "High protein, low carb snack",
                "Probiotics support gut health",
                "Walnuts contain healthy omega-3 fats",
                "Cinnamon may help improve insulin sensitivity"
              ]
            }
          ]
        }
      };
    
    // Add more conditions here
    
    default:
      // General healthy eating plan
      return {
        condition: "general",
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
  }
};
