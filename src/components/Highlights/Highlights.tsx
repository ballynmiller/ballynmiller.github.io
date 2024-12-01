import { Card } from "./Card";

const accomplishments = [
  { subtitle: "years", title: "12+" },
  { subtitle: "projects released", title: "100+" },
  { subtitle: "dollars saved", title: "25k" },
];

const Highlights = () => {
  return (
    <div className="grid grid-cols-3 text-center">
      {accomplishments.map(({ subtitle, title }) => (
        <Card title={title} subtitle={subtitle} />
      ))}
    </div>
  );
};

export default Highlights;
