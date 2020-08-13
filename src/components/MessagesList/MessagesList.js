import React from 'react';
import moment from 'moment';
import Chat from '../Chat/Chat';
import Message from './Message/Message';
import Toolbar from '../Toolbar/Toolbar';
import ToolbarButton from '../Toolbar/ToolbarButton/ToolbarButton';
import { BsPeople, BsSearch } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import './MessagesList.css';

const MY_USER_ID = 'Ahmed';

export default function MessagesList(props) {
  
    let data = require('../../assets/jsons/messages.json');

    const renderMessages = () => {
        let i = 0;
        let messageCount = data.length;
        /*
        for(let i=0;i<messageCount;i++){
            console.log("Test: " + i);
            data[i].timestamp = new Date().getTime();
        }
        */
        let tempMessages = [];
        
        while (i < messageCount) {
            let previous = data[i - 1];
            let current = data[i];
            let next = data[i + 1];
            let isMine = current.author === MY_USER_ID;
            let currentMoment = moment(current.timestamp);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;
      
            if (previous) {
                let previousMoment = moment(previous.timestamp);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.author === current.author;
                
                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }
        
                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }
    
            if (next) {
                let nextMoment = moment(next.timestamp);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.author === current.author;
        
                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                endsSequence = false;
                }
            }
      
            tempMessages.push(
              <Message
                key={i}
                isMine={isMine}
                startsSequence={startsSequence}
                endsSequence={endsSequence}
                showTimestamp={showTimestamp}
                data={current}
              />
            );
      
            // Proceed to the next message.
            i += 1;
        }
        console.log(tempMessages);
        return tempMessages;
    }

    return(
        <div className="message-list">
          <Toolbar
            title={props.selectedConversation}
            rightItems={[
              <ToolbarButton key="info">
                <BsPeople />
              </ToolbarButton>,

              <ToolbarButton key="filter">
               <FiFilter />
              </ToolbarButton>,
          
              <ToolbarButton key="filterearch">
                <BsSearch />
              </ToolbarButton>
              
            ]}
          />
  
          <div className="messages-list">{renderMessages()}</div>
  
          <Chat />
        </div>
      );
  
}