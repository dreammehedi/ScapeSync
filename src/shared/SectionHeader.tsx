type SectionHeaderPropsType = {
  title: string;
  description: string;
  cls?: string;
};

export const SectionHeader = ({
  title,
  description,
  cls,
}: SectionHeaderPropsType) => {
  return (
    <div className="container mx-auto px-4">
      <div
        className={`flex flex-col justify-center items-center text-center gap-y-1 ${cls}`}
      >
        <h1
          data-aos="slide-up"
          className="text-xl md:text-2xl lg:text-3xl xl:text-4 font-bold"
        >
          {title}
        </h1>
        <p
          data-aos="slide-up"
          data-aos-delay="100"
          className="text-sm text-gray-400 max-w-md mx-auto"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
