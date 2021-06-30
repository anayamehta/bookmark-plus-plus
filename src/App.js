
import React from 'react';
import Tabs from "./components/Tabs";
import Bookmarks from "./components/Bookmarks"
import './App.css';

function App() {

  // chrome.storage.sync.get(function(items){
  //   console.log(items)
  //   console.log(items.data)
  // })

  return (
    <div>
      <h1>bookmark++</h1>
     <Tabs> 
       <div label="Bookmarks"> 
          <Bookmarks></Bookmarks> 
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