import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
    return (
      <div className="toolbar-button">
          {props.children}
      </div>
    );
}