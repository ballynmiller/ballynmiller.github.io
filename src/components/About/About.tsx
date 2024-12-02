import { fraunces } from "@/app/fonts";

const About = () => {
  return (
    <div id="about" className="p-8">
      <h1 className={`text-4xl text-charcoal md:py-5 ${fraunces.className}`}>
        About
      </h1>
      <div className="font-thin">
        <p>
          I’m a self-motivated Staff Software Engineer with over 12 years of
          experience. I love tackling new challenges and turning complex
          problems into elegant, easy-to-maintain solutions. I’m passionate
          about writing clean, thoughtful code and collaborating with teams to
          create meaningful results.
        </p>
        <p className="pt-5">
          I enjoy working closely with people across teams, building strong
          relationships, and helping everyone stay aligned to achieve shared
          goals.
        </p>
      </div>
    </div>
  );
};

export default About;
