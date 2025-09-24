import { Helmet } from "@dr.pogodin/react-helmet";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthCommonHeader } from "../../shared/AuthCommonHeader";
import { Logo } from "../../shared/Logo";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) return toast.error("Email is required.");

    console.log(formData);
    toast.success("Password reset successful!");
  };

  const getInputClass = (value: string) =>
    `peer custom-input-field ${value ? "has-value" : ""}`;

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
          title="Forgot your password?"
          description="Please enter the email address associated with your account, and
            we'll email you a link to reset your password."
        />

        {/* <div className="flex flex-col mb-6 md:mb-8 lg:mb-10 ">
          <h2 className="text-xl md:text-2xl font-bold">
            Forgot your password?
          </h2>
          <p className="text-gray-500">
            Please enter the email address associated with your account, and
            we'll email you a link to reset your password.
          </p>
        </div> */}

        <form
          onSubmit={handleResetPassword}
          className="grid grid-cols-2 gap-5 w-full"
        >
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

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
            >
              Reset Password
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
