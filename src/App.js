import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="nogginy" element={<Main />} />
        <Route path="nogginy/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
