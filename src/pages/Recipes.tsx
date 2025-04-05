
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Clock, Utensils, Users } from "lucide-react";

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sugar?: number;
}

interface RecipeIngredient {
  name: string;
  quantity: string;
}

interface Recipe {
  id: number;
  name: string;
  image: string;
  dietType: string[];
  prepTime: string;
  servings: number;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  nutrition: NutritionInfo;
}

const Recipes = () => {
  const [expandedRecipe, setExpandedRecipe] = useState<number | null>(null);

  const toggleRecipeExpand = (id: number) => {
    setExpandedRecipe(expandedRecipe === id ? null : id);
  };

  const recipes: Recipe[] = [
    {
      id: 1,
      name: "Mediterranean Quinoa Bowl",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      dietType: ["vegetarian", "gluten-free"],
      prepTime: "25 min",
      servings: 2,
      description: "A protein-rich quinoa bowl with roasted vegetables, chickpeas, and a lemon-tahini dressing.",
      ingredients: [
        { name: "Quinoa", quantity: "1 cup" },
        { name: "Cherry tomatoes", quantity: "1 cup" },
        { name: "Cucumber", quantity: "1 medium" },
        { name: "Chickpeas", quantity: "1 can (15 oz)" },
        { name: "Red bell pepper", quantity: "1 medium" },
        { name: "Red onion", quantity: "1/2 medium" },
        { name: "Kalamata olives", quantity: "1/4 cup" },
        { name: "Feta cheese", quantity: "1/4 cup" },
        { name: "Tahini", quantity: "2 tbsp" },
        { name: "Lemon juice", quantity: "2 tbsp" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Garlic", quantity: "1 clove" },
        { name: "Salt and pepper", quantity: "to taste" }
      ],
      instructions: [
        "Rinse quinoa thoroughly and cook according to package instructions.",
        "While quinoa is cooking, chop vegetables into bite-sized pieces.",
        "Drain and rinse chickpeas.",
        "Make dressing by whisking together tahini, lemon juice, olive oil, minced garlic, salt, and pepper.",
        "In a large bowl, combine cooked quinoa, vegetables, chickpeas, and olives.",
        "Drizzle with dressing and gently toss to combine.",
        "Top with crumbled feta cheese and serve."
      ],
      nutrition: {
        calories: 420,
        protein: 15,
        carbs: 52,
        fat: 18,
        fiber: 9,
        sugar: 6
      }
    },
    {
      id: 2,
      name: "Grilled Salmon with Avocado Salsa",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
      dietType: ["non-vegetarian", "gluten-free", "keto"],
      prepTime: "30 min",
      servings: 4,
      description: "Perfectly grilled salmon topped with fresh avocado salsa for a healthy, protein-packed meal.",
      ingredients: [
        { name: "Salmon fillets", quantity: "4 (6 oz each)" },
        { name: "Avocados", quantity: "2 ripe" },
        { name: "Cherry tomatoes", quantity: "1 cup" },
        { name: "Red onion", quantity: "1/4 cup" },
        { name: "Cilantro", quantity: "1/4 cup" },
        { name: "Lime juice", quantity: "2 tbsp" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Garlic powder", quantity: "1 tsp" },
        { name: "Cumin", quantity: "1/2 tsp" },
        { name: "Salt and pepper", quantity: "to taste" }
      ],
      instructions: [
        "Preheat grill to medium-high heat.",
        "In a small bowl, mix olive oil, garlic powder, cumin, salt, and pepper.",
        "Brush salmon fillets with the olive oil mixture.",
        "Grill salmon for 4-5 minutes per side, or until it flakes easily with a fork.",
        "While salmon is cooking, dice avocados, tomatoes, and red onion.",
        "In a bowl, combine diced ingredients with chopped cilantro and lime juice.",
        "Season avocado salsa with salt and pepper to taste.",
        "Serve grilled salmon topped with avocado salsa."
      ],
      nutrition: {
        calories: 380,
        protein: 34,
        carbs: 8,
        fat: 24,
        fiber: 5,
        sugar: 2
      }
    },
    {
      id: 3,
      name: "Chickpea Buddha Bowl",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2",
      dietType: ["vegan", "gluten-free"],
      prepTime: "20 min",
      servings: 2,
      description: "A nutrient-dense bowl featuring roasted chickpeas, sweet potatoes, and a variety of vegetables.",
      ingredients: [
        { name: "Chickpeas", quantity: "1 can (15 oz)" },
        { name: "Sweet potato", quantity: "1 large" },
        { name: "Broccoli florets", quantity: "2 cups" },
        { name: "Brown rice", quantity: "1 cup cooked" },
        { name: "Avocado", quantity: "1 medium" },
        { name: "Baby spinach", quantity: "2 cups" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Lemon juice", quantity: "1 tbsp" },
        { name: "Cumin", quantity: "1 tsp" },
        { name: "Paprika", quantity: "1/2 tsp" },
        { name: "Tahini", quantity: "2 tbsp" },
        { name: "Maple syrup", quantity: "1 tsp" },
        { name: "Salt and pepper", quantity: "to taste" }
      ],
      instructions: [
        "Preheat oven to 400°F (200°C).",
        "Dice sweet potato into 1-inch cubes.",
        "Drain and rinse chickpeas, pat dry with paper towel.",
        "On a baking sheet, toss sweet potatoes with 1 tbsp olive oil, salt, and pepper.",
        "On another baking sheet, toss chickpeas with remaining olive oil, cumin, and paprika.",
        "Roast sweet potatoes and chickpeas for 20-25 minutes, adding broccoli florets to the sweet potato tray for the last 15 minutes.",
        "Make dressing by whisking together tahini, lemon juice, maple syrup, and 2-3 tbsp water until smooth.",
        "Assemble bowls with rice, spinach, roasted vegetables, chickpeas, and sliced avocado.",
        "Drizzle with tahini dressing and serve."
      ],
      nutrition: {
        calories: 450,
        protein: 12,
        carbs: 65,
        fat: 18,
        fiber: 14,
        sugar: 9
      }
    },
    {
      id: 4,
      name: "Cauliflower Fried Rice",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
      dietType: ["low-carb", "keto", "gluten-free"],
      prepTime: "25 min",
      servings: 4,
      description: "A low-carb twist on a classic favorite using cauliflower rice instead of traditional rice.",
      ingredients: [
        { name: "Cauliflower head", quantity: "1 medium" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Garlic", quantity: "3 cloves" },
        { name: "Ginger", quantity: "1 tbsp minced" },
        { name: "Carrots", quantity: "2 medium" },
        { name: "Peas", quantity: "1/2 cup" },
        { name: "Green onions", quantity: "4" },
        { name: "Eggs", quantity: "2" },
        { name: "Soy sauce (or tamari)", quantity: "2 tbsp" },
        { name: "Sesame oil", quantity: "1 tsp" },
        { name: "Red pepper flakes", quantity: "to taste" }
      ],
      instructions: [
        "Rice the cauliflower by pulsing florets in a food processor until rice-like consistency is achieved.",
        "Heat 1 tbsp olive oil in a large skillet or wok over medium-high heat.",
        "Add beaten eggs and scramble until cooked through. Remove and set aside.",
        "Add remaining oil to the pan. Add garlic and ginger, sauté for 30 seconds.",
        "Add diced carrots and cook for 3-4 minutes until beginning to soften.",
        "Add cauliflower rice and peas. Cook for 5-6 minutes until cauliflower is tender.",
        "Return eggs to the pan, add soy sauce, sesame oil, and mix well.",
        "Garnish with sliced green onions and red pepper flakes."
      ],
      nutrition: {
        calories: 180,
        protein: 8,
        carbs: 12,
        fat: 12,
        fiber: 5,
        sugar: 4
      }
    },
    {
      id: 5,
      name: "Greek Yogurt Parfait",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
      dietType: ["vegetarian", "high-protein"],
      prepTime: "10 min",
      servings: 1,
      description: "A protein-packed breakfast or snack layered with Greek yogurt, fresh berries, and crunchy granola.",
      ingredients: [
        { name: "Greek yogurt", quantity: "1 cup" },
        { name: "Mixed berries", quantity: "1/2 cup" },
        { name: "Granola", quantity: "1/4 cup" },
        { name: "Honey", quantity: "1 tbsp" },
        { name: "Chia seeds", quantity: "1 tsp" },
        { name: "Sliced almonds", quantity: "1 tbsp" }
      ],
      instructions: [
        "In a glass or jar, layer half of the Greek yogurt at the bottom.",
        "Add a layer of mixed berries on top of the yogurt.",
        "Sprinkle half of the granola over the berries.",
        "Repeat layers with remaining yogurt and berries.",
        "Top with remaining granola, chia seeds, and sliced almonds.",
        "Drizzle honey over the top and serve immediately."
      ],
      nutrition: {
        calories: 320,
        protein: 22,
        carbs: 40,
        fat: 9,
        fiber: 6,
        sugar: 24
      }
    },
    {
      id: 6,
      name: "Lentil Soup",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      dietType: ["vegetarian", "vegan", "high-fiber"],
      prepTime: "45 min",
      servings: 6,
      description: "A hearty, protein-rich lentil soup loaded with vegetables and aromatic spices.",
      ingredients: [
        { name: "Green or brown lentils", quantity: "2 cups" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Onion", quantity: "1 large" },
        { name: "Carrots", quantity: "2 large" },
        { name: "Celery", quantity: "2 stalks" },
        { name: "Garlic", quantity: "4 cloves" },
        { name: "Vegetable broth", quantity: "8 cups" },
        { name: "Diced tomatoes", quantity: "1 can (14 oz)" },
        { name: "Cumin", quantity: "2 tsp" },
        { name: "Coriander", quantity: "1 tsp" },
        { name: "Paprika", quantity: "1 tsp" },
        { name: "Bay leaf", quantity: "2" },
        { name: "Lemon juice", quantity: "2 tbsp" },
        { name: "Fresh spinach", quantity: "2 cups" },
        { name: "Salt and pepper", quantity: "to taste" }
      ],
      instructions: [
        "Rinse and sort lentils, removing any debris.",
        "In a large pot, heat olive oil over medium heat. Add diced onion, carrots, and celery. Cook for 5-7 minutes until softened.",
        "Add minced garlic and cook for another minute until fragrant.",
        "Add lentils, vegetable broth, diced tomatoes, cumin, coriander, paprika, and bay leaves.",
        "Bring to a boil, then reduce heat and simmer covered for 25-30 minutes until lentils are tender.",
        "Remove bay leaves. Use an immersion blender to partially blend some of the soup if desired.",
        "Stir in lemon juice and spinach. Cook until spinach is wilted.",
        "Season with salt and pepper to taste."
      ],
      nutrition: {
        calories: 280,
        protein: 16,
        carbs: 45,
        fat: 5,
        fiber: 18,
        sugar: 6
      }
    },
    {
      id: 7,
      name: "Baked Cod with Herb Crust",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      dietType: ["non-vegetarian", "low-carb", "high-protein"],
      prepTime: "25 min",
      servings: 4,
      description: "Tender cod fillets topped with a flavorful herb crust for a light yet satisfying dinner.",
      ingredients: [
        { name: "Cod fillets", quantity: "4 (6 oz each)" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Panko breadcrumbs", quantity: "1/2 cup" },
        { name: "Fresh parsley", quantity: "1/4 cup" },
        { name: "Fresh dill", quantity: "2 tbsp" },
        { name: "Lemon zest", quantity: "1 lemon" },
        { name: "Garlic", quantity: "2 cloves" },
        { name: "Dijon mustard", quantity: "2 tsp" },
        { name: "Lemon juice", quantity: "2 tbsp" },
        { name: "Salt and pepper", quantity: "to taste" }
      ],
      instructions: [
        "Preheat oven to 425°F (220°C).",
        "Pat cod fillets dry and place in a greased baking dish. Season with salt and pepper.",
        "In a bowl, combine breadcrumbs, chopped herbs, lemon zest, minced garlic, and 1 tbsp olive oil.",
        "Brush the tops of the fillets with Dijon mustard.",
        "Press the herb breadcrumb mixture onto the top of each fillet.",
        "Drizzle with remaining olive oil and bake for 12-15 minutes until fish flakes easily.",
        "Squeeze fresh lemon juice over the top before serving."
      ],
      nutrition: {
        calories: 240,
        protein: 32,
        carbs: 8,
        fat: 9,
        fiber: 1,
        sugar: 0
      }
    },
    {
      id: 8,
      name: "Spinach and Mushroom Frittata",
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf",
      dietType: ["vegetarian", "keto", "gluten-free"],
      prepTime: "30 min",
      servings: 6,
      description: "A versatile, protein-rich egg dish that's perfect for breakfast, brunch, or dinner.",
      ingredients: [
        { name: "Eggs", quantity: "10 large" },
        { name: "Milk or cream", quantity: "1/4 cup" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Onion", quantity: "1 medium" },
        { name: "Mushrooms", quantity: "8 oz" },
        { name: "Fresh spinach", quantity: "4 cups" },
        { name: "Garlic", quantity: "2 cloves" },
        { name: "Feta cheese", quantity: "1/2 cup" },
        { name: "Fresh herbs (dill, parsley, chives)", quantity: "1/4 cup" },
        { name: "Salt and pepper", quantity: "to taste" }
      ],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "In a bowl, whisk together eggs, milk, salt, and pepper. Set aside.",
        "Heat olive oil in a 10-inch oven-safe skillet over medium heat.",
        "Add diced onion and cook until softened, about 3-4 minutes.",
        "Add sliced mushrooms and cook until they release their moisture and begin to brown, 5-7 minutes.",
        "Add minced garlic and cook for 30 seconds until fragrant.",
        "Add spinach and cook until wilted, about 2 minutes.",
        "Pour the egg mixture over the vegetables. Sprinkle with crumbled feta and herbs.",
        "Cook on the stovetop for 2-3 minutes until edges begin to set.",
        "Transfer to the oven and bake for 15-18 minutes until set and lightly golden.",
        "Let cool for 5 minutes before slicing and serving."
      ],
      nutrition: {
        calories: 210,
        protein: 15,
        carbs: 5,
        fat: 15,
        fiber: 1,
        sugar: 2
      }
    },
    {
      id: 9,
      name: "Sweet Potato and Black Bean Burrito Bowl",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
      dietType: ["vegetarian", "vegan", "high-fiber"],
      prepTime: "40 min",
      servings: 4,
      description: "A colorful, nutrient-packed bowl with roasted sweet potatoes, black beans, and avocado.",
      ingredients: [
        { name: "Sweet potatoes", quantity: "2 large" },
        { name: "Black beans", quantity: "1 can (15 oz)" },
        { name: "Brown rice", quantity: "1 cup uncooked" },
        { name: "Red onion", quantity: "1 small" },
        { name: "Bell pepper", quantity: "1 large" },
        { name: "Avocado", quantity: "1 large" },
        { name: "Lime juice", quantity: "2 tbsp" },
        { name: "Cilantro", quantity: "1/4 cup" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Cumin", quantity: "2 tsp" },
        { name: "Chili powder", quantity: "1 tsp" },
        { name: "Garlic powder", quantity: "1 tsp" },
        { name: "Salt and pepper", quantity: "to taste" },
        { name: "Optional toppings", quantity: "salsa, hot sauce, vegan sour cream" }
      ],
      instructions: [
        "Preheat oven to 425°F (220°C).",
        "Cube sweet potatoes and toss with 1 tbsp olive oil, cumin, chili powder, garlic powder, salt, and pepper.",
        "Spread on a baking sheet and roast for 25-30 minutes until tender and caramelized.",
        "Meanwhile, cook brown rice according to package instructions.",
        "Drain and rinse black beans.",
        "Dice red onion, bell pepper, and avocado. Chop cilantro.",
        "In a small bowl, mix lime juice with remaining olive oil for a simple dressing.",
        "Assemble bowls with rice, roasted sweet potatoes, black beans, fresh vegetables.",
        "Drizzle with the lime dressing and garnish with cilantro.",
        "Add optional toppings if desired."
      ],
      nutrition: {
        calories: 420,
        protein: 12,
        carbs: 72,
        fat: 12,
        fiber: 15,
        sugar: 8
      }
    },
    {
      id: 10,
      name: "Berry Protein Smoothie",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec",
      dietType: ["vegetarian", "high-protein"],
      prepTime: "5 min",
      servings: 1,
      description: "A quick, refreshing smoothie packed with antioxidants, protein, and healthy fats.",
      ingredients: [
        { name: "Mixed berries (frozen)", quantity: "1 cup" },
        { name: "Banana", quantity: "1/2" },
        { name: "Greek yogurt", quantity: "1/2 cup" },
        { name: "Almond milk", quantity: "1 cup" },
        { name: "Protein powder", quantity: "1 scoop" },
        { name: "Chia seeds", quantity: "1 tbsp" },
        { name: "Almond butter", quantity: "1 tbsp" },
        { name: "Honey", quantity: "1 tsp (optional)" },
        { name: "Ice cubes", quantity: "1/2 cup" }
      ],
      instructions: [
        "Add all ingredients to a blender.",
        "Blend on high until smooth and creamy.",
        "Add more liquid if needed to reach desired consistency.",
        "Pour into a glass and serve immediately."
      ],
      nutrition: {
        calories: 340,
        protein: 30,
        carbs: 38,
        fat: 12,
        fiber: 8,
        sugar: 24
      }
    },
    {
      id: 11,
      name: "Turkey and Vegetable Stir-Fry",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      dietType: ["non-vegetarian", "high-protein", "low-carb"],
      prepTime: "25 min",
      servings: 4,
      description: "A quick and healthy stir-fry with lean ground turkey and plenty of colorful vegetables.",
      ingredients: [
        { name: "Ground turkey", quantity: "1 lb" },
        { name: "Broccoli", quantity: "2 cups florets" },
        { name: "Bell peppers", quantity: "2 medium" },
        { name: "Carrots", quantity: "2 medium" },
        { name: "Snow peas", quantity: "1 cup" },
        { name: "Garlic", quantity: "3 cloves" },
        { name: "Ginger", quantity: "1 tbsp grated" },
        { name: "Low-sodium soy sauce", quantity: "3 tbsp" },
        { name: "Sesame oil", quantity: "2 tsp" },
        { name: "Rice vinegar", quantity: "1 tbsp" },
        { name: "Red pepper flakes", quantity: "1/4 tsp" },
        { name: "Green onions", quantity: "3" },
        { name: "Sesame seeds", quantity: "1 tbsp" },
        { name: "Olive oil", quantity: "1 tbsp" }
      ],
      instructions: [
        "Heat olive oil in a large skillet or wok over medium-high heat.",
        "Add ground turkey and cook, breaking it up, until no longer pink (5-7 minutes).",
        "Add minced garlic and grated ginger, cook for 30 seconds.",
        "Add sliced carrots, cook for 2 minutes.",
        "Add broccoli and bell peppers, cook for another 3-4 minutes.",
        "Add snow peas and cook for 1-2 minutes until vegetables are crisp-tender.",
        "In a small bowl, whisk together soy sauce, sesame oil, rice vinegar, and red pepper flakes.",
        "Pour sauce over the stir-fry and toss to coat. Cook for 1 minute more.",
        "Garnish with sliced green onions and sesame seeds before serving."
      ],
      nutrition: {
        calories: 290,
        protein: 28,
        carbs: 14,
        fat: 15,
        fiber: 4,
        sugar: 6
      }
    },
    {
      id: 12,
      name: "Overnight Oats with Berries",
      image: "https://images.unsplash.com/photo-1624300603538-1840de7fdc3f",
      dietType: ["vegetarian", "vegan", "high-fiber"],
      prepTime: "5 min + overnight",
      servings: 1,
      description: "A convenient make-ahead breakfast that's customizable and packed with fiber and nutrients.",
      ingredients: [
        { name: "Rolled oats", quantity: "1/2 cup" },
        { name: "Chia seeds", quantity: "1 tbsp" },
        { name: "Plant-based milk", quantity: "3/4 cup" },
        { name: "Greek yogurt (or plant-based alternative)", quantity: "1/4 cup" },
        { name: "Mixed berries", quantity: "1/2 cup" },
        { name: "Maple syrup", quantity: "1 tsp" },
        { name: "Vanilla extract", quantity: "1/4 tsp" },
        { name: "Cinnamon", quantity: "1/4 tsp" },
        { name: "Toppings", quantity: "nuts, seeds, nut butter" }
      ],
      instructions: [
        "In a jar or container, combine oats, chia seeds, milk, yogurt, maple syrup, vanilla, and cinnamon.",
        "Stir well to combine.",
        "Fold in half of the berries.",
        "Cover and refrigerate overnight or for at least 4 hours.",
        "Before serving, top with remaining berries and additional toppings of choice."
      ],
      nutrition: {
        calories: 320,
        protein: 16,
        carbs: 52,
        fat: 8,
        fiber: 12,
        sugar: 14
      }
    },
    {
      id: 13,
      name: "Kale and White Bean Soup",
      image: "https://images.unsplash.com/photo-1576169884431-73d5dd7aff56",
      dietType: ["vegetarian", "vegan", "high-fiber"],
      prepTime: "40 min",
      servings: 6,
      description: "A hearty, nutritious soup filled with leafy greens, beans, and aromatic vegetables.",
      ingredients: [
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Onion", quantity: "1 large" },
        { name: "Carrots", quantity: "2 medium" },
        { name: "Celery", quantity: "2 stalks" },
        { name: "Garlic", quantity: "4 cloves" },
        { name: "Vegetable broth", quantity: "6 cups" },
        { name: "White beans", quantity: "2 cans (15 oz each)" },
        { name: "Kale", quantity: "1 large bunch" },
        { name: "Diced tomatoes", quantity: "1 can (14 oz)" },
        { name: "Italian herbs", quantity: "2 tsp" },
        { name: "Bay leaf", quantity: "1" },
        { name: "Nutritional yeast", quantity: "2 tbsp" },
        { name: "Lemon juice", quantity: "2 tbsp" },
        { name: "Salt and pepper", quantity: "to taste" }
      ],
      instructions: [
        "Heat olive oil in a large pot over medium heat.",
        "Add diced onion, carrots, and celery. Cook for 5-7 minutes until softened.",
        "Add minced garlic and cook for another minute until fragrant.",
        "Add vegetable broth, one can of drained white beans, diced tomatoes, Italian herbs, and bay leaf.",
        "Bring to a boil, then reduce heat and simmer for 15 minutes.",
        "While soup is simmering, purée the second can of white beans with 1/2 cup of the broth.",
        "Add the bean purée to the soup to thicken it.",
        "Add chopped kale and simmer for another 10 minutes until kale is tender.",
        "Remove bay leaf. Stir in nutritional yeast and lemon juice.",
        "Season with salt and pepper to taste before serving."
      ],
      nutrition: {
        calories: 220,
        protein: 12,
        carbs: 36,
        fat: 5,
        fiber: 10,
        sugar: 6
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-10"></div>
        <div className="h-96 w-full overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352" 
            alt="Healthy recipes" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-8 z-20">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Healthy Recipes</h1>
            <p className="text-xl text-white/90 mt-2 drop-shadow-md max-w-2xl mx-auto">
              Discover delicious, nutritious meals with detailed nutrition information
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map(recipe => (
              <Card key={recipe.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{recipe.name}</CardTitle>
                  <CardDescription className="mt-1 line-clamp-2">{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {recipe.prepTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {recipe.servings} servings
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {recipe.dietType.map(diet => (
                      <span 
                        key={diet} 
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium capitalize"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold mb-2">Nutrition Per Serving</h3>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div>
                        <p className="text-xs text-gray-500">Calories</p>
                        <p className="font-medium">{recipe.nutrition.calories}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Protein</p>
                        <p className="font-medium">{recipe.nutrition.protein}g</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Carbs</p>
                        <p className="font-medium">{recipe.nutrition.carbs}g</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Fat</p>
                        <p className="font-medium">{recipe.nutrition.fat}g</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => toggleRecipeExpand(recipe.id)}
                  >
                    {expandedRecipe === recipe.id ? "Hide Details" : "View Recipe"}
                  </Button>
                </CardFooter>
                
                {/* Expanded Recipe Details */}
                {expandedRecipe === recipe.id && (
                  <div className="px-6 pb-6 space-y-4 border-t pt-4 mt-4">
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Utensils className="h-4 w-4" />
                        Ingredients
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {recipe.ingredients.map((ingredient, idx) => (
                          <li key={idx} className="text-sm">
                            <span className="font-medium">{ingredient.quantity}</span> {ingredient.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg">Instructions</h3>
                      <ol className="mt-2 space-y-2 list-decimal list-inside">
                        {recipe.instructions.map((step, idx) => (
                          <li key={idx} className="text-sm">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-semibold mb-2">Complete Nutrition Facts (per serving)</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Calories: <span className="font-medium">{recipe.nutrition.calories}</span></div>
                        <div>Protein: <span className="font-medium">{recipe.nutrition.protein}g</span></div>
                        <div>Carbs: <span className="font-medium">{recipe.nutrition.carbs}g</span></div>
                        <div>Fat: <span className="font-medium">{recipe.nutrition.fat}g</span></div>
                        {recipe.nutrition.fiber && (
                          <div>Fiber: <span className="font-medium">{recipe.nutrition.fiber}g</span></div>
                        )}
                        {recipe.nutrition.sugar && (
                          <div>Sugar: <span className="font-medium">{recipe.nutrition.sugar}g</span></div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
