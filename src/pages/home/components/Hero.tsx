export const Hero = () => {
  return (
    <div className="container mx-auto px-4 h-[calc(100vh-96px)] max-h-[700px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center h-full">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-y-3 md:gap-y-4 py-5 md:py-4 lg:py-0">
          <div className="relative">
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
          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <img
              src="/app-store.png"
              alt="App Store"
              className="w-[160px] h-[50px] object-fill"
            />
            <img
              src="/google-play-store.png"
              alt="Google Play Store"
              className="w-[160px] h-[50px] object-fill"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <img
            src="/mobile-hand-phone.png"
            alt="Mobile Hand Phone"
            className="mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};
