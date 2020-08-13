import React from 'react';
import ConversationsList from '../ConversationsList/ConversationsList';
import MessagesList from '../MessagesList/MessagesList';
import NavigationBar from '../Navigation/NavigationBar/NavigationBar';
import './Messenger.css';
// ToDO 
export default function Messenger(props) {
    return (
        <div className="messenger">
            
            <div className="leftSidebar">
                <NavigationBar />
            </div>

            <div className="scrollable sidebar">
                <ConversationsList selectedConversation="Ahmed"/> 
            </div>

            <div className="scrollable content">
                <MessagesList />
            </div>
        </div>
    ); 
}