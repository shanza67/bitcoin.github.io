import React from "react";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";

function App() {
  return (
    <div className= {`d-flex flex-column w-100 gap-5` }  >
    <Header/>
    <Toolbar/>
    
    </div>
  );
}

export default App;
