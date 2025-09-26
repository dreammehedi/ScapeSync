import { Helmet } from "@dr.pogodin/react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthCommonHeader } from "../../shared/AuthCommonHeader";
import { Logo } from "../../shared/Logo";

export const AuthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state.title;
  const description = location.state.description;
  const isLogin = location.state?.isLogin || false;

  return (
    <>
      <Helmet>
        <title>Auth Success | ScapeSync</title>
      </Helmet>

      <Logo />

      <main
        data-aos="zoom-in"
        className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-4 max-w-[480px]"
      >
        <img src="auth-success-img.png" alt="Auth Success" />
        <br />
        <AuthCommonHeader title={title} description={description} />

        <button
          onClick={() => navigate(isLogin ? "/login" : "/")}
          type="submit"
          className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
        >
          {isLogin ? "Go To Login" : "Go To Home"}
        </button>
      </main>
    </>
  );
};
