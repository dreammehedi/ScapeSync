import { Helmet } from "@dr.pogodin/react-helmet";
import { ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthCommonHeader } from "../../shared/AuthCommonHeader";
import { Logo } from "../../shared/Logo";

export const VerifyAccount = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      const newCode = [...code];
      newCode[index] = val;
      setCode(newCode);

      if (val && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("Text").trim().slice(0, 6);
    if (/^\d{1,6}$/.test(pasteData)) {
      const pasteCode = pasteData.split("");
      console.log(pasteCode, "pasteCode");
      if (pasteCode.length !== 6) {
        toast.error("Confimation code must be 6 digit!");
        return;
      }
      setCode(pasteCode);
      const lastIndex = pasteCode.length - 1;
      inputsRef.current[lastIndex]?.focus();
    }
    e.preventDefault();
  };

  const handleVerifyAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.some((c) => !c)) {
      return toast.error("Please enter the 6-digit code.");
    }
    console.log("Verification code:", code.join(""));
    toast.success("Account verified successfully!");
  };

  return (
    <>
      <Helmet>
        <title>Verify Account | ScapeSync</title>
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
          title="Please check your email!"
          description="We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below boxes to verify your email."
        />

        <form
          onSubmit={handleVerifyAccount}
          className="grid grid-cols-2 gap-5 w-full"
        >
          <div className="col-span-2 flex justify-between gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onPaste={handlePaste}
                ref={(el) => (inputsRef.current[index] = el)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:border-[#398b36] focus:outline-none"
              />
            ))}
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full text-white bg-[#398b36] rounded-md py-3 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium mt-5"
            >
              Verify
            </button>
          </div>
        </form>

        <div>
          <p className="flex items-center gap-x-1 text-sm mt-5">
            Don’t have a code?
            <span className="text-[#398b36] cursor-pointer">Resend code</span>
          </p>
        </div>
      </main>
    </>
  );
};
