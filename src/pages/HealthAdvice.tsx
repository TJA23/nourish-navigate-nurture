
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { Heart, Stethoscope, MessageSquare, Plus, CircleHelp } from "lucide-react";

type HealthCondition = 
  | "heart disease" 
  | "diabetes" 
  | "kidney disease" 
  | "liver disease" 
  | "joint issues" 
  | "pcos" 
  | "general";

interface AdviceData {
  title: string;
  description: string;
  tips: string[];
  foods: {
    eat: string[];
    limit: string[];
  };
  icon: React.ReactNode;
}

const HealthAdvice = () => {
  const [selectedCondition, setSelectedCondition] = useState<HealthCondition>("general");
  const [userQuestion, setUserQuestion] = useState("");
  const [messages, setMessages] = useState<{type: "user" | "ai", text: string}[]>([
    { type: "ai", text: "Hello! I'm your health assistant. How can I help you today? You can ask me about managing different health conditions." }
  ]);

  const handleSendMessage = () => {
    if (!userQuestion.trim()) return;
    
    const newMessages = [
      ...messages,
      { type: "user", text: userQuestion }
    ];
    
    setMessages(newMessages);
    
    // Simulate AI response based on user question
    setTimeout(() => {
      const aiResponse = getAIResponse(userQuestion, selectedCondition);
      setMessages([...newMessages, { type: "ai", text: aiResponse }]);
    }, 1000);
    
    setUserQuestion("");
  };

  const getAIResponse = (question: string, condition: HealthCondition): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerQuestion.includes("diet") || lowerQuestion.includes("food") || lowerQuestion.includes("eat")) {
      const adviceObj = getHealthAdvice(condition);
      return `For ${condition}, it's recommended to eat foods like ${adviceObj.foods.eat.join(", ")}. You should limit ${adviceObj.foods.limit.join(", ")}.`;
    }
    
    if (lowerQuestion.includes("exercise") || lowerQuestion.includes("activity")) {
      switch(condition) {
        case "heart disease":
          return "Regular, moderate exercise is beneficial for heart health. Aim for at least 150 minutes of moderate activity per week. Always consult your doctor before starting a new exercise routine.";
        case "diabetes":
          return "Regular physical activity can help control blood sugar levels. Both aerobic exercises and strength training are beneficial. Monitor your blood sugar before and after exercise.";
        case "kidney disease":
          return "Light to moderate exercise can be beneficial, but intensity should be based on your specific condition. Walking, swimming, and cycling are good options. Consult your nephrologist.";
        case "liver disease":
          return "Gentle exercise can help manage weight, which is important for liver health. Walking, swimming, and yoga are good options. Avoid strenuous activities that might strain your body.";
        case "joint issues":
          return "Low-impact exercises like swimming, water aerobics, and cycling are ideal. Focus on range of motion and strengthening exercises. Avoid high-impact activities that stress your joints.";
        case "pcos":
          return "Regular exercise helps manage PCOS symptoms by improving insulin sensitivity and helping with weight management. Aim for a mix of cardio and strength training.";
        default:
          return "Regular physical activity is important for overall health. Aim for a mix of cardio, strength training, and flexibility exercises. Always listen to your body.";
      }
    }
    
    if (lowerQuestion.includes("symptom") || lowerQuestion.includes("sign")) {
      switch(condition) {
        case "heart disease":
          return "Common heart disease symptoms include chest pain, shortness of breath, pain in the neck/jaw/throat/upper abdomen/back, and fatigue. If you experience these, seek medical attention immediately.";
        case "diabetes":
          return "Diabetes symptoms may include increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue, irritability, and blurred vision.";
        case "kidney disease":
          return "Early kidney disease often has no symptoms. Later signs include fatigue, difficulty concentrating, poor appetite, trouble sleeping, muscle cramps, and swollen feet/ankles.";
        case "liver disease":
          return "Liver disease symptoms may include yellowing of skin/eyes, abdominal pain/swelling, swelling in legs/ankles, itchy skin, dark urine, pale stool, and chronic fatigue.";
        case "joint issues":
          return "Joint problems typically present as pain, stiffness, swelling, decreased range of motion, and sometimes redness or warmth in the affected area.";
        case "pcos":
          return "PCOS symptoms can include irregular periods, excess androgen (resulting in excess facial/body hair, acne), polycystic ovaries, and weight gain.";
        default:
          return "Symptoms vary greatly depending on the specific health condition. Could you please specify which condition you're asking about?";
      }
    }
    
    // Default response
    return `I understand you're asking about ${condition}. To give you the best advice, could you provide more specific details about what you'd like to know? You can ask about diet, exercise, symptoms, or management strategies.`;
  };

  const getHealthAdvice = (condition: HealthCondition): AdviceData => {
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
          icon: <Heart className="h-8 w-8 text-red-500" />
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
          icon: <Stethoscope className="h-8 w-8 text-blue-500" />
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
          icon: <Stethoscope className="h-8 w-8 text-purple-500" />
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
          icon: <Stethoscope className="h-8 w-8 text-green-500" />
        };
      
      case "joint issues":
        return {
          title: "Joint Issues Management",
          description: "Joint issues include various conditions that cause pain, inflammation, and stiffness in the joints, such as arthritis, bursitis, and tendinitis.",
          tips: [
            "Maintain a healthy weight",
            "Exercise regularly with low-impact activities",
            "Use hot and cold therapy for pain",
            "Consider physical therapy",
            "Use assistive devices if necessary",
            "Take medications as prescribed"
          ],
          foods: {
            eat: ["fatty fish", "nuts", "seeds", "olive oil", "fruits", "vegetables", "whole grains"],
            limit: ["processed foods", "red meat", "sugar", "salt", "alcohol"]
          },
          icon: <Stethoscope className="h-8 w-8 text-orange-500" />
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
          icon: <Stethoscope className="h-8 w-8 text-pink-500" />
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
            limit: ["processed foods", "added sugars", "excessive salt", "trans fats", "excessive alcohol"]
          },
          icon: <Heart className="h-8 w-8 text-emerald-500" />
        };
    }
  };

  const adviceData = getHealthAdvice(selectedCondition);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-10"></div>
        <div className="h-96 w-full overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" 
            alt="Health Advice" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-8 z-20">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Health Advice</h1>
            <p className="text-xl text-white/90 mt-2 drop-shadow-md max-w-2xl mx-auto">
              Expert guidance for managing various health conditions
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Condition selection and info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                <h2 className="text-2xl font-bold mb-4">Select a Health Condition</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["heart disease", "diabetes", "kidney disease", "liver disease", "joint issues", "pcos", "general"].map((condition) => (
                    <Button
                      key={condition}
                      variant={selectedCondition === condition ? "default" : "outline"}
                      className="justify-start"
                      onClick={() => setSelectedCondition(condition as HealthCondition)}
                    >
                      {condition === "heart disease" && <Heart className="mr-2 h-4 w-4" />}
                      {condition !== "heart disease" && <Stethoscope className="mr-2 h-4 w-4" />}
                      {condition.charAt(0).toUpperCase() + condition.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Advice Content */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  {adviceData.icon}
                  <div>
                    <CardTitle>{adviceData.title}</CardTitle>
                    <CardDescription className="mt-1.5">{adviceData.description}</CardDescription>
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
            </div>
            
            {/* AI Assistant */}
            <div className="lg:col-span-1">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Health Assistant
                  </CardTitle>
                  <CardDescription>
                    Ask questions about managing your health condition
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="flex-grow bg-gray-50 rounded-md p-4 mb-4 overflow-y-auto h-[400px]">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`mb-4 ${message.type === "user" ? "text-right" : "text-left"}`}
                      >
                        <div 
                          className={`inline-block p-3 rounded-lg max-w-[85%] ${
                            message.type === "user" 
                              ? "bg-primary text-white" 
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Ask about diet, exercise, symptoms..."
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button onClick={handleSendMessage}>
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthAdvice;
