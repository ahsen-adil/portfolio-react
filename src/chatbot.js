import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Dynamically load the chatbot script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    script.type = "module";
    script.async = true;

    script.onload = () => {
      // Initialize the chatbot once the script is loaded
      if (window.Chatbot) {
        window.Chatbot.init({
          chatflowid: "0de0f644-2e0a-4b3b-8e79-d5c772fa22ed",
          apiHost: "https://flowise-ai-production-4cb1.up.railway.app",
          chatflowConfig: {},
          observersConfig: {},
          theme: {
            button: {
              backgroundColor: "#3B81F6",
              right: 20,
              bottom: 20,
              size: 48,
              dragAndDrop: true,
              iconColor: "white",
              customIconSrc:
                "data:image/png;base64,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",
              autoWindowOpen: {
                autoOpen: true,
                openDelay: 2,
                autoOpenOnMobile: false,
              },
            },
            tooltip: {
              showTooltip: true,
              tooltipMessage: "Hi There 👋!",
              tooltipBackgroundColor: "black",
              tooltipTextColor: "white",
              tooltipFontSize: 16,
            },
            disclaimer: {
              title: "Disclaimer",
              message:
                'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
              textColor: "black",
              buttonColor: "#3b82f6",
              buttonText: "Start Chatting",
              buttonTextColor: "white",
              blurredBackgroundColor: "rgba(0, 0, 0, 0.4)",
              backgroundColor: "white",
            },
            customCSS: ``,
            chatWindow: {
              showTitle: true,
              showAgentMessages: true,
              title: "Software Engineer",
              titleAvatarSrc:
                "data:image/png;base64,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",
              welcomeMessage: "Hi there! 👋 I'm your Software Engineer Assistant. Ask me anything about programming, development, or tech careers!",
              errorMessage: "This is a custom error message",
              backgroundColor: "#ffffff",
              backgroundImage: "enter image path or link",
              height: 500,
              width: 400,
              fontSize: 16,
              starterPrompts: ["What is a bot?", "Who are you?"],
              starterPromptFontSize: 15,
              clearChatOnReload: false,
              sourceDocsTitle: "Sources:",
              renderHTML: true,
              botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc:
                  "data:image/png;base64,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",
              },
              userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
              },
              textInput: {
                placeholder: "Type your question",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
                maxChars: 50,
                maxCharsWarningMessage:
                  "You exceeded the characters limit. Please input less than 50 characters.",
                autoFocus: true,
                sendMessageSound: true,
                sendSoundLocation: "send_message.mp3",
                receiveMessageSound: true,
                receiveSoundLocation: "receive_message.mp3",
              },
              feedback: {
                color: "#303235",
              },
              dateTimeToggle: {
                date: true,
                time: true,
              },
              footer: {
                textColor: "#303235",
                text: "Powered by",
                company: "software engineer",
                companyLink: "/",
              },
            },
          },
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // The chatbot will be initialized and displayed based on your theme and configuration
};

export default Chatbot;
