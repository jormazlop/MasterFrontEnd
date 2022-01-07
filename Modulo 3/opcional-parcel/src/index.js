import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
   <h1>{process.env.NODE_ENV !== 'production'? 'Hola Mundo Dev!' : 'Hola Mundo Prod!'}</h1>, 
   document.getElementById("root")
);