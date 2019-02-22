import React from 'react';
import './style.css';

export default (props) => {
  return (
    <div className="hexagon" style={{ ...props.style }} onClick={props.onClick}>
      <span>{props.children}</span>
    </div>
  )
}