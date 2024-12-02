export const Card = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <p className="text-6xl text-charcoal">{title}</p>
      <p className="text-lg text-wenge">{subtitle}</p>
    </div>
  );
};
