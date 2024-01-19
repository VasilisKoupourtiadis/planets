import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Planet from "./components/planet";
import Planets from "./components/planets";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Planets />} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </Router>
  );
};

export default App;
