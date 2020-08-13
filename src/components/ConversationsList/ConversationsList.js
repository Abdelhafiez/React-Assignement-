import React from 'react';
import Conversation from './Conversation/Conversation';
import Toolbar from '../Toolbar/Toolbar';
import ToolbarButton from '../Toolbar/ToolbarButton/ToolbarButton';
import './ConversationsList.css';
import { FiMessageCircle } from 'react-icons/fi';
export default function ConversationsList(props) {
    var data = require('../../assets/jsons/conversations.json');
    return (
        <div className="conversations-list">
            <Toolbar
                title="Conversations"
                leftItems={[   ]}
                rightItems={[
                    <ToolbarButton key="Conversations">
                        <FiMessageCircle />
                    </ToolbarButton>
                ]}
            />
            {
                data.map(conversation =>
                    <Conversation
                        key={conversation.name}
                        data={conversation}
                    />
                )
            }
        </div>
    );
}



