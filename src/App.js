import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Dashboard from "./Dashboard/Dashboard";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}