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
      `Leveraged HTML5, CSS, and JavaScript to develop high-performance, reusable, and accessible UI components, ensuring
        WCAG compliance for improved shopping experiences.`,
      `Enhanced front-end architecture using React.js optimizations such as code splitting and lazy loading, resulting in faster
        initial load times for thousands of users.`,
      `Translated Figma designs into responsive, mobile-first interfaces, creating seamless shopping experiences.`,
      `Enhanced data retrieval performance by integrating GraphQL on Product Detail and Listing pages, reducing latency and
        improving catalog browsing.`,
      `Streamlined theme management for multiple brands using Styled-Components, enabling faster updates and consistent
        branding.`,
      `Collaborated with product managers, designers, and backend engineers to deliver new e-commerce features,
        accelerating release cycles by 20%.`,
      `Mentored 8+ developers through code reviews and onboarding, improving team productivity and fostering technical
        growth.`,
      `Led React Native initiatives, optimizing mobile app onboarding processes and shortening development timelines.`,
      `Delivered a cost-saving AppCenter replacement, reducing mobile ecosystem expenses by $15,000 annually.`,
    ],
    technologies: [
      "Javascript",
      "Typescript",
      "Redux",
      "React",
      "Styled-Components",
      "React-Native",
      "GraphQL",
      "Webpack",
      "Github Actions",
      "HTML5",
      "CSS3",
    ],
  },
  {
    company: "SS&C Advent",
    position: "Software Engineer",
    startDate: "June 2019",
    endDate: "Oct 2022",
    responsibilities: [
      `Designed and implemented U/I feature sets using React.js, Typescript, HTML5, and CSS that were highly performant,
        scalable, and reusable.`,
      `Transitioned React components to TypeScript. Converted class components to functional components, enhancing code readability and reusability.`,
      `Migrated Redux API flow to GraphQL, optimizing backend interactions for better performance.`,
      `Deployed internal NPM modules using GitHub Actions and Jenkins, streamlining CI/CD pipelines.`,
    ],
    technologies: [
      "React",
      "Redux",
      "Typescript",
      "C#",
      "AWS",
      "HTML5",
      "CSS3",
    ],
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
