import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      data-aos="zoom-in"
      className="flex items-center justify-center min-h-screen bg-gray-50 px-4"
    >
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-300">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
