
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HealthRecommendation } from "@/types/health";
import { Apple, Cherry, Brain, Leaf, UtensilsCrossed, Salad } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HealthRecommendationsProps {
  recommendation: HealthRecommendation;
}

const HealthRecommendations: React.FC<HealthRecommendationsProps> = ({
  recommendation,
}) => {
  const { condition, dailyNutritionTargets, dietaryGuidelines, mealPlan } = recommendation;

  // Determine the diet type badge to display
  const getDietTypeBadge = () => {
    if (condition === "vegan") {
      return <Badge className="bg-green-500 hover:bg-green-600">Vegan</Badge>;
    } else if (condition === "non-vegetarian") {
      return <Badge className="bg-orange-500 hover:bg-orange-600">Non-Vegetarian</Badge>;
    }
    return <Badge className="bg-blue-500 hover:bg-blue-600">Medical Diet</Badge>;
  };

  const renderNutritionFacts = (calories: number, protein: number, carbs: number, fat: number, fiber: number, sugar: number) => (
    <div className="bg-gray-50 p-4 rounded-md">
      <h4 className="text-sm font-semibold mb-2 text-gray-700">Nutrition Facts</h4>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Calories:</span>
          <span className="font-medium">{calories} kcal</span>
        </div>
        <div className="flex justify-between">
          <span>Protein:</span>
          <span className="font-medium">{protein}g</span>
        </div>
        <div className="flex justify-between">
          <span>Carbohydrates:</span>
          <span className="font-medium">{carbs}g</span>
        </div>
        <div className="flex justify-between">
          <span>Fat:</span>
          <span className="font-medium">{fat}g</span>
        </div>
        <div className="flex justify-between">
          <span>Fiber:</span>
          <span className="font-medium">{fiber}g</span>
        </div>
        <div className="flex justify-between">
          <span>Sugar:</span>
          <span className="font-medium">{sugar}g</span>
        </div>
      </div>
    </div>
  );

  const renderIngredients = (ingredients: { name: string; amount: string }[]) => (
    <div>
      <h4 className="text-sm font-semibold mb-2 text-gray-700">Ingredients</h4>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>
            {ingredient.amount} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderInstructions = (instructions: string[]) => (
    <div>
      <h4 className="text-sm font-semibold mb-2 text-gray-700">Instructions</h4>
      <ol className="list-decimal list-inside space-y-1 text-sm">
        {instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );

  const renderBenefits = (benefits: string[]) => (
    <div className="mt-3">
      <h4 className="text-sm font-semibold mb-2 text-gray-700">Health Benefits</h4>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {benefits.map((benefit, idx) => (
          <li key={idx}>{benefit}</li>
        ))}
      </ul>
    </div>
  );

  const getMealIcon = (title: string) => {
    if (title === "Breakfast") return <Apple className="h-5 w-5 text-yellow-600" />;
    if (title === "Lunch") return <Cherry className="h-5 w-5 text-red-600" />;
    if (title === "Dinner") return <Brain className="h-5 w-5 text-purple-600" />;
    return null;
  };

  const renderMeal = (meal: typeof mealPlan.breakfast, title: string) => (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex items-center gap-2 mb-3">
        {getMealIcon(title)}
        <h3 className="font-medium">{title}: {meal.name}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {renderIngredients(meal.ingredients)}
          {renderBenefits(meal.benefits)}
        </div>
        <div className="space-y-4">
          {renderNutritionFacts(
            meal.nutritionInfo.calories,
            meal.nutritionInfo.protein,
            meal.nutritionInfo.carbs,
            meal.nutritionInfo.fat,
            meal.nutritionInfo.fiber,
            meal.nutritionInfo.sugar
          )}
          {renderInstructions(meal.instructions)}
        </div>
      </div>
    </div>
  );

  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Personalized {condition} Meal Plan</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Customized nutrition plan based on your health profile
          </p>
        </div>
        <div>{getDietTypeBadge()}</div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="plan">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="plan">Meal Plan</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Targets</TabsTrigger>
            <TabsTrigger value="guidelines">Dietary Guidelines</TabsTrigger>
          </TabsList>
          
          <TabsContent value="plan" className="pt-4">
            {renderMeal(mealPlan.breakfast, "Breakfast")}
            {renderMeal(mealPlan.lunch, "Lunch")}
            {renderMeal(mealPlan.dinner, "Dinner")}
            
            <h3 className="font-medium mb-3 mt-6">Snacks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mealPlan.snacks.map((snack, idx) => (
                <div key={idx} className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">{snack.name}</h4>
                  {renderIngredients(snack.ingredients)}
                  {renderNutritionFacts(
                    snack.nutritionInfo.calories,
                    snack.nutritionInfo.protein,
                    snack.nutritionInfo.carbs,
                    snack.nutritionInfo.fat,
                    snack.nutritionInfo.fiber,
                    snack.nutritionInfo.sugar
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nutrition" className="pt-4">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-lg font-medium mb-4">Daily Nutrition Targets</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Calories</span>
                  <span>{dailyNutritionTargets.calories.min} - {dailyNutritionTargets.calories.max} kcal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Protein</span>
                  <span>{dailyNutritionTargets.protein.min} - {dailyNutritionTargets.protein.max}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Carbohydrates</span>
                  <span>{dailyNutritionTargets.carbs.min} - {dailyNutritionTargets.carbs.max}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fat</span>
                  <span>{dailyNutritionTargets.fat.min} - {dailyNutritionTargets.fat.max}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fiber</span>
                  <span>{dailyNutritionTargets.fiber.min} - {dailyNutritionTargets.fiber.max}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sugar</span>
                  <span>≤ {dailyNutritionTargets.sugar.max}g</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="guidelines" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-md">
                <h3 className="text-green-800 font-medium mb-3">Foods to Include</h3>
                <ul className="list-disc list-inside space-y-2">
                  {dietaryGuidelines.recommended.map((food, idx) => (
                    <li key={idx} className="text-green-700">{food}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-md">
                <h3 className="text-red-800 font-medium mb-3">Foods to Avoid</h3>
                <ul className="list-disc list-inside space-y-2">
                  {dietaryGuidelines.avoid.map((food, idx) => (
                    <li key={idx} className="text-red-700">{food}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HealthRecommendations;
