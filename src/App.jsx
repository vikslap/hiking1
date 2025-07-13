import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PlanPage from "./pages/PlanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plan" element={<PlanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
