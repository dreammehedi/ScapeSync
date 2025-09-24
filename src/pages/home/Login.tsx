import { Helmet } from "@dr.pogodin/react-helmet";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Logo } from "../../shared/Logo";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) return toast.error("Email is required.");
    if (!formData.password) return toast.error("Password is required.");

    console.log(formData);
    toast.success("Login successful!");
  };

  const getInputClass = (value: string) =>
    `peer custom-input-field ${value ? "has-value" : ""}`;

  return (
    <>
      <Helmet>
        <title>Login | ScapeSync</title>
      </Helmet>

      <Logo />

      <main className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-4 max-w-[480px]">
        <div className="flex flex-col items-center mb-6 md:mb-8 lg:mb-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold">
            Welcome to ScapeSync
          </h2>
          <p className="text-gray-500">
            Please share your login details so you can access the website.
          </p>
        </div>

        <form onSubmit={handleLogin} className="grid grid-cols-2 gap-5 w-full">
          <div className="col-span-2 relative w-full">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={getInputClass(formData.email)}
            />
            <label htmlFor="email" className="custom-label-field">
              Email address
            </label>
          </div>

          <div className="col-span-2 relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder=" "
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={getInputClass(formData.password)}
            />
            <label htmlFor="password" className="custom-label-field">
              Password
            </label>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              checked={isRemember}
              onChange={() => setIsRemember((prev) => !prev)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <Link to={"/forgot-password"} className="text-[#398b36]">
              Forgot password?
            </Link>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
            >
              Login
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

        {/* Continue with Google */}
        <div className="my-5 w-full">
          <button className="w-full text-[#637381] bg-white rounded-md py-3 cursor-pointer hover:bg-slate-100 transition-all font-medium border border-gray-300 flex items-center justify-center gap-2">
            <img src="/ic_google.png" alt="Google" /> Log in with Google
          </button>
        </div>

        <div>
          <p className="flex items-center gap-x-1 text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#398b36]">
              Get started
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};
