import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/home/Error";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/home/PrivacyPolicy";
import { Register } from "./pages/home/Register";
import TermsOfService from "./pages/home/TermsOfService";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
