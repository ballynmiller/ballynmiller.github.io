import { fraunces } from "@/app/fonts";
import { Card } from "./Card";
import Link from "next/link";

const jobs = [
  {
    company: "Techstyle OS ( JustFab )",
    position: "Staff Software Engineer",
    startDate: "Oct 2022",
    endDate: "Oct 2024",
    responsibilities: [
      `Led migration from ColdFusion to Next.js, React.js, and TypeScript, creating reusable components that boosted performance and reduced development time across brands.`,
      `Established Git standards to improve team collaboration, code quality, and delivery consistency.`,
      `Mentored developers in Next.js, React Native, and GraphQL, driving best practices and team alignment.`,
      `Designed a compliant checkout solution using React Native, ensuring seamless workflows across brands.`,
      `Created dynamic Builder.io components with React.js and React Native, enabling real-time updates.`,
      `Led technical strategy for a mobile app, integrating React Native with custom native iOS/Android code to enhance scalability and performance.`,
      `Implemented a GitHub Actions pipeline to efficiently deploy and distribute native applications using open-source solutions.`,
      `Streamlined onboarding by defining architectural patterns, standards, and tools to ensure long-term success.`,
    ],
    technologies: [
      "Javascript",
      "Typescript",
      "Redux",
      "React",
      "Styled-Components",
      "React-Native",
      "ElasticSearch",
      "GraphQL",
      "Webpack",
      "Github Actions",
    ],
  },
  {
    company: "SS&C Advent",
    position: "Software Engineer",
    startDate: "June 2019",
    endDate: "Oct 2022",
    responsibilities: [
      `Implemented key features for the Rebalancer tool using React.js, C#, and AWS, ensuring a high-performance frontend while mentoring junior developers to enhance team capabilities.`,
    ],
    technologies: ["React", "Redux", "Typescript", "C#", "AWS"],
  },
].sort((a, b) => (a.company < b.company ? 0 : -1));

const Experience = () => {
  return (
    <div className="p-8">
      <div className={` text-4xl md:py-5 ${fraunces.className} text-charcoal`}>
        Work Experience
      </div>
      {jobs.map((job) => (
        <Card key={job.company} {...job} />
      ))}
      <div className="text-cerulean">
        <Link href="/resume.pdf" download="resume.pdf">
          Download Resume
        </Link>
      </div>
    </div>
  );
};

export default Experience;
