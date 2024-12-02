import Styled from "styled-components";
import { Card } from "./Card";

const accomplishments = [
  { subtitle: "years of experience", title: "12+" },
  { subtitle: "projects released", title: "100+" },
  { subtitle: "dollars saved", title: "25k" },
];

const Cards = Styled.div`
  div:nth-child(2) {
    border-left: 3px solid #D0CCD0;
    border-right: 3px solid #D0CCD0;
  }
`;

const Highlights = () => {
  return (
    <Cards className="grid grid-cols-3 text-center pt-10 pb-3">
      {accomplishments.map(({ subtitle, title }) => (
        <Card key={title} title={title} subtitle={subtitle} />
      ))}
    </Cards>
  );
};

export default Highlights;
