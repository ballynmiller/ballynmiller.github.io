export const Card = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="p-5">
      <p className="text-6xl">{title}</p>
      <p className="text-lg text-ashGray">{subtitle}</p>
    </div>
  );
};
