import React, { useRef, useEffect, useState } from 'react';
import { toast } from "sonner";
import { 
  PhoneCallIcon, 
  MessageSquareIcon, 
  MicIcon,
  SparklesIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UseCase, useCases } from './UseCaseData';

const TryItZone = () => {
  const tryItZoneRef = useRef<HTMLDivElement>(null);
  const [activeUseCase, setActiveUseCase] = useState<UseCase>(useCases[0]);
  const [isTalking, setIsTalking] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (tryItZoneRef.current) {
      observer.observe(tryItZoneRef.current);
    }
    
    return () => {
      if (tryItZoneRef.current) {
        observer.unobserve(tryItZoneRef.current);
      }
    };
  }, []);

  const handleTalkClick = () => {
    if (isTalking) {
      setIsTalking(false);
      toast.info("Voice conversation ended");
    } else {
      setIsTalking(true);
      toast.success(`Started conversation with ${activeUseCase.title} assistant`);
      
      setTimeout(() => {
        if (isTalking) {
          setIsTalking(false);
          toast.info("Voice conversation ended");
        }
      }, 20000);
    }
  };

  return (
    <div 
      ref={tryItZoneRef}
      className="text-center max-w-5xl mx-auto mb-24 transition-all duration-700 opacity-0 translate-y-10 p-10 rounded-3xl relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 20px 80px -20px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div 
        className="absolute inset-0 opacity-90" 
        style={{ 
          background: "linear-gradient(135deg, rgba(23, 92, 230, 0.85) 0%, rgba(147, 51, 234, 0.85) 100%)",
          mixBlendMode: "multiply" 
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-300 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full blur-3xl opacity-30 animate-float animate-delay-200"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-float animate-delay-400"></div>
      </div>
      
      <div className="relative z-10">
        <div className="relative mb-8">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-8 left-1/4 w-28 h-28 bg-amber-100 rounded-full blur-3xl opacity-60"></div>
          
          <div className="relative inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-4 shadow-md border border-white/30">
            <SparklesIcon className="mr-2 h-5 w-5 animate-pulse" />
            <span className="text-sm font-medium">Experience It Live</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 text-white">
            Try It Zone
          </h2>
          <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
            Experience our AI voice agent in real-time across different use cases.
            Select a scenario below and start the conversation.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl transform -rotate-1 scale-[1.02] blur-sm"></div>
          
          <div className="relative glass rounded-3xl shadow-xl overflow-hidden border border-white/40 backdrop-blur-sm bg-white/80">
            <Tabs defaultValue="electricity" className="w-full" onValueChange={(value) => {
              const newUseCase = useCases.find(uc => uc.id === value);
              if (newUseCase) {
                setActiveUseCase(newUseCase);
                setIsTalking(false);
              }
            }}>
              <div className="p-4 bg-gradient-to-r from-indigo-100/80 via-purple-100/80 to-pink-100/80 backdrop-blur-sm">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 p-1 rounded-xl bg-white/90 backdrop-blur-sm shadow-inner">
                  {useCases.map((useCase) => (
                    <TabsTrigger 
                      key={useCase.id} 
                      value={useCase.id} 
                      className="gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:shadow-md data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 animate-pulse rounded-full bg-indigo-200/50 data-[state=active]:opacity-0"></div>
                        {useCase.icon}
                      </div>
                      <span className="hidden md:inline font-medium">{useCase.title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {useCases.map((useCase) => (
                <TabsContent key={useCase.id} value={useCase.id} className="mt-0 animate-fade-up">
                  <div className={`relative rounded-b-3xl overflow-hidden ${useCase.gradient}`}>
                    <Card className="border-0 shadow-none bg-transparent">
                      <CardHeader className="relative z-10">
                        <CardTitle className="flex items-center gap-3 text-2xl">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${useCase.color} text-white`}>
                            {useCase.icon}
                          </div>
                          {useCase.title}
                        </CardTitle>
                        <CardDescription className="text-base">{useCase.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-sm mb-6 border border-gray-100">
                          <p className="text-gray-700 font-medium">{useCase.greeting}</p>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Example questions you can ask:</h4>
                          <ul className="space-y-3">
                            {useCase.exampleQuestions.map((question, i) => (
                              <li key={i} className="flex items-start gap-3 bg-white/60 p-3 rounded-lg shadow-sm border border-gray-100">
                                <MessageSquareIcon className={`h-5 w-5 text-gradient-to-r ${useCase.color} shrink-0 mt-0.5`} />
                                <span className="text-gray-700">{question}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-center border-t border-gray-100/30 pt-6 pb-8 relative z-10">
                        <Button 
                          className={`${
                            isTalking 
                              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse' 
                              : `bg-gradient-to-r ${useCase.color} hover:shadow-lg`
                          } text-white px-8 py-6 rounded-full transition-all duration-300 shadow-md hover:shadow-xl`}
                          onClick={handleTalkClick}
                        >
                          {isTalking ? (
                            <>
                              <PhoneCallIcon className="mr-2 h-5 w-5" />
                              End Conversation
                            </>
                          ) : (
                            <>
                              <MicIcon className="mr-2 h-5 w-5" />
                              Talk to AI Assistant
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/30 blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-white/20 blur-3xl"></div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItZone;
