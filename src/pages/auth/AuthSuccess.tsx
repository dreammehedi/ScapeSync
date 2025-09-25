import { Helmet } from "@dr.pogodin/react-helmet";
import { useNavigate } from "react-router-dom";
import { AuthCommonHeader } from "../../shared/AuthCommonHeader";
import { Logo } from "../../shared/Logo";

export const AuthSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Auth Success | ScapeSync</title>
      </Helmet>

      <Logo />

      <main className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-4 max-w-[480px]">
        <img src="auth-success-img.png" alt="Auth Success" />
        <br />
        <AuthCommonHeader
          title="Account Created Successfully!"
          description="Your account is set up! Just verify your email to get started."
        />

        <button
          onClick={() => navigate("/")}
          type="submit"
          className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
        >
          Go To Home
        </button>
      </main>
    </>
  );
};
