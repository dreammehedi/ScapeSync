import { SectionHeader } from "../../../shared/SectionHeader";

const testimonialsData = [
  {
    id: 1,
    image: "/user-1.png",
    name: "Farzana H.",
    profession: "Owner, CleanPro Services",
    feedback:
      "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
  },
  {
    id: 2,
    image: "/user-2.png",
    name: "Ahmed R.",
    profession: "Technician",
    feedback:
      "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
  },
  {
    id: 3,
    image: "/user-3.png",
    name: "Farzana H.",
    profession: "Rafiq M., Homeowner",
    feedback:
      "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <SectionHeader
        title="What Our Users Are Saying"
        description="Real stories from clients, employees, and business owners who use our app every day."
      />

      <div className="mt-8 md:mt-10 lg:mt-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-5 rounded-lg shadow-2xl shadow-green-100/60"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150} // stagger effect
              data-aos-once="true"
            >
              <div className="flex items-center mb-8">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <h3>{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.profession}
                  </p>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-sm text-gray-400 relative z-20 max-w-[400px]">
                  {testimonial.feedback}
                </p>
                <img
                  src="/quote.png"
                  alt="quote"
                  className="absolute -top-[20px] -left-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
