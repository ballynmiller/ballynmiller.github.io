import { fraunces } from "@/app/fonts";
import Image from "next/image";
import Socials from "../Socials";

const HeroBanner = () => {
  return (
    <div className="p-8">
      <div className="block md:flex items-center gap-x-4">
        <div className="pb-10 md:pb-0">
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
      </div>
    </div>
  );
};

export default HeroBanner;
