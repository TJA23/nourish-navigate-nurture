
import React from 'react';
import { HealthCondition } from '../types/health';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface DietaryGuidelinesProps {
  condition: HealthCondition;
  dietaryNotes: string[];
}

const DietaryGuidelines = ({ condition, dietaryNotes }: DietaryGuidelinesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dietary Guidelines for {condition.charAt(0).toUpperCase() + condition.slice(1)} Health</CardTitle>
        <CardDescription>Follow these recommendations for optimal health</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h3 className="font-medium">Key Recommendations:</h3>
          <ul className="list-disc list-inside space-y-1">
            {dietaryNotes.map((note, idx) => (
              <li key={idx} className="text-sm">{note}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DietaryGuidelines;
