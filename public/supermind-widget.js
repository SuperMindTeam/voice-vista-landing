class SupermindAIWidget extends HTMLElement {
  constructor() {
    super();
    this.agentId = this.getAttribute("agent-id");
    this.apiKey = this.getAttribute("api-key") || "bb623861-73db-4dba-8ee2-d5dd24098849";
    this.shadow = this.attachShadow({ mode: "open" });
    this.vapi = null;
    this.isListening = false;
  }

  connectedCallback() {
    this.render();
    this.loadVapiSDK().then(() => this.attachListeners());
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
      </style>

      <div class="widget-container
