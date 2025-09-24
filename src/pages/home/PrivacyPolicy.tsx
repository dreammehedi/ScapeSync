import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { Logo } from "../../shared/Logo";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ScapeSync</title>
      </Helmet>

      <Logo />
      <div className="mx-4">
        <main className="container mx-auto max-w-3xl px-4 py-10 bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-gray-700 mb-4">
            ScapeSync respects your privacy. This policy explains how we
            collect, use, and protect your information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Information Collection
          </h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide when creating an account, using
            our services, or contacting support.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Usage</h2>
          <p className="text-gray-700 mb-4">
            Your data is used to improve our services, communicate with you, and
            provide personalized experiences.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Data Protection
          </h2>
          <p className="text-gray-700 mb-4">
            We implement reasonable security measures to protect your personal
            information.
          </p>

          <p className="mt-6 text-gray-500 text-sm">
            Back to{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </p>
        </main>
      </div>
    </>
  );
}
