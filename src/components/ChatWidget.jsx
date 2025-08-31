import { useState } from 'react';
import { useChat } from '../utils/useChat';

export default function ChatWidget() {
 
  const { messages, input, setInput, loading, handleSend } = useChat();

  const [open, setOpen] = useState(false);
  const [useStream, setUseStream] = useState(true);

  return (
    <div className="fixed bottom-4 right-8 z-100">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center shadow-xl duration-300 transition-all hover:bg-secondary hover:-translate-y-1 hover:scale-105 "
        >
          💬
        </button>
      )}

      {open && (
        <div className="flex flex-col h-100 w-100 bg-[#f4f4f4] shadow-2xl rounded-xl overflow-hidden">
          <div className="bg-purple-600 text-white p-3 font-bold flex justify-between items-center">
            Chat Assistant
            <button onClick={() => setOpen(false)} className="text-white cursor-pointer  hover:bg-purple-800 w-6 hover:rounded-full hover:w-6 font-bold">
              ✕
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-purple-700 text-white ml-auto"
                    : "bg-secondary text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-400">Typing...</div>}
          </div>

          <form onSubmit={(e) => handleSend(e, useStream)} className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 outline-none"
              placeholder="Type a message..."
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 cursor-pointer hover:bg-purple-700 disabled:bg-secondary"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}