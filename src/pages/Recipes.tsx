
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { Search, ChevronDown, ChevronUp, Clock, Utensils, Users } from "lucide-react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDiet, setFilterDiet] = useState<string[]>([]);
  const [expandedRecipe, setExpandedRecipe] = useState<number | null>(null);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleRecipeExpand = (id: number) => {
    setExpandedRecipe(expandedRecipe === id ? null : id);
  };

  const toggleDietFilter = (diet: string) => {
    if (filterDiet.includes(diet)) {
      setFilterDiet(filterDiet.filter(d => d !== diet));
    } else {
      setFilterDiet([...filterDiet, diet]);
    }
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
    }
  ];

  const filteredRecipes = recipes
    .filter(recipe => 
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(recipe => 
      filterDiet.length === 0 || 
      filterDiet.some(diet => recipe.dietType.includes(diet))
    );

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
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  className="pl-10 pr-4"
                  placeholder="Search recipes..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setFiltersVisible(!filtersVisible)}
                className="w-full md:w-auto flex items-center gap-2"
              >
                Filters
                {filtersVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
            </div>
            
            {filtersVisible && (
              <div className="mt-4 pt-4 border-t">
                <h3 className="font-medium mb-2">Diet Type</h3>
                <div className="flex flex-wrap gap-2">
                  {["vegetarian", "vegan", "gluten-free", "non-vegetarian", "keto"].map(diet => (
                    <Button
                      key={diet}
                      variant={filterDiet.includes(diet) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleDietFilter(diet)}
                      className="capitalize"
                    >
                      {diet}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map(recipe => (
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No recipes found. Try adjusting your search filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
