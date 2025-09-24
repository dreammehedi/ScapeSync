type AuthCommonHeaderProps = {
  title: string;
  description: string;
  cls?: string;
};

export const AuthCommonHeader = ({
  title,
  description,
  cls,
}: AuthCommonHeaderProps) => {
  return (
    <div
      className={`flex flex-col items-center mb-6 md:mb-8 lg:mb-10 text-center ${cls}`}
    >
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};
