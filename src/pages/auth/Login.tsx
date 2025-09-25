import { Helmet } from "@dr.pogodin/react-helmet";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { storeAuthData } from "../../redux/feature/authStoreSlice";
import { useLoginMutation } from "../../redux/pages/auth/authSlice";
import { AuthCommonHeader } from "../../shared/AuthCommonHeader";
import { Logo } from "../../shared/Logo";
import { getUserToken, setUserToken } from "../../utils/handleUserToken";

export const Login = () => {
  const userToken = getUserToken();

  const [showPassword, setShowPassword] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { isLoading }] = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (!formData.email) return toast.error("Email is required.");
      if (!formData.password) return toast.error("Password is required.");
      if (formData.password.trim().length < 6)
        return toast.error("Password must be 6 charecter long.");

      const res = await loginUser({
        email: formData.email,
        password: formData.password,
        remember_me: isRemember,
      }).unwrap();

      console.log(res, "on res");
      if (res.status) {
        setUserToken(res.token);
        dispatch(storeAuthData(res.data));
        setFormData({ email: "", password: "" });
        setIsRemember(false);
        toast.success(res.message || "Login successful!");
        navigate("/");
      } else {
        toast.error(res.message || "Something went wrong!");
      }
    } catch (error: any) {
      if (error.status === 300) {
        toast.error(
          error?.data.message || "At first verify your email address!"
        );
        navigate("/verify-account", {
          state: { email: error.data.data.email, isOtpVerify: false },
        });
      }
      toast.error(error?.message || error?.data?.message || "Login failed!");
    }
  };

  const getInputClass = (value: string) =>
    `peer custom-input-field ${value ? "has-value" : ""}`;

  if (userToken) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <>
      <Helmet>
        <title>Login | ScapeSync</title>
      </Helmet>

      <Logo />

      <main className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-4 max-w-[480px]">
        <AuthCommonHeader
          title="Welcome to ScapeSync"
          description="Please share your login details so you can access the website."
        />

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
          <div className="w-full flex items-center justify-end gap-2">
            <Link to={"/forgot-password"} className="text-[#398b36]">
              Forgot password?
            </Link>
          </div>

          <div className="col-span-2">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
            >
              {isLoading ? "Loging..." : "Login"}
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
