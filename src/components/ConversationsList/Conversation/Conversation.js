import React from 'react';
import p1 from '../../../assets/images/p1.jpg';
import p2 from '../../../assets/images/p2.jpg';
import './Conversation.css';

export default function Conversation(props) {
    let profilePicutre = p2;
    
    if(props.data.photo==='p2') {
      window.alert(props.data.photo );
      profilePicutre = p2;
    }


    return (
      <div className="conversation-item">
    
        <img className="conversation-photo" src={ profilePicutre } alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ props.data.name }</h1>
          <p className="conversation-snippet">{ props.data.text }</p>
        </div>
      </div>
    );
}
