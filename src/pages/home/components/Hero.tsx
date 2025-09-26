import SiteStore from "../../../shared/SiteStore";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 h-fit lg:h-[calc(100vh-96px)] xl:max-h-[700px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center h-full">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-y-3 md:gap-y-4 py-5 md:py-4 lg:py-0">
          <div className="relative pt-8 md:pt-6 lg:pt-0">
            <h1 className="lg:hidden font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[450px]">
              All Your Jobs One Smart App
            </h1>
            <h1 className="hidden font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[450px] lg:flex flex-wrap items-center gap-x-2 leading-snug text-center lg:text-left">
              All{" "}
              <span className="relative inline-block">
                Your Jobs
                <img
                  src="/shape-2.png"
                  alt="Decoration"
                  className="absolute -bottom-1 lg:bottom-2 left-1/2 -translate-x-1/2 w-full max-w-[90px] md:max-w-[130px] max-h-[100px]"
                />
              </span>{" "}
              One{" "}
              <span className="relative inline-block">
                Smart App
                <img
                  src="/shape-1.png"
                  alt="Decoration"
                  className="absolute -bottom-2 left-0 w-full "
                />
              </span>
            </h1>
          </div>

          <p>
            Built for business owners, employees, and clients streamline job
            scheduling, service tracking, and team management in one powerful
            app.
          </p>
          <br />
          <SiteStore
            appStore="/app-store.png"
            playStore="/google-play-store.png"
          />
        </div>
        <div className="lg:hidden">
          <img
            src="/mobile-hand-phone.png"
            alt="Mobile Hand Phone"
            className="mix-blend-multiply max-h-[350px] w-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
