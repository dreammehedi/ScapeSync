import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { AuthSuccess } from "./pages/auth/AuthSuccess";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { VerifyAccount } from "./pages/auth/VerifyAccount";
import ErrorPage from "./pages/Error";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
