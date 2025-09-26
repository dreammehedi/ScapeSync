import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | ScapeSync</title>
      </Helmet>

      <Navbar />
      <div className="mx-4 py-8 md:py-10 lg:py-12">
        <main
          data-aos="fade-up"
          className="container mx-auto max-w-3xl px-4 py-10 bg-white rounded-md shadow-md"
        >
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <p className="text-gray-700 mb-4">
            Welcome to ScapeSync! By accessing or using our services, you agree
            to the following terms and conditions:
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Account Usage</h2>
          <p className="text-gray-700 mb-4">
            You are responsible for keeping your account secure. You must not
            share your login information with anyone.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. User Conduct</h2>
          <p className="text-gray-700 mb-4">
            You agree not to use our services for illegal activities, spamming,
            or posting harmful content.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may suspend or terminate your account for violations of these
            Terms of Service.
          </p>

          <p className="mt-6 text-gray-500 text-sm">
            Back to{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
