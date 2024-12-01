"use client";

import Styled from "styled-components";
import { fraunces } from "@/app/fonts";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Wrapper = Styled.div.attrs({
  className: "bg-cover h-screen relative",
})`
  background-image: url('/img/DSC_4992.jpeg');
  color: #fff;
  display: grid;
  grid-template-areas:
    ". . ."
    "info . ."
    ". footer .";
  grid-template-columns: 600px 1fr 1fr;
`;

const Info = Styled.div.attrs({
  className: "w-full",
})`
  display: flex;
  align-items: center;
  grid-area: info;
  text-shadow: 1px 0px 2px #000;
`;

const ScrollComp = Styled.div`
  animation: blink linear 3s 3;
  grid-area: footer;
  display: flex;
  justify-content: center; 
  align-items: flex-end;

  @keyframes blink {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const HeroBanner = () => {
  return (
    <Wrapper className="invisible xl:visible">
      <Info>
        <div className="text-left pl-20">
          <p
            className={`text-6xl font-bold ${fraunces.className} text-cambridgeBlue`}
          >
            Ballyn Miller
          </p>
          <p className="text-4xl text-timberwolf">Software Enthusiast</p>
          <p className="text-xl font-light mt-5">
            I'm a Seasoned Staff Software Engineer and technical leader with
            extensive full-stack expertise. I specialize in tackling complex
            challenges and driving cross-platform collaboration. I excel at
            spearheading efforts to optimize systems for performance and
            maintainability.
          </p>
        </div>
      </Info>
      {/* <ScrollComp>
        <ArrowDownwardIcon sx={{ fontSize: 60, color: "#D3D5D4" }} />
      </ScrollComp> */}
    </Wrapper>
  );
};

export default HeroBanner;
