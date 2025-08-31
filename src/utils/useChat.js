import { useState } from 'react';
import { sendMessageToBackend } from '../utils/api';

export const useChat = (initialMessages = [{ 
  sender: 'bot', 
  text: 'Hi! Ask me anything 😊' 
}]) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e, useStream) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input;
    const newUserMessage = { sender: 'user', text: userInput };

    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInput('');
    setLoading(true);

    try {
      if (useStream) {
        let botMessage = '';
        // Add a placeholder for the streaming bot message
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: '' }]);

        // Refactored call to sendMessageToBackend
        await sendMessageToBackend(
          userInput,
          true, // Pass the boolean 'stream' flag
          (chunk) => { // Pass the onStreamChunk callback
            botMessage += chunk;
            // Update the last message in state with the new chunk
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = { sender: 'bot', text: botMessage };
              return updated;
            });
          }
        );
      } else {
        const reply = await sendMessageToBackend(userInput, false);
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: reply }]);
      }
    } catch (err) {
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: '⚠️ Error: ' + err.message }]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, input, setInput, loading, handleSend };
};