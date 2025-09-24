import { Helmet } from "@dr.pogodin/react-helmet";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../shared/Logo";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };
  return (
    <>
      <Helmet>
        <title>Register | ScapeSync</title>
      </Helmet>

      <Logo />

      {/* Main section */}
      <main className="container mx-auto  flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-4 max-w-[480px]">
        {/* Form header */}
        <div className="flex flex-col items-center mb-6 md:mb-8 lg:mb-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold">Create your Account</h2>
          <p className="text-gray-500">When Sports Meets Smart Tech.</p>
        </div>

        {/* Form */}
        <form
          action="#"
          onSubmit={handleRegister}
          className="grid grid-cols-2 gap-5 w-full"
        >
          <div className="relative w-full col-span-2 md:col-span-1 ">
            <input
              type="text"
              id="firstName"
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-300 rounded-md px-2 py-3 transition-all focus:outline-none focus:border-gray-400"
            />
            <label
              htmlFor="firstName"
              className="absolute cursor-text bg-white px-1 left-2.5 top-3 text-slate-400 text-sm transition-all origin-left
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
            >
              First name
            </label>
          </div>

          <div className="relative w-full col-span-2 md:col-span-1 ">
            <input
              type="text"
              id="lastName"
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-300 rounded-md px-2 py-3 transition-all focus:outline-none focus:border-gray-400"
            />
            <label
              htmlFor="lastName"
              className="absolute cursor-text bg-white px-1 left-2.5 top-3 text-slate-400 text-sm transition-all origin-left
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
            >
              Last name
            </label>
          </div>

          <div className="col-span-2 relative w-full">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-300 rounded-md px-2 py-3 transition-all focus:outline-none focus:border-gray-400"
            />
            <label
              htmlFor="email"
              className="absolute cursor-text bg-white px-1 left-2.5 top-3 text-slate-400 text-sm transition-all origin-left
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
            >
              Email
            </label>
          </div>

          <div className="col-span-2 relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-300 rounded-md px-2 py-3 transition-all focus:outline-none focus:border-gray-400"
            />
            <label
              htmlFor="password"
              className="absolute cursor-text bg-white px-1 left-2.5 top-3 text-slate-400 text-sm transition-all origin-left
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
            >
              Password
            </label>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="col-span-2 relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-300 rounded-md px-2 py-3 transition-all focus:outline-none focus:border-gray-400"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute cursor-text bg-white px-1 left-2.5 top-3 text-slate-400 text-sm transition-all origin-left
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
            >
              Confirm Password
            </label>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="col-span-2 w-full flex items-center gap-2">
            <input
              checked={agreeTerms}
              onChange={() => setAgreeTerms((prev) => !prev)}
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to{" "}
              <Link to="/terms-of-service" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <div className="col-span-2">
            <button className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium">
              Create Account
            </button>
          </div>
        </form>

        <div className="flex items-center mt-5 w-full">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm uppercase bg-white">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="my-5 w-full">
          <button className="w-full text-[#637381] bg-white rounded-md py-3 cursor-pointer hover:bg-slate-100 transition-all font-medium border border-gray-300 flex items-center justify-center gap-2">
            <img src="/ic_google.png" alt="Google" /> Continue with Google
          </button>
        </div>

        <div>
          <p className="flex items-center gap-x-1 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#398b36]">
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};
