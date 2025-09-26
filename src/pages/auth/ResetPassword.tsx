import { Helmet } from "@dr.pogodin/react-helmet";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/pages/auth/authSlice";
import { AuthCommonHeader } from "../../shared/AuthCommonHeader";
import { Logo } from "../../shared/Logo";

export const ResetPassword = () => {
  const location = useLocation();
  const token = location.state.token;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleResetPassword = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (!formData.password) return toast.error("Password is required.");
      if (formData.password.trim().length < 6)
        return toast.error("Password must be 6 charecter long.");

      if (!formData.confirmPassword)
        return toast.error("Confirm Password is required.");
      if (formData.password !== formData.confirmPassword)
        return toast.error("Passwords do not match.");

      const res = await resetPassword({
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        token,
      }).unwrap();

      if (res.status) {
        toast.success(res.message || "Password reset success!");
        navigate("/auth-success", {
          state: {
            title: "Password Changed Successfully!",
            description:
              "Your account is set up! Just verify your email to get started.",
            isLogin: true,
          },
        });
      } else {
        toast.error(res.message || "Something went wrong!");
      }
    } catch (error: any) {
      toast.error(
        error?.message || error?.data?.message || "Password reset failed!"
      );
    }
  };

  const getInputClass = (value: string) =>
    `peer custom-input-field ${value ? "has-value" : ""}`;

  if (!token) {
    return <Navigate to={"/forgot-password"} replace />;
  }
  return (
    <>
      <Helmet>
        <title>Reset Password | ScapeSync</title>
      </Helmet>

      <Logo />

      <main className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-96px)] px-4 max-w-[480px]">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center justify-start mr-auto mb-8 gap-x-2 text-[#398b36] text-sm cursor-pointer"
        >
          <ChevronLeft size={16} /> <span>Back</span>
        </div>

        <AuthCommonHeader
          cls="!justify-start !text-left !items-start"
          title="Enter your new password?"
          description="Please enter the email address associated with your account, and
            we'll email you a link to reset your password."
        />

        <form
          onSubmit={handleResetPassword}
          className="grid grid-cols-2 gap-5 w-full"
        >
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

          <div className="col-span-2">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
            >
              {isLoading ? "Processing..." : "Update Password"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
