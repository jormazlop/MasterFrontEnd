import React from "react";
import './app.scss';

export const App = () => {
  
  return (
      <div className="app-container">
        {process.env.NODE_ENV !== 'production'? 'Hola Mundo Dev!' : 'Hola Mundo Prod!'}
      </div>
  );
};