const buildEveryoneData = [
  {
    id: 1,
    tag: "Users",
    title: "Book services, track progress and stay updated",
    description:
      "Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.",
    items: [
      "Book services in seconds",
      "Track real-time job updates",
      "Schedule appointments at your convenience",
    ],
    image: "/app-version-1.png",
  },
  {
    id: 2,
    tag: "Business Owners",
    title: "Assign jobs, monitor performance, and streamline operations.",
    description:
      "Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.",
    items: [
      "Assign jobs to the right team member",
      "Monitor performance in real time",
      "Monitor performance in real time",
    ],
    image: "/app-version-2.png",
  },
  {
    id: 3,
    tag: "Employees",
    title: "See tasks, track time, and navigate routes with ease.",
    description:
      "Everything you need to manage your workday from job assignments to optimized routes and time logging.",
    items: [
      "Assign jobs to the right team member",
      "Monitor performance in real time",
      "Manage clients and services seamlessly",
    ],
    image: "/app-version-3.png",
  },
];

export const BuildEveryone = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col justify-center items-center text-center gap-y-1`}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4 font-bold flex flex-wrap items-center gap-x-2 leading-snug ">
            Build for
            <span className="relative inline-block">
              Everyone
              <img
                src="/shape-3.png"
                alt="Decoration"
                className="absolute -bottom-8 left-0 w-full "
              />
            </span>
          </h1>

          <br />
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Whether you're booking services, managing tasks, or running
            operations, we've designed the perfect experience for you.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-10 lg:mt-12 container mx-auto px-4 space-y-12 relative z-10">
        <img
          src="/shape-4.png"
          alt="shape-4"
          className="hidden md:inline-block absolute top-[-55px] left-[90px] z-0 md:max-h-[60px] max-h-[120px]"
        />
        <img
          src="/shape-6.png"
          alt="shape-6"
          className="hidden md:inline-block absolute top-[0px] right-1/2 z-0 md:max-h-[750px] max-h-[1000px]"
        />
        <img
          src="/shape-5.png"
          alt="shape-5"
          className="hidden md:inline-block absolute top-[-70px] right-[0px] z-0 md:max-h-[400px] max-h-[600px] "
        />
        {buildEveryoneData.map((build, ind) => (
          <div
            key={build.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Text Block */}
            <div
              className={`relative overflow-hidden ${
                ind % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              {/* Conditional Glow for even/odd */}
              {ind % 2 === 0 ? (
                <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
              ) : (
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
              )}

              <span className="font-medium text-green-500 border border-green-500 px-3 py-1 rounded-full inline-block mr-auto text-sm relative z-10">
                {build.tag}
              </span>
              <h1 className="font-semibold text-xl md:text-2xl mt-2 relative z-10">
                {build.title}
              </h1>
              <p className="text-gray-400 text-sm mt-2 relative z-10">
                {build.description}
              </p>

              <ul className="flex flex-col gap-y-2 mt-4 relative z-10">
                {build.items.map((item, ind) => {
                  const borderClasses = [
                    "border-green-500/100",
                    "border-green-500/70",
                    "border-green-500/50",
                    "border-green-500/40",
                  ];
                  const borderClass =
                    borderClasses[ind] || "border-green-500/30";

                  return (
                    <li
                      key={ind}
                      className={`text-gray-800 text-sm pl-4 py-1 border-l-[3px] ${borderClass}`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Image Block */}
            <div className="relative flex items-center justify-center">
              {/* Circular Glow */}
              <div className="absolute w-60 h-60 rounded-full bg-green-200 opacity-50 blur-3xl"></div>

              <img
                src={build.image}
                alt={build.title}
                className="relative z-10 md:w-full rounded-xl h-auto w-[90%]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
