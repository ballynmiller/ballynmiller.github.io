import { Card } from "./Card";

const accomplishments = [
  { subtitle: "years of experience", title: "12+" },
  { subtitle: "projects released", title: "100+" },
  {
    showTooltip: true,
    subtitle: "dollars saved",
    title: "25k",
    tooltipText:
      "Developed a compliant checkout solution with React Native, reducing costs associated with fines and fees.",
  },
];

const Highlights = () => {
  return (
    <div className="cards hidden md:grid grid-cols-3 text-center pt-10 pb-3">
      {accomplishments.map(
        ({ showTooltip = false, subtitle, title, tooltipText = "" }) => (
          <Card
            key={title}
            showTooltip={showTooltip}
            subtitle={subtitle}
            title={title}
            tooltipText={tooltipText}
          />
        )
      )}
    </div>
  );
};

export default Highlights;
