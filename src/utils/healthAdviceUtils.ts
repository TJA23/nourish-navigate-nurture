
import React from "react";
import { Heart, Stethoscope, Activity, Salad, UtensilsCrossed } from "lucide-react";
import { HealthCondition } from "@/types/health";

export type AdviceData = {
  title: string;
  description: string;
  tips: string[];
  foods: {
    eat: string[];
    limit: string[];
  };
  icon: React.ReactNode;
}

export const getHealthAdvice = (condition: HealthCondition): AdviceData => {
  switch(condition) {
    case "heart disease":
      return {
        title: "Heart Disease Management",
        description: "Heart disease refers to several types of heart conditions. The most common is coronary artery disease, which affects blood flow to the heart and can lead to a heart attack.",
        tips: [
          "Take medications as prescribed",
          "Attend regular check-ups",
          "Monitor blood pressure and cholesterol",
          "Manage stress levels",
          "Quit smoking if applicable",
          "Limit alcohol consumption"
        ],
        foods: {
          eat: ["fruits", "vegetables", "whole grains", "lean proteins", "fatty fish", "nuts", "legumes"],
          limit: ["salt", "saturated fats", "trans fats", "processed foods", "red meat", "sugar"]
        },
        icon: React.createElement(Heart, { className: "h-8 w-8 text-red-500" })
      };
    
    case "diabetes":
      return {
        title: "Diabetes Management",
        description: "Diabetes is a chronic condition that affects how your body turns food into energy. It occurs when your blood glucose (blood sugar) is too high.",
        tips: [
          "Monitor blood sugar regularly",
          "Take medications or insulin as prescribed",
          "Maintain a healthy weight",
          "Exercise regularly",
          "Attend regular check-ups",
          "Check your feet daily for cuts or sores"
        ],
        foods: {
          eat: ["non-starchy vegetables", "fruits in moderation", "whole grains", "lean proteins", "healthy fats"],
          limit: ["refined carbohydrates", "sugary foods", "processed foods", "sugary drinks", "alcohol"]
        },
        icon: React.createElement(Stethoscope, { className: "h-8 w-8 text-blue-500" })
      };
    
    case "kidney disease":
      return {
        title: "Kidney Disease Management",
        description: "Kidney disease means your kidneys are damaged and can't filter blood the way they should. This damage can cause wastes to build up in your body.",
        tips: [
          "Control blood pressure and diabetes",
          "Take medications as prescribed",
          "Avoid NSAIDs",
          "Quit smoking if applicable",
          "Maintain a healthy weight",
          "Attend regular check-ups"
        ],
        foods: {
          eat: ["fruits low in potassium", "vegetables low in potassium", "egg whites", "lean proteins in moderation"],
          limit: ["salt", "potassium", "phosphorus", "protein (in later stages)", "processed foods"]
        },
        icon: React.createElement(Activity, { className: "h-8 w-8 text-purple-500" })
      };
    
    case "liver disease":
      return {
        title: "Liver Disease Management",
        description: "Liver disease refers to any condition that damages your liver and prevents it from functioning well. The liver is vital for digesting food and ridding your body of toxic substances.",
        tips: [
          "Avoid alcohol",
          "Maintain a healthy weight",
          "Take medications as prescribed",
          "Get vaccinated against hepatitis",
          "Avoid sharing needles",
          "Practice safe sex"
        ],
        foods: {
          eat: ["fruits", "vegetables", "whole grains", "lean proteins", "healthy fats"],
          limit: ["alcohol", "fatty foods", "added sugars", "salt", "red meat"]
        },
        icon: React.createElement(Stethoscope, { className: "h-8 w-8 text-green-500" })
      };
    
    case "pcos":
      return {
        title: "PCOS Management",
        description: "Polycystic ovary syndrome (PCOS) is a hormonal disorder causing enlarged ovaries with small cysts on the outer edges. It can affect menstruation, fertility, insulin levels, and appearance.",
        tips: [
          "Maintain a healthy weight",
          "Exercise regularly",
          "Manage stress",
          "Take medications as prescribed",
          "Consider hormonal birth control for menstrual regulation",
          "Monitor for diabetes"
        ],
        foods: {
          eat: ["high-fiber foods", "lean proteins", "anti-inflammatory foods", "fruits", "vegetables", "healthy fats"],
          limit: ["refined carbohydrates", "sugary foods", "processed foods", "inflammatory foods"]
        },
        icon: React.createElement(Stethoscope, { className: "h-8 w-8 text-pink-500" })
      };
      
    case "vegan":
      return {
        title: "Vegan Diet Plan",
        description: "A plant-based diet that excludes all animal products including meat, dairy, eggs, and honey.",
        tips: [
          "Ensure adequate vitamin B12 intake through supplements or fortified foods",
          "Include protein-rich plant foods like legumes, tofu, and tempeh",
          "Diversify your diet to get all essential nutrients",
          "Monitor iron and calcium intake",
          "Consider omega-3 supplements from algae sources",
          "Stay hydrated"
        ],
        foods: {
          eat: ["legumes", "whole grains", "nuts and seeds", "fruits", "vegetables", "plant-based milk", "nutritional yeast"],
          limit: ["processed vegan foods", "excessive sugar", "high-sodium foods", "refined carbohydrates"]
        },
        icon: React.createElement(Salad, { className: "h-8 w-8 text-green-500" })
      };
      
    case "non-vegetarian":
      return {
        title: "Non-Vegetarian Diet Plan",
        description: "A diet that includes animal products like meat, fish, and poultry.",
        tips: [
          "Choose lean cuts of meat",
          "Include fatty fish like salmon twice a week",
          "Balance your plate with vegetables and whole grains",
          "Limit processed meats",
          "Practice portion control with animal proteins",
          "Include vegetable proteins like legumes regularly"
        ],
        foods: {
          eat: ["lean meats", "fish", "eggs", "whole grains", "fruits", "vegetables", "nuts and seeds"],
          limit: ["processed meats", "excessive red meat", "fried foods", "high-fat dairy", "refined carbohydrates"]
        },
        icon: React.createElement(UtensilsCrossed, { className: "h-8 w-8 text-orange-500" })
      };
    
    default:
      return {
        title: "General Health Advice",
        description: "These general health principles can help maintain overall wellness, prevent chronic diseases, and promote longevity.",
        tips: [
          "Eat a balanced, nutritious diet",
          "Exercise regularly",
          "Get adequate sleep",
          "Manage stress",
          "Stay hydrated",
          "Avoid smoking and limit alcohol",
          "Get regular check-ups"
        ],
        foods: {
          eat: ["fruits", "vegetables", "whole grains", "lean proteins", "healthy fats", "nuts", "seeds"],
          limit: ["processed foods", "added sugars", "trans fats", "excessive sodium", "excessive alcohol"]
        },
        icon: React.createElement(Heart, { className: "h-8 w-8 text-emerald-500" })
      };
  }
};
