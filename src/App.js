import React from "react";
import "./App.css";

import DaysCompleted from "./Components/DaysCompleted";

function App() {
  return (
    <div>
      <DaysCompleted days={15}> </DaysCompleted>
    </div>
  );
}

export default App;
