import React, { useState } from 'react';
import { Mic, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Vapi from '@vapi-ai/web';
import { supabase } from '@/integrations/supabase/client';

interface VapiMicButtonProps {
  className?: string;
  assistantId: string;
}

const VapiMicButton: React.FC<VapiMicButtonProps> = ({ className, assistantId }) => {
  const [callState, setCallState] = useState<'idle' | 'connecting' | 'connected'>('idle');

  const handleVapiCall = async () => {
    try {
      setCallState('connecting');
      console.log("Fetching VAPI config...");
      
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
      
      // Set up event listeners
      vapi.on('call-start', () => {
        console.log("Call started");
        setCallState('connected');
      });
      
      vapi.on('call-end', () => {
        console.log("Call ended");
        setCallState('idle');
      });
      
      vapi.on('error', (error) => {
        console.error("VAPI error:", error);
        setCallState('idle');
      });
      
      console.log("Starting VAPI call with assistant ID:", assistantId);
      await vapi.start(assistantId);
      
      console.log("VAPI call started successfully");
    } catch (error) {
      console.error("Error starting VAPI call:", error);
      setCallState('idle');
    }
  };

  const renderContent = () => {
    switch (callState) {
      case 'connecting':
        return <Loader2 className="w-6 h-6 animate-spin text-white" />;
      case 'connected':
        return (
          <div className="relative flex items-center justify-center">
            {/* Animated orb - multiple layers for better effect */}
            <div className="absolute w-8 h-8 rounded-full bg-white/30 animate-ping" />
            <div className="absolute w-6 h-6 rounded-full bg-white/50 animate-pulse" />
            <div className="absolute w-4 h-4 rounded-full bg-white/70 animate-bounce" />
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
        );
      default:
        return <Mic className="w-6 h-6 text-white" />;
    }
  };

  return (
    <Button
      onClick={handleVapiCall}
      disabled={callState === 'connecting'}
      className={`
        w-20 h-20 rounded-full 
        bg-gradient-to-br from-[#4CA154] to-[#3d8043]
        hover:from-[#5cb164] hover:to-[#4CA154]
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${className}
      `}
      variant="ghost"
    >
      {renderContent()}
    </Button>
  );
};

export default VapiMicButton;