import "./App.css";
import Main from "./pages/Main/Main";
import Quiz from "./pages/Quiz/Quiz";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(null);
  return mode === "single" ? <Quiz /> : <Main setMode={setMode} />;
}

export default App;
