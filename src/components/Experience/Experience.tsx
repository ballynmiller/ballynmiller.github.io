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
      `Led application migration from ColdFusion to React.js / Typescript, created brand wide components to be
       consumed across several brands, increasing performance and decreasing development time.`,
      `Led source code repository management and enforced version control policies using Git, improving team
       collaboration and code quality.`,
      `Mentored developers through code reviews and coaching, utilizing best practices with React Native, React.js,
       Node.js, and GraphQL to enhance team skills and cohesion.`,
      `Architected React-Native checkout workaround to maintain company compliance across several brands.`,
      `Engineered Builder.io components using React.js and React-Native, allowing for dynamic updates`,
    ],
  },
  {
    company: "SS&C Advent",
    position: "Software Engineer",
    startDate: "June 2019",
    endDate: "Oct 2022",
    responsibilities: [
      `Built a Node microservice for Trade Session snapshots, developed key features for the Rebalancer tool using
React.js, C#, and AWS. Maintained a high-performance React.js frontend and mentored junior developers.`,
    ],
  },
].sort((a, b) => (a.company < b.company ? 0 : -1));

const Experience = () => {
  return (
    <div className="p-8">
      <div className={` text-4xl py-5 ${fraunces.className} text-charcoal`}>
        Work Experience
      </div>
      {jobs.map((job) => (
        <Card key={job.company} {...job} />
      ))}
      <div className="text-cerulean">
        <Link href="/resume.pdf">Download Resume</Link>
      </div>
    </div>
  );
};

export default Experience;
