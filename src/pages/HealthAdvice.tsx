
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send, Heart, Kidney, ActivitySquare, Star, UserCircle2 } from "lucide-react";

type MessageType = {
  type: "user" | "ai";
  text: string;
};

const HealthAdvice = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      type: "ai",
      text: "Hello! I'm your health assistant. I can provide general advice about various health conditions like heart disease, diabetes, kidney issues, liver concerns, joint problems, and PCOS. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [activeCondition, setActiveCondition] = useState("heart");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages: MessageType[] = [
      ...messages,
      { type: "user", text: input }
    ];
    setMessages(newMessages);

    // Simulate AI response
    setTimeout(() => {
      let response = "";
      const userQuery = input.toLowerCase();

      if (userQuery.includes("heart") || activeCondition === "heart") {
        response = "For heart health, it's important to maintain a healthy diet low in saturated fats and sodium, exercise regularly, avoid smoking, limit alcohol consumption, and manage stress effectively. Regular check-ups to monitor blood pressure and cholesterol are also crucial.";
      } else if (userQuery.includes("diabetes") || activeCondition === "diabetes") {
        response = "Managing diabetes involves monitoring blood sugar levels, taking prescribed medications, following a balanced diet rich in fiber and low in simple carbohydrates, staying physically active, and maintaining a healthy weight.";
      } else if (userQuery.includes("kidney") || activeCondition === "kidney") {
        response = "For kidney health, stay well-hydrated, maintain a healthy blood pressure, limit sodium intake, avoid excessive protein consumption, and be cautious with over-the-counter pain medications that can affect kidney function.";
      } else if (userQuery.includes("liver") || activeCondition === "liver") {
        response = "To support liver health, limit alcohol consumption, maintain a healthy weight, eat a balanced diet, avoid unnecessary medications, and get vaccinated against hepatitis A and B if recommended by your healthcare provider.";
      } else if (userQuery.includes("joint") || activeCondition === "joint") {
        response = "For joint health, maintain a healthy weight to reduce stress on joints, engage in low-impact exercises like swimming or cycling, include anti-inflammatory foods in your diet, and consider supplements like glucosamine if recommended by your healthcare provider.";
      } else if (userQuery.includes("pcos") || activeCondition === "pcos")) {
        response = "Managing PCOS often involves maintaining a healthy weight through regular exercise and a balanced diet, possibly taking medications to regulate menstrual cycles and reduce symptoms, and regular monitoring with a healthcare provider.";
      } else {
        response = "I can provide general advice about heart disease, diabetes, kidney issues, liver concerns, joint problems, and PCOS. Could you please specify which health condition you'd like information about?";
      }

      setMessages(prev => [...prev, { type: "ai", text: response }]);
    }, 1000);

    setInput("");
  };

  const healthConditions = [
    { id: "heart", name: "Heart Disease", icon: <Heart className="h-4 w-4" /> },
    { id: "diabetes", name: "Diabetes", icon: <ActivitySquare className="h-4 w-4" /> },
    { id: "kidney", name: "Kidney Issues", icon: <Kidney className="h-4 w-4" /> },
    { id: "liver", name: "Liver Concerns", icon: <Star className="h-4 w-4" /> },
    { id: "joint", name: "Joint Problems", icon: <ActivitySquare className="h-4 w-4" /> },
    { id: "pcos", name: "PCOS", icon: <UserCircle2 className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Health Advice Assistant</h1>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="assistant" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
              <TabsTrigger value="resources">Health Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="assistant" className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {healthConditions.map((condition) => (
                  <Button
                    key={condition.id}
                    variant={activeCondition === condition.id ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => {
                      setActiveCondition(condition.id);
                      setMessages(prev => [
                        ...prev,
                        { 
                          type: "ai", 
                          text: `Let me provide some information about ${condition.name}. What specific aspect would you like to know?` 
                        }
                      ]);
                    }}
                  >
                    {condition.icon}
                    <span className="ml-2">{condition.name}</span>
                  </Button>
                ))}
              </div>

              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium">Health Assistant Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4 p-1">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div 
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.type === "user" 
                              ? "bg-primary text-white rounded-tr-none" 
                              : "bg-gray-100 text-gray-800 rounded-tl-none"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your health question..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <Button onClick={handleSend}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle>Helpful Health Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Heart Disease</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>American Heart Association - <a href="https://www.heart.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.heart.org</a></li>
                      <li>CDC Heart Disease Information - <a href="https://www.cdc.gov/heartdisease/" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.cdc.gov/heartdisease</a></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Diabetes</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>American Diabetes Association - <a href="https://www.diabetes.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.diabetes.org</a></li>
                      <li>National Institute of Diabetes - <a href="https://www.niddk.nih.gov/health-information/diabetes" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.niddk.nih.gov</a></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Kidney Health</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>National Kidney Foundation - <a href="https://www.kidney.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.kidney.org</a></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Liver Health</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>American Liver Foundation - <a href="https://liverfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">liverfoundation.org</a></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Joint Health</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Arthritis Foundation - <a href="https://www.arthritis.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.arthritis.org</a></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">PCOS</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>PCOS Awareness Association - <a href="https://www.pcosaa.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.pcosaa.org</a></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HealthAdvice;
