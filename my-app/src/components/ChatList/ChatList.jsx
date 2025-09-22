// src/components/ChatList.jsx
export function ChatList({ chats, selectedChat, setSelectedChat }) {
  return (
    <div className="border-end bg-white me-3 p-3" style={{borderRadius:"15px",width: "40%" }}>
      <div className="p-3 border-bottom fw-bold">Mensajes</div>
      <ul className="list-unstyled m-0">
        {chats.map((chat) => (
          <li
            style={{borderRadius:"15px"}}
            key={chat.id}
            className={`d-flex align-items-center p-3 ${
              selectedChat?.id === chat.id ? "outline-primary" : "text-dark"
            }`}
            role="button"
            onClick={() => setSelectedChat(chat)}
          >
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px" }}>
              {chat.name[0]}
            </div>
            <span>{chat.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
