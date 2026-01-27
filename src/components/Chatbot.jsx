import React, { useState, useEffect, useRef } from "react";
import { chatbotData } from "../data/chatbotData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 Ask me anything about Sachin!" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // 🔔 Show badge on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isOpen) {
        setShowBadge(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // 🔽 Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotReply = (question) => {
    const q = question.toLowerCase();
    for (let item of chatbotData) {
      for (let keyword of item.keywords) {
        if (q.includes(keyword)) return item.answer;
      }
    }
    return "Sorry, I didn’t understand. Ask about skills, projects, education, or contact.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: getBotReply(input) }
    ]);
    setInput("");
  };

  return (
    <>
      {/* 🤖 FLOATING BUTTON – FORCED RIGHT */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999
          }}
        >
          <button
            onClick={() => {
              setIsOpen(true);
              setShowBadge(false);
            }}
            className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-500 relative"
          >
            🤖
            {showBadge && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            )}
          </button>
        </div>
      )}

      {/* 💬 CHAT WINDOW – FORCED RIGHT */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            width: "360px",
            maxWidth: "90vw"
          }}
          className="bg-gray-900 rounded-xl shadow-xl border border-gray-700 flex flex-col"
        >
          {/* Header */}
          <div className="p-4 flex justify-between items-center text-white font-semibold border-b border-gray-700">
            🤖 Ask about Sachin
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] break-words ${
                  msg.sender === "user"
                    ? "bg-indigo-600 ml-auto text-white text-right"
                    : "bg-gray-800 mr-auto text-gray-300"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
