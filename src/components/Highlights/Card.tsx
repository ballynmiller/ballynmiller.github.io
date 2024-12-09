import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";

export const Card = ({
  showTooltip = false,
  subtitle,
  title,
  tooltipText,
}: {
  showTooltip: boolean;
  subtitle: string;
  title: string;
  tooltipText: string;
}) => {
  return (
    <div>
      <p className="text-6xl text-charcoal">{title}</p>
      <p className="text-lg text-wenge">
        {subtitle}
        {showTooltip && (
          <Tooltip title={tooltipText}>
            <InfoIcon className="text-frenchGray" sx={{ fontSize: 16 }} />
          </Tooltip>
        )}
      </p>
    </div>
  );
};
