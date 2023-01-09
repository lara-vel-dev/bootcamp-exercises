import { useState, createContext } from "react";
import Controller from "./components/Controller";

export const ThemeContext = createContext();

function App() {
  let [color, setColor] = useState("black");

  return (
    <ThemeContext.Provider value={[color, setColor]}>
      <div className="App" style={{ backgroundColor: color, 
        color: "white" }}>
        <h1>Welcome to Color Picker</h1>
        <br></br>
        <p>Choose a color to see the magic happen</p>
        <br></br>
        <Controller />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
