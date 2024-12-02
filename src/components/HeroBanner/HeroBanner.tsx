"use client";

import Styled from "styled-components";
import { fraunces } from "@/app/fonts";
import Image from "next/image";
import Socials from "../Socials";

const Wrapper = Styled.div.attrs({
  className: "p-8",
})`
`;

const Info = Styled.div.attrs({})`
`;

const HeroBanner = () => {
  return (
    <Wrapper>
      <Info className="block md:flex items-center gap-x-4">
        <div className="">
          <Image
            alt="self portrait"
            src={"/img/DSC_4973.jpeg"}
            width={900}
            height={900}
            className="rounded-full"
          />
        </div>
        <div className="lg:pl-14 self-center">
          <p
            className={`text-6xl font-bold ${fraunces.className} text-charcoal`}
          >
            Ballyn Miller
          </p>
          <p className="text-4xl text-cerulean">Software Enthusiast</p>
          <p className="text-xl font-light mt-5">
            {`I'm a Seasoned Staff Software Engineer and technical leader with
            extensive full-stack expertise. I specialize in tackling complex
            challenges and driving cross-platform collaboration. I excel at
            spearheading efforts to optimize systems for performance and
            maintainability.`}
          </p>
          <Socials />
        </div>
      </Info>
    </Wrapper>
  );
};

export default HeroBanner;
