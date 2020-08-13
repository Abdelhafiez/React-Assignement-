import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
    
    const friendlyTimestamp = moment(props.timestamp).format('LLLL');
    
    let classes = [];

    classes.push('message');
    
    if(props.isMine){
        classes.push('mine');
    }
    if(props.startsSequence){
        classes.push('begin');
    }
    if(props.endsSequence){
        classes.push('end');
    }
    
    return (
      <div className={classes.join(' ')}>
        {
          props.showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { props.data.message }
          </div>
        </div>
      </div>
    );
}