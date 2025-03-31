
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { HealthCondition } from "@/types/health";

interface HealthAssistantProps {
  selectedCondition: HealthCondition;
  onShowPersonalizedForm: () => void;
}

type Message = {
  type: "user" | "ai";
  text: string;
};

const HealthAssistant: React.FC<HealthAssistantProps> = ({ 
  selectedCondition,
  onShowPersonalizedForm
}) => {
  const [userQuestion, setUserQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { type: "ai", text: "Hello! I'm your health assistant. How can I help you today? You can ask me about managing different health conditions." }
  ]);

  const handleSendMessage = () => {
    if (!userQuestion.trim()) return;
    
    const newMessages = [
      ...messages,
      { type: "user" as const, text: userQuestion }
    ];
    
    setMessages(newMessages);
    
    // Simulate AI response based on user question
    setTimeout(() => {
      const aiResponse = getAIResponse(userQuestion, selectedCondition);
      setMessages([...newMessages, { type: "ai" as const, text: aiResponse }]);
    }, 1000);
    
    setUserQuestion("");
  };

  const getAIResponse = (question: string, condition: HealthCondition): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerQuestion.includes("diet") || lowerQuestion.includes("food") || lowerQuestion.includes("eat")) {
      if (condition === "vegan") {
        return "A vegan diet excludes all animal products. Focus on plant proteins like legumes, tofu, tempeh, and seitan. Ensure adequate B12, iron, calcium, and omega-3 intake through fortified foods or supplements.";
      } else if (condition === "non-vegetarian") {
        return "A balanced non-vegetarian diet includes lean meats, fish, eggs, dairy, fruits, vegetables, whole grains, and healthy fats. Aim for variety and moderation.";
      }
      return `For ${condition}, it's important to follow a balanced diet. Please check our detailed recommendations in the health advice section.`;
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
        case "pcos":
          return "Regular exercise helps manage PCOS symptoms by improving insulin sensitivity and helping with weight management. Aim for a mix of cardio and strength training.";
        case "vegan":
          return "Any exercise regimen works well with a vegan diet. Ensure adequate protein intake and consider creatine supplementation if you're strength training extensively.";
        case "non-vegetarian":
          return "Your diet provides complete proteins which support muscle recovery and growth. Any type of exercise program can be supported with proper nutrition timing and planning.";
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
        case "pcos":
          return "PCOS symptoms can include irregular periods, excess androgen (resulting in excess facial/body hair, acne), polycystic ovaries, and weight gain.";
        case "vegan":
          return "A poorly planned vegan diet might lead to deficiencies in B12, iron, zinc, calcium, vitamin D, and omega-3s. Symptoms can include fatigue, weakness, anemia, and poor immune function.";
        case "non-vegetarian":
          return "A typical non-vegetarian diet doesn't have specific symptoms, but excessive consumption of red and processed meats may contribute to increased risk of certain health conditions.";
        default:
          return "Symptoms vary greatly depending on the specific health condition. Could you please specify which condition you're asking about?";
      }
    }
    
    if (lowerQuestion.includes("personalized") || lowerQuestion.includes("specific") || lowerQuestion.includes("custom") || lowerQuestion.includes("meal plan")) {
      onShowPersonalizedForm();
      return "I'd be happy to help with personalized recommendations. Please fill out the form that has appeared below to get tailored advice for your condition.";
    }
    
    // Default response
    return `I understand you're asking about ${condition}. To give you the best advice, could you provide more specific details about what you'd like to know? You can ask about diet, exercise, symptoms, or management strategies.`;
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Health Assistant
        </CardTitle>
        <CardDescription>
          Ask questions about managing your health condition or type "personalized meal plan" to get tailored recommendations
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
  );
};

export default HealthAssistant;
