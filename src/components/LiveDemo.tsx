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
      name: "Hotel Concierge", 
      agentId: "68fa64a2-7948-4817-a697-a76c953862f6" 
    },
    { 
      icon: "🍽️", 
      name: "Restaurant Reservation", 
      agentId: "4fd6f84c-77fa-4b82-8f5f-b595ed5c74aa" 
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
          setCallStatus('Talking...');
        });

        vapiInstance.on('speech-end', () => {
          setCallStatus('Listening...');
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
    <section id="live-demo" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-times">
              Experience a Live AI Call
            </h1>
          </div>

          <div className="space-y-8">
            {/* Categories Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div key={index}>
                  {category.name === "Healthcare Receptionist" ? (
                    <>
                      <div 
                        onClick={() => startCall(category)}
                        className={`relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                          selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
                        } ${isCallActive && selectedCategory !== category.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          controls={false}
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source src="/lovable-uploads/SuperMind_Dental.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <div className="bg-green-600 rounded-full p-3">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-20 left-6 right-6">
                          <h3 className="text-white text-2xl font-bold mb-2">Healthcare Receptionist</h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            Schedules appointment, patient inquiries, & suggests doctors based on symptoms.
                          </p>
                        </div>
                        {selectedCategory === category.name && isCallActive && (
                          <div className="absolute top-4 right-4 flex items-center bg-green-500 rounded-full px-3 py-1">
                            <Phone className="w-4 h-4 text-white mr-2" />
                            <span className="text-sm text-white font-medium">{callStatus}</span>
                          </div>
                        )}
                        {/* iPhone-style slider */}
                        {!isCallActive && (
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="relative bg-gray-400 rounded-full h-12 flex items-center overflow-hidden">
                              <div className="absolute inset-y-1 left-1 w-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-[bounce-horizontal_1s_ease-in-out_infinite]">
                                <Phone className="w-5 h-5 text-green-500 fill-green-500" fill="currentColor" />
                              </div>
                              <div className="flex-1 text-center">
                                <span className="text-white text-xl font-medium">Click to start call</span>
                              </div>
                              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Mobile Call Status for this card */}
                      {selectedCategory === category.name && (
                        <div className="mt-4 text-center md:hidden">
                          {callStatus === 'Connecting...' && (
                            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                              <span className="font-medium">Starting call...</span>
                            </div>
                          )}
                          {isCallActive && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-center space-x-2 text-green-600">
                                <Phone className="w-5 h-5" />
                                <span className="font-medium">Live Call Connected</span>
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
                      )}
                    </>
                  ) : category.name === "Hotel Concierge" ? (
                    <>
                      <div 
                        onClick={() => startCall(category)}
                        className={`relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                          selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
                        } ${isCallActive && selectedCategory !== category.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          controls={false}
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source src="/lovable-uploads/SuperMind_Hotel.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <div className="bg-green-600 rounded-full p-3">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-20 left-6 right-6">
                          <h3 className="text-white text-2xl font-bold mb-2">Hotel Concierge</h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            Assists with room bookings, provides hotel information, & handles guest inquiries.
                          </p>
                        </div>
                        {selectedCategory === category.name && isCallActive && (
                          <div className="absolute top-4 right-4 flex items-center bg-green-500 rounded-full px-3 py-1">
                            <Phone className="w-4 h-4 text-white mr-2" />
                            <span className="text-sm text-white font-medium">{callStatus}</span>
                          </div>
                        )}
                        {/* iPhone-style slider */}
                        {!isCallActive && (
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="relative bg-gray-400 rounded-full h-12 flex items-center overflow-hidden">
                              <div className="absolute inset-y-1 left-1 w-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-[bounce-horizontal_1s_ease-in-out_infinite]">
                                <Phone className="w-5 h-5 text-green-500 fill-green-500" fill="currentColor" />
                              </div>
                              <div className="flex-1 text-center">
                                <span className="text-white text-lg font-medium">Click to start call</span>
                              </div>
                              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Mobile Call Status for this card */}
                      {selectedCategory === category.name && (
                        <div className="mt-4 text-center md:hidden">
                          {callStatus === 'Connecting...' && (
                            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                              <span className="font-medium">Starting call...</span>
                            </div>
                          )}
                          {isCallActive && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-center space-x-2 text-green-600">
                                <Phone className="w-5 h-5" />
                                <span className="font-medium">Live Call Connected</span>
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
                      )}
                    </>
                  ) : category.name === "Restaurant Reservation" ? (
                    <>
                      <div 
                        onClick={() => startCall(category)}
                        className={`relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                          selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
                        } ${isCallActive && selectedCategory !== category.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          controls={false}
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source src="/lovable-uploads/Supermind_Restaurant.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <div className="bg-green-600 rounded-full p-3">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-20 left-6 right-6">
                          <h3 className="text-white text-2xl font-bold mb-2">Restaurant Reservation</h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            Handles table bookings, menu inquiries, special requests, & restaurant information.
                          </p>
                        </div>
                        {selectedCategory === category.name && isCallActive && (
                          <div className="absolute top-4 right-4 flex items-center bg-green-500 rounded-full px-3 py-1">
                            <Phone className="w-4 h-4 text-white mr-2" />
                            <span className="text-sm text-white font-medium">{callStatus}</span>
                          </div>
                        )}
                        {/* iPhone-style slider */}
                        {!isCallActive && (
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="relative bg-gray-400 rounded-full h-12 flex items-center overflow-hidden">
                              <div className="absolute inset-y-1 left-1 w-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-[bounce-horizontal_1s_ease-in-out_infinite]">
                                <Phone className="w-5 h-5 text-green-500 fill-green-500" fill="currentColor" />
                              </div>
                              <div className="flex-1 text-center">
                                <span className="text-white text-lg font-medium">Click to start call</span>
                              </div>
                              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Mobile Call Status for this card */}
                      {selectedCategory === category.name && (
                        <div className="mt-4 text-center md:hidden">
                          {callStatus === 'Connecting...' && (
                            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                              <span className="font-medium">Starting call...</span>
                            </div>
                          )}
                          {isCallActive && (
                            <div className="space-y-4">
                              <div className="flex items-center justify-center space-x-2 text-green-600">
                                <Phone className="w-5 h-5" />
                                <span className="font-medium">Live Call Connected</span>
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
                      )}
                    </>
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

            {/* Call Status - Desktop */}
            {selectedCategory && callStatus === 'Connecting...' && (
              <div className="text-center mb-8 hidden md:block">
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span className="font-medium">Starting call...</span>
                </div>
              </div>
            )}

            {/* Call Controls - Desktop */}
            {isCallActive && (
              <div className="text-center mb-8 hidden md:block">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Live Call Connected</span>
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
              </div>
            )}


            {/* Live Transcription - Only show when call is active and on desktop */}
            {isCallActive && (
              <div className="w-full hidden md:block">
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
                      <div className="text-center">
                        <div className="animate-pulse mb-2">●</div>
                        <p>Listening for speech...</p>
                      </div>
                    </div>
                  )}
                </div>
                {selectedCategory && (
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Active Agent:</strong> {selectedCategory}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
