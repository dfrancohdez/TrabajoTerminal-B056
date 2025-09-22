// src/App.jsx
import { useState } from "react";
import { ChatList } from "../../../components/ChatList/ChatList";
import { ChatWindow } from "../../../components/ChatWindow/ChatWindow";
import Header from "../../../components/Header/Header";
import './_chatbot.scss'
import img from '../../../assets/images/Avatar.png'

export default function Chatbot() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, name: "Chatbot", img:img }
  ];

  return (
    <div className="background">
        <Header />
        <div className="d-flex justify-content-center vh-100 p-3" >

            {/* Ventana de chat */}
            <div className="w-100" style={{ maxWidth: "700px" }}>
                {chats[0] ? (
                <ChatWindow chat={chats[0]} />
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
