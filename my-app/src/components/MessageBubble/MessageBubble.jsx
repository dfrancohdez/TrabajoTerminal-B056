// src/components/MessageBubble.jsx
export function MessageBubble({ message }) {
  const isMe = message.sender === "me";
  return (
    <div className={`d-flex flex-column mb-2 ${isMe ? "align-items-end" : "align-items-start"}`}>
      <div
        className={`rounded-3 shadow-sm w-auto ${isMe ? "bg-primary text-white" : "border border-2 border-primary text-dark"}`}
        style={{padding:"9px", maxWidth: "60%" }}
      >
        <div className="mb-1">{message.text}</div>
      </div>
      <small className="text-muted">{message.time}</small>
    </div>
  );
}
