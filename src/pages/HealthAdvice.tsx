
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import PersonalizedHealthForm from "@/components/health/PersonalizedHealthForm";
import HealthRecommendations from "@/components/health/HealthRecommendations";
import HealthAdviceCard from "@/components/health/HealthAdviceCard";
import HealthAssistant from "@/components/health/HealthAssistant";
import ConditionSelector from "@/components/health/ConditionSelector";
import { getHealthAdvice } from "@/utils/healthAdviceUtils";
import { getHealthRecommendations } from "@/data/healthRecommendations";
import { ConditionFormData, HealthCondition, HealthRecommendation } from "@/types/health";

const HealthAdvice = () => {
  const [selectedCondition, setSelectedCondition] = useState<HealthCondition>("general");
  const [showPersonalizedForm, setShowPersonalizedForm] = useState(false);
  const [recommendation, setRecommendation] = useState<HealthRecommendation | null>(null);

  const handleConditionChange = (condition: HealthCondition) => {
    setSelectedCondition(condition);
    setRecommendation(null);
    setShowPersonalizedForm(false);
  };

  const handleFormSubmit = (data: ConditionFormData) => {
    const generatedRecommendation = getHealthRecommendations(
      selectedCondition,
      data.age,
      data.weight,
      data.height,
      data.gender,
      data.activityLevel
    );
    
    setRecommendation(generatedRecommendation);
  };

  const togglePersonalizedForm = () => {
    setShowPersonalizedForm(!showPersonalizedForm);
  };

  const adviceData = getHealthAdvice(selectedCondition);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
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
            <div className="lg:col-span-2">
              <ConditionSelector 
                selectedCondition={selectedCondition}
                onConditionChange={handleConditionChange}
                onTogglePersonalizedForm={togglePersonalizedForm}
                showPersonalizedForm={showPersonalizedForm}
              />
              
              {showPersonalizedForm && (
                <PersonalizedHealthForm 
                  condition={selectedCondition} 
                  onSubmit={handleFormSubmit}
                />
              )}
              
              {recommendation && (
                <HealthRecommendations recommendation={recommendation} />
              )}
              
              {!showPersonalizedForm && !recommendation && (
                <HealthAdviceCard adviceData={adviceData} />
              )}
            </div>
            
            <div className="lg:col-span-1">
              <HealthAssistant 
                selectedCondition={selectedCondition}
                onShowPersonalizedForm={() => setShowPersonalizedForm(true)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthAdvice;
