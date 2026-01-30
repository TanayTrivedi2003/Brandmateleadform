import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadPage from "./Components/leadpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Lead Campaign Page */}
        <Route path="/" element={<LeadPage />} />

        {/* Future routes example */}
        {/* <Route path="/thank-you" element={<ThankYou />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
