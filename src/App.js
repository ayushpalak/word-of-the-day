import React from 'react';
import './App.css';
import {data} from "./word-data"

let glbword = ""
function App() {
  let word = data.split("\n\n")[Math.floor(Math.random(1,100)*100)];  
  glbword = word;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{marginTop:"5%"}}>
        <h1 style={{color:"white"}}>
          {glbword.split("\n")[0].split(".")[1]} 
        </h1>
        
        <h2>
        <p style={{display:"inline-block",color:"white"}}>{glbword.split("\n")[2].split(":")[0]} : </p> <p style={{display:"inline-block"}}>{glbword.split("\n")[2].split(":")[1]}</p>
        </h2>
        {/* <h3>
        {glbword.split("\n")[3]} 
        </h3>
        <h4>
        {glbword.split("\n")[4]} 
        </h4> */}
        </div>
      </header>
    </div>
  );
}

export default App;
