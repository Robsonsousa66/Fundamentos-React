import './Card.css'
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>

  <div className="Card">
    <div className="Content" style={{borderColor: props.color|| "#000"}}>
      {props.children}

    </div>
    <div className="footer" style={{backgroundColor: props.color || "#000"}}>
      {props.titulo}
    </div>
  </div>