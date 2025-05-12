import { useState } from "react";

type Message = {
  role: "user" | "bot";
  content: string;
};

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage: Message = { role: "bot", content: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error talking to AI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-4">SwiftReply AI Demo</h1>

      <div className="max-w-md mx-auto bg-gray-100 p-4 rounded shadow space-y-2 h-[400px] overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] p-2 rounded ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto rounded-l-lg"
                : "bg-gray-300 text-black rounded-r-lg"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500">Typing...</div>}
      </div>

      <div className="max-w-md mx-auto flex gap-2">
        <input
          className="flex-1 border border-gray-300 px-4 py-2 rounded"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
