import { Link } from "react-router-dom";
import SiteStore from "./SiteStore";
import { SocialNetwork } from "./SocialNetwork";

export const Footer = () => {
  return (
    <footer className="bg-[url('/footer-bg.png')] bg-no-repeat bg-cover bg-center">
      {/* footer top */}
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">
          <div className="flex flex-col justify-center">
            <Link to={"/"}>
              <img
                className="max-w-[135px] max-h-[56px] mx-auto lg:mx-0 cursor-pointer"
                src="/white-logo.png"
                alt="ScapeSync"
              />
            </Link>
          </div>
          <div className="lg:col-span-2">
            <p className="text-gray-300 text-center lg:text-left">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>
          <div className="lg:col-span-2">
            <SiteStore
              appStore="/white-app-store.png"
              playStore="/white-google-play-store.png"
            />
          </div>
        </div>
      </section>

      {/* social network */}
      <section className="container mx-auto px-4 pb-8 md:pb-12 ">
        <SocialNetwork cls="!justify-center lg:!justify-start" />
      </section>

      {/* footer bottom */}
      <section className="pt-1 border-t border-[#D7DAE0]/50">
        <div className="container mx-auto px-4 py-1 text-sm text-gray-300 text-center lg:text-left">
          <p>&copy; 2021-2025, ScapeSync. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  );
};
