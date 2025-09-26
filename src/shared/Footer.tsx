import { Link } from "react-router-dom";
import SiteStore from "./SiteStore";
import { SocialNetwork } from "./SocialNetwork";

export const Footer = () => {
  return (
    <footer className="bg-[url('/footer-bg.png')] bg-no-repeat bg-cover bg-center">
      {/* Footer Top Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-14">
        <div
          id="footer-anchor"
          className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start"
        >
          {/* Logo */}
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-anchor="#footer-anchor"
            className="flex flex-col justify-center"
          >
            <Link to="/">
              <img
                src="/white-logo.png"
                alt="ScapeSync Logo"
                className="max-w-[135px] max-h-[56px] mx-auto lg:mx-0 cursor-pointer"
              />
            </Link>
          </div>

          {/* Description */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            data-aos-anchor="#footer-anchor"
            className="lg:col-span-2"
          >
            <p className="text-gray-300 text-center lg:text-left">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>

          {/* App Store Links */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-anchor="#footer-anchor"
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <SiteStore
              appStore="/white-app-store.png"
              playStore="/white-google-play-store.png"
            />
          </div>
        </div>
      </section>

      {/* Social Network Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
        data-aos-anchor="#footer-anchor"
        className="container mx-auto px-4 pb-8 md:pb-12"
      >
        <SocialNetwork cls="!justify-center lg:!justify-start" />
      </section>

      {/* Footer Bottom Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#footer-anchor"
        className="pt-1 border-t border-[#D7DAE0]/50"
      >
        <div className="container mx-auto px-4 py-1 text-sm text-gray-300 text-center lg:text-left">
          <p>&copy; 2021-2025, ScapeSync. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  );
};
