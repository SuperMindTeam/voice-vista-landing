import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Phone, PhoneOff } from 'lucide-react';
import Vapi from '@vapi-ai/web';
import { supabase } from '@/integrations/supabase/client';

const LiveDemo = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [callStatus, setCallStatus] = useState<string>('');
  const lastSpeakerRef = useRef<string | null>(null);

  const categories = [
    { 
      icon: "🏥", 
      name: "Healthcare Receptionist", 
      agentId: "d275f9a8-d5dd-4c94-ac99-75b1729a0cbc" 
    },
    { 
      icon: "🏨", 
      name: "Hotel Receptionist", 
      agentId: "hotel-receptionist-agent-id" 
    },
    { 
      icon: "🛒", 
      name: "E-commerce Support Agent", 
      agentId: "ecommerce-agent-id" 
    },
    { 
      icon: "🍽️", 
      name: "Restaurant Table Reservation", 
      agentId: "restaurant-agent-id" 
    },
    { 
      icon: "🦷", 
      name: "Dentist", 
      agentId: "dentist-agent-id" 
    },
    { 
      icon: "🚗", 
      name: "Automotive Service Scheduling", 
      agentId: "automotive-agent-id" 
    }
  ];

  useEffect(() => {
    const initVapi = async () => {
      try {
        // Fetch VAPI public key from edge function
        console.log('Fetching VAPI config...');
        const { data, error } = await supabase.functions.invoke('vapi-config');
        
        console.log('VAPI config response:', { data, error });
        
        if (error || !data?.publicKey) {
          console.error('Failed to get VAPI public key:', error);
          setCallStatus('Configuration error - check console');
          return;
        }

        console.log('Initializing VAPI with key:', data.publicKey.substring(0, 10) + '...');
        const vapiInstance = new Vapi(data.publicKey);
        setVapi(vapiInstance);

        vapiInstance.on('call-start', () => {
          setIsCallActive(true);
          setCallStatus('Call started');
        });

        vapiInstance.on('call-end', () => {
          setIsCallActive(false);
          setSelectedCategory(null);
          setCallStatus('Call ended');
          setTranscript('');
          lastSpeakerRef.current = null;
        });

        vapiInstance.on('speech-start', () => {
          setCallStatus('Listening...');
        });

        vapiInstance.on('speech-end', () => {
          setCallStatus('Processing...');
        });

        vapiInstance.on('message', (message: any) => {
          console.log('VAPI message:', message);
          
          if (message.type === 'transcript' && message.transcriptType === 'final') {
            console.log('Processing final transcript:', message.role, message.transcript);
            
            setTranscript(prev => {
              if (message.role === 'assistant') {
                // If last speaker was also assistant, append to existing message
                if (lastSpeakerRef.current === 'assistant') {
                  return prev + ' ' + message.transcript;
                } else {
                  // New agent turn
                  lastSpeakerRef.current = 'assistant';
                  return prev + (prev ? '\n\n' : '') + 'AGENT: ' + message.transcript;
                }
              } else if (message.role === 'user') {
                // If last speaker was also user, append to existing message
                if (lastSpeakerRef.current === 'user') {
                  return prev + ' ' + message.transcript;
                } else {
                  // New user turn
                  lastSpeakerRef.current = 'user';
                  return prev + (prev ? '\n\n\n' : '') + 'YOU: ' + message.transcript;
                }
              }
              return prev;
            });
          }
        });

        vapiInstance.on('error', (error: any) => {
          console.error('VAPI Error:', error);
          setCallStatus('Error occurred');
          setIsCallActive(false);
        });
      } catch (error) {
        console.error('Failed to initialize VAPI:', error);
      }
    };

    initVapi();
  }, []);

  const startCall = async (category: typeof categories[0]) => {
    if (!vapi || isCallActive) return;

    try {
      setSelectedCategory(category.name);
      setCallStatus('Connecting...');
      setTranscript('');
      
      await vapi.start(category.agentId);
    } catch (error) {
      console.error('Failed to start call:', error);
      setCallStatus('Failed to connect');
      setSelectedCategory(null);
    }
  };

  const endCall = async () => {
    if (!vapi || !isCallActive) return;
    
    try {
      await vapi.stop();
    } catch (error) {
      console.error('Failed to end call:', error);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Categories */}
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index}>
                  {category.name === "Healthcare Receptionist" ? (
                    <div 
                      onClick={() => startCall(category)}
                      className={`relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                        selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
                      } ${isCallActive && selectedCategory !== category.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src="/lovable-uploads/healthcareVideo.webm" type="video/webm" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-blue-600 rounded-full p-3">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-2xl font-bold mb-2">Healthcare Receptionist</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Handles patient inquiries, suggests doctors based on symptoms, and schedules appointments.
                        </p>
                      </div>
                      {selectedCategory === category.name && isCallActive && (
                        <div className="absolute top-4 right-4 flex items-center bg-green-500 rounded-full px-3 py-1">
                          <Phone className="w-4 h-4 text-white mr-2" />
                          <span className="text-sm text-white font-medium">{callStatus}</span>
                        </div>
                      )}
                    </div>
                  ) : category.name === "Hotel Receptionist" ? (
                    <div 
                      onClick={() => startCall(category)}
                      className={`relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                        selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
                      } ${isCallActive && selectedCategory !== category.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src="/lovable-uploads/hotel.webm" type="video/webm" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-blue-600 rounded-full p-3">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-2xl font-bold mb-2">Hotel Receptionist</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Assists with room bookings, provides hotel information, and handles guest services inquiries.
                        </p>
                      </div>
                      {selectedCategory === category.name && isCallActive && (
                        <div className="absolute top-4 right-4 flex items-center bg-green-500 rounded-full px-3 py-1">
                          <Phone className="w-4 h-4 text-white mr-2" />
                          <span className="text-sm text-white font-medium">{callStatus}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div 
                      onClick={() => startCall(category)}
                      className={`flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer ${
                        selectedCategory === category.name ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                      } ${isCallActive && selectedCategory !== category.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span className="text-2xl">{category.icon}</span>
                      <div className="flex-1">
                        <span className="text-lg font-medium text-gray-700">{category.name}</span>
                        {selectedCategory === category.name && isCallActive && (
                          <div className="flex items-center mt-1">
                            <Phone className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-sm text-green-600">{callStatus}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Center - Main content */}
            <div className="text-center lg:col-span-1">
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  HEARING IS BELIEVING
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Experience a live call with
                  <br />
                  <span className="text-blue-600">our AI agents</span>
                </h2>
                {!isCallActive ? (
                  <p className="text-gray-600 mb-4">
                    Click on any category to start a live call
                  </p>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">Live Call Active</span>
                    </div>
                    <Button 
                      onClick={endCall}
                      size="lg" 
                      variant="destructive" 
                      className="rounded-full px-8 py-3 text-lg font-medium"
                    >
                      <PhoneOff className="w-5 h-5 mr-2" />
                      End Call
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Live Transcription */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                LIVE TRANSCRIPT
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm min-h-[300px] max-h-[400px] overflow-y-auto">
                {transcript ? (
                  <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                    {transcript}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    {isCallActive ? (
                      <div className="text-center">
                        <div className="animate-pulse mb-2">●</div>
                        <p>Listening for speech...</p>
                      </div>
                    ) : (
                      <p>Start a call to see live transcription</p>
                    )}
                  </div>
                )}
              </div>
              {isCallActive && selectedCategory && (
                <div className="mt-4 text-sm text-gray-600">
                  <strong>Active Agent:</strong> {selectedCategory}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;