
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, CircleHelp } from "lucide-react";
import { HealthCondition } from "@/types/health";

type AdviceData = {
  title: string;
  description: string;
  tips: string[];
  foods: {
    eat: string[];
    limit: string[];
  };
  icon: React.ReactNode;
}

interface HealthAdviceCardProps {
  adviceData: AdviceData;
}

const HealthAdviceCard: React.FC<HealthAdviceCardProps> = ({ adviceData }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        {adviceData.icon}
        <div>
          <CardTitle>{adviceData.title}</CardTitle>
          <p className="mt-1.5 text-sm text-muted-foreground">{adviceData.description}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Management Tips</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {adviceData.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Plus className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Dietary Recommendations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-md">
              <h4 className="font-medium text-green-700 mb-2">Foods to Include</h4>
              <ul className="space-y-1">
                {adviceData.foods.eat.map((food, index) => (
                  <li key={index} className="text-green-600">• {food}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <h4 className="font-medium text-red-700 mb-2">Foods to Limit</h4>
              <ul className="space-y-1">
                {adviceData.foods.limit.map((food, index) => (
                  <li key={index} className="text-red-600">• {food}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md">
          <p className="text-blue-700 flex items-center gap-2">
            <CircleHelp className="w-5 h-5" />
            <span>Always consult with your healthcare provider before making significant changes to your diet or exercise routine.</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthAdviceCard;
