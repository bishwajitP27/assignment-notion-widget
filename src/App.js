import React from "react";
import ShareWidget from "./components/ShareWidget";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ShareWidget workspaceMembers={25} />
    </div>
  );
}

export default App;
