import React from 'react';
import './Toolbar.css';

export default function Toolbar(props) {
    return (
        <div className="toolbar">
          <div className="left-items">{ props.leftItems }</div>
          <h1 className="toolbar-title">{ props.title }</h1>
          <div className="right-items">{ props.rightItems }</div>
        </div>
      );
}