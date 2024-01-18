import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Planet from "./components/planet";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Home Page</p>} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </Router>
  );
};

export default App;
