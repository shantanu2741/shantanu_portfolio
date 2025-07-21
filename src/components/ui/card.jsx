import React from 'react';

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

export default Card;
export { Card, CardContent };