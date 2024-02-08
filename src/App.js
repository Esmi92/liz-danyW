import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import InvitationHome from "./pages/InvitationHome";
import SavetheDate from "./pages/SavetheDate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<InvitationHome />} />
          <Route path="/saveTheDate" element={<SavetheDate />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
