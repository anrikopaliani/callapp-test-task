import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Chart } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default App;
