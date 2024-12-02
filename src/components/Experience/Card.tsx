import { Chip } from "@mui/material";

type CardProps = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
};

export const Card = ({
  company,
  position,
  startDate,
  endDate,
  responsibilities,
  technologies = [],
}: CardProps) => {
  return (
    <div className="pb-5">
      <h1>
        <span className="text-wenge">{position}</span> -{" "}
        <span className="text-cerulean">{company}</span>
      </h1>
      <p className="text-frenchGray">
        {startDate} - {endDate}
      </p>
      <ul className="list-disc px-5">
        {responsibilities.map((r) => (
          <li key={r} className="font-thin">
            {r}
          </li>
        ))}
      </ul>
      <div className="pt-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Chip
            color="primary"
            label={tech}
            sx={{ backgroundColor: "#605856" }}
          />
        ))}
      </div>
    </div>
  );
};
