import './Card.css'
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>

  <div className="Card">
    <div className="Conteudo">
      {props.children}

    </div>
    <div className="footer">
      {props.titulo}
    </div>
  </div>