import React, { useEffect, useState } from 'react';
import { ref, onValue, push } from "firebase/database";
import { db } from '../firebase/config';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = ref(db, "messages");

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const formatted = data ? Object.keys(data).map((key) => ({
        id: key,
        text: data[key].text,
      })) : [];
      setMessages(formatted);
    });

  
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    const messagesRef = ref(db, "messages");
    if (newMessage.trim() !== '') {
      await push(messagesRef, { text: newMessage });
      setNewMessage('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>💬 Realtime Chat</h2>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Escribe tu mensaje"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
        <button onClick={handleSend} style={{ marginLeft: '10px', padding: '8px' }}>
          Enviar
        </button>
      </div>

      <div>
        {messages.map((msg) => (
          <p key={msg.id}>{msg.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Messages;
