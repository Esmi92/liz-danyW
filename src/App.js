import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
