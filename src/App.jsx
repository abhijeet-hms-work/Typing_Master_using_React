import { useState } from "react";

import "./App.css";
import Statistics from "./components/Statistics/Statistics";
import Screen from "./components/Screen/Screen";

function App() {
  const [time, setTime] = useState(30);

  return (
    <div className="App">
      <p>helow</p>
      <Statistics time={time} />
      <Screen time={time} setTime={setTime} />
    </div>
  );
}

export default App;
