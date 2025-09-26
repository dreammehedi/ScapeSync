import { useState } from "react";
import { SectionHeader } from "../../../shared/SectionHeader";

const faqsData = [
  {
    id: 1,
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    id: 2,
    question: "Can I assign multiple employees to one job?",
    answer:
      "Yes! You can assign multiple employees to a single job, making it easy to collaborate and get the work done.",
  },
  {
    id: 3,
    question: "Does it work on both mobile and desktop?",
    answer:
      "Yes! Our app is fully responsive and works seamlessly on both mobile and desktop devices.",
  },
];

export const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 md:py-10 lg:py-12">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Quick answers to help you get the most out of our app."
      />

      <div className="mt-8 md:mt-10 lg:mt-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqsData.map((faq) => (
            <div
              key={faq.id}
              className="border border-green-100/80 p-3 rounded-2xl"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex justify-between items-center py-3 "
              >
                <span className="text-left">{faq.question}</span>
                <span
                  className={`smooth-transition ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                >
                  {openId === faq.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden smooth-transition ${
                  openId === faq.id ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="pb-5 text-sm text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
