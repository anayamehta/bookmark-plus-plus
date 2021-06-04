import React from 'react';
import Tabs from "./components/Tabs";
import './App.css';

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
     <Tabs> 
       <div label="Bookmarks"> 
         See ya later, <em>other bookmark system</em>! 
       </div> 
       <div label="Tags"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Analytics"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;