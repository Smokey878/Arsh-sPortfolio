import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/PortfolioChatbot.css';

const starterPrompts = [
  'What projects has Arsh built?',
  'What internships is Arsh looking for?',
  "Tell me about Arsh's experience",
];

const initialMessages = [
  {
    role: 'assistant',
    content: "Hi, I'm Arsh's Chatbot. Ask me about Arsh's projects, experience, skills, education, or contact info.",
  },
];

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasAttention, setHasAttention] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const attentionTimer = setTimeout(() => setHasAttention(false), 5200);
    return () => clearTimeout(attentionTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (messageText) => {
    const text = messageText.trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Chat request failed with status ${response.status}`);
      }

      const data = await response.json();
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content:
            data.answer ||
            "I don't have that information from Arsh's portfolio yet, but you can contact him directly.",
        },
      ]);
    } catch (error) {
      console.error('Portfolio chatbot request failed:', error);
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="portfolio-chatbot" aria-live="polite">
      <AnimatePresence>
        {isOpen && (
        <motion.section
          className="chatbot-panel"
          aria-label="Arsh's Chatbot"
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="chatbot-header">
            <div>
              <span>Arsh's Chatbot</span>
              <p>Portfolio assistant</p>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chatbot">
              Minimize
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <motion.div
                className={`chatbot-message ${message.role}`}
                key={`${message.role}-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                {message.content}
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                className="chatbot-message assistant"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thinking...
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-starters" aria-label="Starter questions">
            {starterPrompts.map((prompt) => (
              <button
                type="button"
                key={prompt}
                onClick={() => sendMessage(prompt)}
                disabled={isLoading}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Arsh..."
              disabled={isLoading}
              aria-label="Ask Arsh's Chatbot"
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              Send
            </button>
          </form>
        </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        className={`chatbot-toggle ${hasAttention && !isOpen ? 'chatbot-attention' : ''}`}
        onClick={() => {
          setHasAttention(false);
          setIsOpen((current) => !current);
        }}
        aria-expanded={isOpen}
        aria-label="Open Arsh's Chatbot"
      >
        Arsh's Chatbot
      </button>
    </div>
  );
}
