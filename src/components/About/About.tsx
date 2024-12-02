import { fraunces } from "@/app/fonts";

const About = () => {
  return (
    <div id="about" className="p-8">
      <h1 className={`text-4xl text-charcoal py-5 ${fraunces.className}`}>
        About
      </h1>
      <div className="font-thin">
        <p>
          I’m a self-motivated Staff Software Engineer with 17 years of
          experience who loves tackling new challenges and turning complex
          problems into elegant, easy-to-maintain solutions. I’m passionate
          about writing clean, thoughtful code and collaborating with teams to
          create meaningful results.
        </p>
        <p className="pt-5">
          I enjoy working closely with people across different teams, building
          strong relationships, and helping everyone stay aligned to achieve
          shared goals. I bring a positive, can-do attitude to my work and
          thrive in environments where creativity, collaboration, and learning
          are valued.
        </p>
      </div>
    </div>
  );
};

export default About;
