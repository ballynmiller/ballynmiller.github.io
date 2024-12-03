import { Card } from "./Card";

const accomplishments = [
  { subtitle: "years of experience", title: "12+" },
  { subtitle: "projects released", title: "100+" },
  { subtitle: "dollars saved", title: "25k" },
];

const Highlights = () => {
  return (
    <div className="cards hidden md:grid grid-cols-3 text-center pt-10 pb-3">
      {accomplishments.map(({ subtitle, title }) => (
        <Card key={title} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
};

export default Highlights;
