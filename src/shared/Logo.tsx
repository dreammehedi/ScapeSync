import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <nav className="container mx-auto py-5 px-4">
        <Link to={"/"}>
          <img
            className="max-w-[135px] max-h-[56px] mx-auto md:mx-0 cursor-pointer"
            src="/logo.png"
            alt="ScapeSync"
          />
        </Link>
      </nav>
    </>
  );
};
