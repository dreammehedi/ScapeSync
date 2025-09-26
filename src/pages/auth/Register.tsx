import { Helmet } from "@dr.pogodin/react-helmet";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/pages/auth/authSlice";
import { AuthCommonHeader } from "../../shared/AuthCommonHeader";
import { Logo } from "../../shared/Logo";
import { getUserToken } from "../../utils/handleUserToken";

export const Register = () => {
  const userToken = getUserToken();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { isLoading }] = useRegisterMutation();

  const handleRegister = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (!formData.firstName) return toast.error("First name is required.");
      if (!formData.lastName) return toast.error("Last name is required.");
      if (!formData.email) return toast.error("Email is required.");
      if (!formData.password) return toast.error("Password is required.");
      if (formData.password.trim().length < 6)
        return toast.error("Password must be 6 charecter long.");

      if (!formData.confirmPassword)
        return toast.error("Confirm Password is required.");
      if (formData.password !== formData.confirmPassword)
        return toast.error("Passwords do not match.");

      const res = await registerUser({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        terms: agreeTerms,
      }).unwrap();
      if (res.status === 201) {
        toast.success(res.message || "Register successful!");
        navigate("/verify-account", {
          state: { email: res.data.email, isOtpVerify: false },
        });
      } else {
        toast.error(res.message || "Something went wrong!");
      }
    } catch (error: any) {
      toast.error(error?.message || error?.data?.message || "Register failed!");
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
        <title>Register | ScapeSync</title>
      </Helmet>

      <Logo />

      <main
        data-aos="zoom-in"
        className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-4 max-w-[480px]"
      >
        <AuthCommonHeader
          title="Create your Account"
          description="When Sports Meets Smart Tech."
        />

        <form
          onSubmit={handleRegister}
          className="grid grid-cols-2 gap-5 w-full"
        >
          <div className="relative w-full col-span-2 md:col-span-1">
            <input
              type="text"
              id="firstName"
              placeholder=" "
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className={getInputClass(formData.firstName)}
            />
            <label htmlFor="firstName" className="custom-label-field">
              First name
            </label>
          </div>

          <div className="relative w-full col-span-2 md:col-span-1">
            <input
              type="text"
              id="lastName"
              placeholder=" "
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className={getInputClass(formData.lastName)}
            />
            <label htmlFor="lastName" className="custom-label-field">
              Last name
            </label>
          </div>

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
              Email
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

          <div className="col-span-2 relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder=" "
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className={getInputClass(formData.confirmPassword)}
            />
            <label htmlFor="confirmPassword" className="custom-label-field">
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
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms((prev) => !prev)}
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
            </label>
          </div>

          <div className="col-span-2">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
            >
              {isLoading ? "Creating..." : "Create Account"}
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
