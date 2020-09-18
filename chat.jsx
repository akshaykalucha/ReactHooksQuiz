import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import uuid from "uuid/dist/v4";

import "./Styles.css";

const myId = uuid();
const socket = io("http://192.168.15.10:3030");
socket.on("connect", (wb) => {});

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [usersConnect, setUsersConnect] = useState(0);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages([...messages, newMessage]);
    };
    socket.on("chat.message", handleNewMessage);
    return () => socket.off("chat.message", handleNewMessage);
  }, [messages]);

  useEffect(() => {
    const handleUpdateUserConnect = (updadeUserConncet) => {
        console.log('updadeUserConncet')
        setUsersConnect(updadeUserConncet)
    }
    socket.on('userUpdateConnect', handleUpdateUserConnect)
    return () => socket.off("userUpdateConnect", handleUpdateUserConnect);
  }, [usersConnect]);

  const handleMesage = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chat.message", {
        id: myId,
        message,
      });
      setMessage("");
    }
  };

  return (
    <div className="container">
      <header className="header__top">
        <span>{usersConnect} Usuarios Conectados</span>
      </header>
      <main className="container">
        <ul className="list">
          {messages.map((smg, i) => {
            return (
              <li
                key={i}
                className={`list__item list__item--${
                  smg.id === myId ? "mine" : "other"
                }`}
              >
                <span
                  className={`message message--${
                    smg.id === myId ? "mine" : "other"
                  }`}
                  key={i}
                >
                  {smg.message}
                </span>
              </li>
            );
          })}
        </ul>

        <form className="form" onSubmit={handleFormSubmit}>
          <input
            onChange={handleMesage}
            className="form__field"
            type="text"
            placeholder="Validate your message"
            value={message}
          />
        </form>
      </main>
    </div>
  );
};

export default Chat;