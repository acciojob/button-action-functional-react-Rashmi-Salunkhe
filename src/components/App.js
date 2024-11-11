import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [showPara,setShowPara] = useState(false);
  function handleClick(){
    setShowPara(!showPara)
  }
  return (
    <div id="main">
      // Do not alter the main div
    {showPara && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy </p>}
    <button id="click" onClick={handleClick}>{(showPara ? "Hide" : "Show")}</button>
    </div>
  );
}


export default App;
