type CardProps = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export const Card = ({
  company,
  position,
  startDate,
  endDate,
  responsibilities,
}: CardProps) => {
  return (
    <div className="pb-5">
      <h1>
        <span className="text-wenge">{position}</span> -{" "}
        <span className="text-cerulean">{company}</span>
      </h1>
      <p>
        {startDate} - {endDate}
      </p>
      <div>
        {responsibilities.map((r) => (
          <p key={r} className="font-thin text-sm">
            {r}
          </p>
        ))}
      </div>
    </div>
  );
};
