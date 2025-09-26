const siteFeaturesData = [
  {
    id: 1,
    icon: "/service-icon-1.png",
    title: "Easy Service Booking",
    description:
      "Streamlined booking process for clients with service catalogs and availability.",
  },
  {
    id: 2,
    icon: "/service-icon-2.png",
    title: "Real-Time Tracking",
    description:
      "Monitor job progress, employee hours, and project timelines with live updates.",
  },
  {
    id: 3,
    icon: "/service-icon-3.png",
    title: "Performance Analytics",
    description:
      "Comprehensive reporting and insights to improve business operations and efficiency.",
  },
  {
    id: 4,
    icon: "/service-icon-4.png",
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
  },
];

const SiteFeatures = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {siteFeaturesData?.map((feature, index) => {
            const borderClass = `
      ${index === 0 || index === 2 ? "md:border-r md:border-[#F4F6F8]" : ""}
      ${index === 0 || index === 1 ? "lg:border-r lg:border-[#F4F6F8]" : ""}
      ${index < 3 ? "xl:border-r xl:border-[#F4F6F8]" : ""}
    `;

            return (
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
                key={feature.id}
                className={`py-6 md:py-0 flex flex-col gap-y-1 justify-center md:justify-start items-center md:items-start text-center md:text-left ${borderClass}`}
              >
                <img
                  className="size-[48px] md:size-[42px] object-cover mb-5"
                  src={feature.icon}
                  alt={feature.icon}
                />
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-400 max-w-[300px] pr-0 md:pr-5">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SiteFeatures;
