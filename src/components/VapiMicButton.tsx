import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Vapi from '@vapi-ai/web';
import { supabase } from '@/integrations/supabase/client';

interface VapiMicButtonProps {
  className?: string;
  assistantId: string;
}

const VapiMicButton: React.FC<VapiMicButtonProps> = ({ className, assistantId }) => {
  const [callState, setCallState] = useState<'idle' | 'connecting' | 'connected'>('idle');
  const [vapiInstance, setVapiInstance] = useState<Vapi | null>(null);

  const handleVapiCall = async () => {
    try {
      setCallState('connecting');
      console.log("Fetching VAPI config...");
      
      // Check microphone permissions first on mobile devices
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          console.log("Requesting microphone permissions...");
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          console.log("Microphone permission granted");
          // Stop the test stream
          stream.getTracks().forEach(track => track.stop());
        } catch (permissionError) {
          console.error("Microphone permission denied:", permissionError);
          alert("Please allow microphone access to use voice features");
          setCallState('idle');
          return;
        }
      }
      
      // Fetch the VAPI config from Supabase edge function
      const { data, error } = await supabase.functions.invoke('vapi-config');
      
      if (error) {
        console.error("Error fetching VAPI config:", error);
        setCallState('idle');
        return;
      }
      
      console.log("VAPI config response:", data);
      
      if (!data?.publicKey) {
        console.error("No public key received from VAPI config");
        setCallState('idle');
        return;
      }
      
      console.log("Initializing VAPI with key:", data.publicKey.substring(0, 10) + "...");
      
      const vapi = new Vapi(data.publicKey);
      setVapiInstance(vapi);
      
      // Set up event listeners with timeout for connection
      let connectionTimeout: NodeJS.Timeout | null = null;
      
      vapi.on('call-start', () => {
        console.log("Call started");
        if (connectionTimeout) {
          clearTimeout(connectionTimeout);
          connectionTimeout = null;
        }
        setCallState('connected');
      });
      
      vapi.on('call-end', () => {
        console.log("Call ended");
        if (connectionTimeout) {
          clearTimeout(connectionTimeout);
          connectionTimeout = null;
        }
        setCallState('idle');
      });
      
      vapi.on('error', (error) => {
        console.error("VAPI error:", error);
        if (connectionTimeout) {
          clearTimeout(connectionTimeout);
          connectionTimeout = null;
        }
        setCallState('idle');
        alert("Connection failed. Please check your internet connection and try again.");
      });
      
      // Set a connection timeout for mobile devices (30 seconds)
      connectionTimeout = setTimeout(() => {
        console.error("Connection timeout - call failed to start within 30 seconds");
        if (vapi) {
          vapi.stop();
        }
        setCallState('idle');
        alert("Connection timeout. Please try again.");
      }, 30000);
      
      console.log("Starting VAPI call with assistant ID:", assistantId);
      await vapi.start(assistantId);
      
      console.log("VAPI call started successfully");
    } catch (error) {
      console.error("Error starting VAPI call:", error);
      setCallState('idle');
      if (error instanceof Error) {
        if (error.message.includes("Permission denied") || error.message.includes("NotAllowedError")) {
          alert("Microphone access is required. Please enable microphone permissions and try again.");
        } else if (error.message.includes("network") || error.message.includes("fetch")) {
          alert("Network error. Please check your internet connection and try again.");
        } else {
          alert("Failed to start call. Please try again.");
        }
      }
    }
  };

  const handleEndCall = () => {
    console.log("Ending VAPI call...");
    if (vapiInstance) {
      vapiInstance.stop();
      setVapiInstance(null);
    }
    setCallState('idle');
  };

  const renderContent = () => {
    switch (callState) {
      case 'connecting':
        return (
          <div 
            className="w-8 h-8 rounded-full"
            style={{
              border: '3px solid rgba(255, 255, 255, 0.3)',
              borderTop: '3px solid white',
              animation: 'spin 1s linear infinite'
            }}
          />
        );
      case 'connected':
        return (
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Main animated orb - exactly like original */}
            <div
              className="w-32 h-32 rounded-full relative"
              style={{
                background: 'linear-gradient(45deg, #4CA154, #3a7a41, #5cb85c, #2e7d32, #66bb6a, #388e3c)',
                backgroundSize: '400% 400%',
                animation: 'gradient-flow 3s ease-in-out infinite, pulse-orb 2s ease-in-out infinite alternate',
                boxShadow: '0 0 30px rgba(76, 161, 84, 0.4), 0 0 60px rgba(58, 122, 65, 0.3)'
              }}
            >
              {/* Rotating white ring */}
              <div 
                className="absolute -inset-2.5 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  animation: 'rotate 4s linear infinite'
                }}
              />
              
              {/* Shimmer effect */}
              <div 
                className="absolute top-6 left-6 w-6 h-6 bg-white/30 rounded-full"
                style={{
                  filter: 'blur(8px)',
                  animation: 'shimmer 2.5s ease-in-out infinite alternate'
                }}
              />
            </div>
            
            {/* End call button positioned at bottom */}
            <button 
              onClick={handleEndCall}
              className="absolute -bottom-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4757] to-[#e84118] shadow-[0_8px_24px_rgba(255,71,87,0.3)] hover:shadow-[0_12px_32px_rgba(255,71,87,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
            >
              {/* End call icon */}
              <svg 
                width="20" 
                height="20" 
                fill="white" 
                viewBox="0 0 24 24"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" transform="rotate(135 12 12)"/>
              </svg>
            </button>
          </div>
        );
      default:
        return (
          // Much larger microphone icon 
          <svg 
            className="w-24 h-24 text-white"
            fill="currentColor" 
            viewBox="0 0 24 24"
            style={{ width: '82px', height: '82px' }}
          >
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
          </svg>
        );
    }
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-orb {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { opacity: 0.3; transform: translate(0, 0); }
          100% { opacity: 0.8; transform: translate(5px, -5px); }
        }
      `}</style>
      
        {callState === 'connected' ? (
        <div className={`relative ${className}`}>
          {renderContent()}
        </div>
      ) : (
        <div className={`relative ${className}`} style={{ transform: 'translate(-16px, -16px)' }}>
          <Button
            onClick={callState === 'idle' ? handleVapiCall : undefined}
            disabled={callState === 'connecting'}
            className={`
              w-32 h-32
              rounded-full
              bg-gradient-to-br from-[#4CA154] to-[#3d8043]
              hover:from-[#5cb164] hover:to-[#4CA154]
              shadow-lg hover:shadow-xl
              transition-all duration-500
              relative
            `}
            variant="ghost"
          >
            {renderContent()}
          </Button>
          
          {/* Handwritten mic SVG positioned at bottom right */}
          <img 
            src="/lovable-uploads/NewHandWrittenMic4.svg" 
            alt="Handwritten mic"
            className="absolute bottom-20 right-3 w-96 h-96 pointer-events-none"
            style={{ transform: 'scale(2.5)', transformOrigin: 'top left' }}
          />
        </div>
      )}
    </>
  );
};

export default VapiMicButton;
