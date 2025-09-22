// src/components/ChatWindow.jsx
import { useState } from "react";
import { MessageBubble } from "../MessageBubble/MessageBubble";

export function ChatWindow({ chat }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hola, este es un mensaje de prueba", sender: "other", time: "6:00 PM" },
    { id: 2, text: "Hola, recibido. Todo bien por aquí.", sender: "me", time: "6:01 PM" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
    // 🔗 Aquí puedes conectar con tu backend (WebSocket/API REST)
  };

  return (
    <div className="d-flex flex-column h-100 bg-white" style={{borderRadius:"15px"}}>
      {/* Header */}
      <div className="d-flex align-items-center p-3 border-bottom">
        {!chat.img?(<div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px" }}>
          {chat.name[0]}
        </div>):
        (<img src={chat.img} style={{ width: "55px", height: "55px" }}/>
        )}
        <span className="fw-semibold">{chat.name}</span>
      </div>

      {/* Mensajes */}
      <div className="flex-grow-1 overflow-auto p-3">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-top d-flex">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="form-control me-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          ➤
        </button>
      </div>
    </div>
  );
}
