
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { 
  ArrowRight, 
  Calendar, 
  Activity, 
  Heart, 
  Book, 
  CheckCircle,
  Utensils,
  Timer,
  AppleIcon,
  Dumbbell
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Personalized Meal Plans",
      description: "Get customized meal plans tailored to your nutritional needs and preferences."
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Fitness Tracking",
      description: "Track your workouts and monitor your progress with our intuitive tools."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Health Advice",
      description: "Access expert health tips and personalized recommendations."
    },
    {
      icon: <Book className="w-8 h-8 text-primary" />,
      title: "Recipe Library",
      description: "Explore our collection of healthy and delicious recipes."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      text: "NutriLife has completely transformed my approach to healthy eating. The meal plans are delicious and easy to follow!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Marathon Runner",
      text: "The fitness tracking tools have helped me stay on track with my marathon training. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Nutrition Coach",
      text: "As a nutrition coach, I recommend NutriLife to all my clients. The personalized advice is invaluable.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Personalized nutrition advice" },
    { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Customized workout plans" },
    { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Health condition management" },
    { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Delicious, healthy recipes" },
    { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Expert nutrition guidance" },
    { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Progress tracking tools" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Journey to a <span className="text-primary">Healthier Life</span> Starts Here
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Discover personalized meal plans, fitness tracking, and expert health advice all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg rounded-full shadow-lg shadow-primary/20">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/meal-plan">
                  <Button variant="outline" className="px-6 py-6 text-lg rounded-full border-2 hover:bg-primary/5">
                    View Meal Plans
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="bg-white p-2 rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop" 
                  alt="Healthy Food" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-2 rounded-2xl shadow-xl rotate-6">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=200&auto=format&fit=crop" 
                  alt="Fitness Tracking" 
                  className="w-32 h-32 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-10 -right-5 bg-white p-2 rounded-2xl shadow-xl -rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=200&auto=format&fit=crop" 
                  alt="Health Food" 
                  className="w-28 h-28 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need for a Healthy Lifestyle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our comprehensive platform provides all the tools and resources you need to achieve your health and fitness goals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border hover:shadow-md hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How NutriLife Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our simple process helps you achieve your health goals in just three easy steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Plan Your Meals</h3>
              <p className="text-gray-600">Get personalized meal plans based on your dietary preferences and nutritional needs.</p>
            </div>
            
            <div className="text-center p-6 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Track Your Fitness</h3>
              <p className="text-gray-600">Monitor your workouts and physical activity to stay on track with your fitness goals.</p>
            </div>
            
            <div className="text-center p-6 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AppleIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Achieve Results</h3>
              <p className="text-gray-600">See measurable improvements in your health and wellbeing with our comprehensive approach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied users who have transformed their lives with NutriLife.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-md border hover:border-primary/30 transition-all animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold mb-6">The Benefits of Using NutriLife</h2>
              <p className="text-gray-600 mb-8">Our comprehensive platform is designed to help you achieve your health and wellness goals with ease.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {benefit.icon}
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fadeIn p-4" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -z-10 w-4/5 h-4/5 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
              <img 
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=600&auto=format&fit=crop" 
                alt="Health Benefits" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/80 to-secondary rounded-tl-[80px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Life?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of others who have already started their journey to a healthier lifestyle.
          </p>
          <Link to="/login">
            <Button className="bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-7 text-lg rounded-full">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
