import React from 'react';
import './Chat.css';

export default function Chat(props) {
    return (
      <div className="chat">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
        />

        {
          props.chatItems
        }
      </div>
    );
}