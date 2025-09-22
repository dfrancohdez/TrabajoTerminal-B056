// src/App.jsx
import { useState } from "react";
import { ChatList } from "../../components/ChatList/ChatList";
import { ChatWindow } from "../../components/ChatWindow/ChatWindow";
import Header from "../../components/Header/Header";
import './_mensajeria.scss'

export default function Mensajeria() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, name: "Empresa 1" },
    { id: 2, name: "Empresa 2" },
    { id: 3, name: "Empresa 3" },
  ];

  return (
    <div className="background">
        <Header />
        <div className="d-flex vh-100 container p-3">
            {/* Lista de chats */}
            <ChatList chats={chats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

            {/* Ventana de chat */}
            <div className="flex-grow-1">
                {selectedChat ? (
                <ChatWindow chat={selectedChat} />
                ) : (
                <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                    Selecciona un chat para comenzar
                </div>
                )}
            </div>
        </div>
    </div>
  );
}
