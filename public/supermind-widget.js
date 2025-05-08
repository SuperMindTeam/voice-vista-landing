class SupermindAIWidget extends HTMLElement {
  constructor() {
    super();
    this.agentId = this.getAttribute("agent-id");
    this.apiKey = this.getAttribute("api-key") || "YOUR_PUBLIC_VAPI_KEY"; 
    this.shadow = this.attachShadow({ mode: "open" });
    this.vapi = null;
    this.isListening = false;
    this.conversationId = null;
  }

connectedCallback() {
  this.render();
  // Wait for next tick to ensure DOM is fully rendered
  setTimeout(() => {
    this.loadVapiSDK().then(() => this.attachListeners());
  }, 0);
}


  render() {
    this.shadow.innerHTML = `
      <style>
        .widget-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #121212;
          border-radius: 100px;
          padding: 12px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .widget-container:hover {
          transform: scale(1.05);
        }

        .mic-icon {
          width: 28px;
          height: 28px;
          fill: #ffffff;
        }

        .listening {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        
        .response-bubble {
          position: fixed;
          bottom: 90px;
          right: 24px;
          max-width: 350px;
          background-color: #ffffff;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: #333;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          z-index: 9998;
          overflow: hidden;
          display: none;
        }
        
        .response-bubble.visible {
          opacity: 1;
          transform: translateY(0);
          display: block;
        }

        .audio-loader {
          display: none;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
        }

        .audio-loader.visible {
          display: flex;
        }

        .audio-loader-dot {
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background-color: #121212;
          margin: 0 3px;
          animation: audio-loading 1s infinite ease-in-out;
        }

        .audio-loader-dot:nth-child(1) {
          animation-delay: 0s;
        }
        
        .audio-loader-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .audio-loader-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes audio-loading {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      </style>

      <div class="response-bubble">
        <div class="response-text"></div>
        <div class="audio-loader">
          <div class="audio-loader-dot"></div>
          <div class="audio-loader-dot"></div>
          <div class="audio-loader-dot"></div>
        </div>
      </div>

      <div class="widget-container">
        <svg class="mic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path>
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path>
        </svg>
      </div>
    `;
  }

  async loadVapiSDK() {
    return new Promise((resolve, reject) => {
      if (window.vapi) {
        this.vapi = window.vapi;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
      script.async = true;
      script.onload = () => {
        this.vapi = window.vapi;
        this.vapi.configure({
          apiKey: this.apiKey
        });
        resolve();
      };
      script.onerror = () => {
        console.error('Failed to load VAPI SDK');
        reject();
      };
      document.head.appendChild(script);
    });
  }

  attachListeners() {
    const micButton = this.shadow.querySelector('.widget-container');
    const responseBubble = this.shadow.querySelector('.response-bubble');
    const responseText = this.shadow.querySelector('.response-text');
    const audioLoader = this.shadow.querySelector('.audio-loader');

    if (!micButton) return;

    micButton.addEventListener('click', async () => {
      if (!this.vapi) {
        console.error('VAPI SDK not loaded');
        return;
      }

      if (this.isListening) {
        this.stopListening();
      } else {
        this.startListening(micButton, responseBubble, responseText, audioLoader);
      }
    });
  }

  async startListening(micButton, responseBubble, responseText, audioLoader) {
    try {
      this.isListening = true;
      micButton.classList.add('listening');
      
      // Clear previous response
      responseText.textContent = '';
      responseBubble.classList.remove('visible');
      
      if (!this.conversationId) {
        // Start a new conversation
        this.conversationId = await this.createNewConversation();
      }
      
      // Configure the call
      const call = this.vapi.call({
        agentId: this.agentId,
        conversationId: this.conversationId,
        userMessage: null, // Since we're using voice input
        stream: true,
        onStart: () => {
          console.log('Call started');
        },
        onStreamStart: () => {
          responseBubble.classList.add('visible');
          audioLoader.classList.add('visible');
        },
        onStreamText: (text) => {
          responseText.textContent = text;
        },
        onStreamEnd: () => {
          audioLoader.classList.remove('visible');
          setTimeout(() => {
            responseBubble.classList.remove('visible');
          }, 5000);
        },
        onError: (error) => {
          console.error('Call error:', error);
          this.stopListening(micButton);
          this.showErrorMessage(responseBubble, responseText);
        },
        onEnd: () => {
          this.stopListening(micButton);
        }
      });

      await call.start();
      
    } catch (error) {
      console.error('Error starting call:', error);
      this.stopListening(micButton);
      this.showErrorMessage(responseBubble, responseText);
    }
  }

  stopListening(micButton = this.shadow.querySelector('.widget-container')) {
    this.isListening = false;
    if (micButton) {
      micButton.classList.remove('listening');
    }
  }
  
  showErrorMessage(responseBubble, responseText) {
    responseText.textContent = "Sorry, there was an error. Please try again.";
    responseBubble.classList.add('visible');
    setTimeout(() => {
      responseBubble.classList.remove('visible');
    }, 3000);
  }

  async createNewConversation() {
    try {
      const response = await fetch('https://api.vapi.ai/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          agentId: this.agentId
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to create conversation');
      }
      
      const data = await response.json();
      return data.conversationId;
    } catch (error) {
      console.error('Error creating conversation:', error);
      throw error;
    }
  }
}

// Register the custom element
customElements.define('supermind-ai', SupermindAIWidget);

// Usage example:
// <supermind-ai agent-id="YOUR_AGENT_ID" api-key="YOUR_PUBLIC_VAPI_KEY"></supermind-ai>
