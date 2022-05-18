import React from 'react';
import './Card.css';

const Card = ({ children, bg, cardType, borderTop }) => {
  return (
    <div style={bg} className={`${cardType} ${borderTop}`}>
      {children}
    </div>
  );
};

export default Card;
