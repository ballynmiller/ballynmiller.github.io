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
            {`Frontend Engineer with 12+ years of experience designing and developing high-performance, scalable, and maintainable web
              applications. Proven expertise in building reusable user interface components with modern frameworks including React.js and
              Next.js. Skilled in architectural design for complex front-end systems, performance optimization, and writing testable code.`}
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
