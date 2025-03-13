import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Heart, Droplets, Stethoscope, Pill, ActivitySquare, Cherry } from "lucide-react";

const HealthAdvice = () => {
  const [query, setQuery] = useState("");
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (query.toLowerCase().includes("exercise")) {
        setAdvice("Regular exercise is important for maintaining good health. Aim for at least 30 minutes of moderate exercise most days of the week.");
      } else if (query.toLowerCase().includes("diet")) {
        setAdvice("A balanced diet rich in fruits, vegetables, lean proteins, and whole grains is essential for overall well-being.");
      } else if (query.toLowerCase().includes("sleep")) {
        setAdvice("Aim for 7-8 hours of quality sleep each night to allow your body to rest and repair.");
      } else {
        setAdvice("This is a demo. Please ask about 'exercise', 'diet', or 'sleep' for relevant advice.");
      }
    } catch (e: any) {
      setError("Failed to fetch advice. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-24 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-primary" />
            <span>Your Health Journey Starts Here</span>
          </CardTitle>
          <CardDescription>Personalized advice for a healthier life.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="space-y-4">
            <TabsList>
              <TabsTrigger value="general">General Wellness</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
              <TabsTrigger value="mental">Mental Health</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="space-y-2">
              <Alert>
                <Heart className="h-4 w-4" />
                <AlertTitle>Tip for Today</AlertTitle>
                <AlertDescription>
                  Stay hydrated! Drinking enough water is crucial for energy levels and overall health.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="nutrition" className="space-y-2">
              <Alert>
                <Cherry className="h-4 w-4" />
                <AlertTitle>Nutrition Advice</AlertTitle>
                <AlertDescription>
                  Incorporate a variety of colorful fruits and vegetables into your daily meals for a wide range of vitamins and minerals.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="fitness" className="space-y-2">
              <Alert>
                <ActivitySquare className="h-4 w-4" />
                <AlertTitle>Fitness Tip</AlertTitle>
                <AlertDescription>
                  Find an activity you enjoy, whether it's dancing, hiking, or swimming, to make exercise a fun and sustainable part of your routine.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="mental" className="space-y-2">
              <Alert>
                <Stethoscope className="h-4 w-4" />
                <AlertTitle>Mental Wellness</AlertTitle>
                <AlertDescription>
                  Take a few minutes each day to practice mindfulness or meditation to reduce stress and improve mental clarity.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <form onSubmit={handleQuerySubmit} className="flex space-x-2">
              <Input
                type="text"
                placeholder="Ask a question about health..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Get Advice"}
              </Button>
            </form>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {advice && (
              <div className="mt-4 p-4 rounded-md bg-gray-50 border border-gray-200">
                <h4 className="font-semibold">Advice:</h4>
                <p>{advice}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthAdvice;
