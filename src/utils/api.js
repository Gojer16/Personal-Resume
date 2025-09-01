export async function sendMessageToBackend(question, stream = false, onStreamChunk) {
  const res = await fetch("https://orlando-ai-assistant.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question,  stream }),
  });

  if (!res.ok) {
    throw new Error("❌ Failed to connect to backend");
  }

  // Handle non-streaming response
  if (!stream) {
    const data = await res.json();
    return data.answer || "No response";
  }

  // Handle streaming response
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let accumulatedText = "";

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      accumulatedText += chunk;
      
      // Call the callback with the new chunk
      if (onStreamChunk) {
        onStreamChunk(chunk);
      }
    }
  } catch (error) {
    console.error("Error reading stream:", error);
    onStreamChunk("An error occurred during streaming.");
  }


  return accumulatedText;
}
