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
      `Leveraged HTML5 semantic elements to increase accessibility, ensuring WCAG compliance.`,
      `Enhanced performance and reduced initial load times by utilizing React.js optimization techniques such as code splitting and lazy loading.`,
      `Translated Figma mockups into fully functional features, designed responsive pages using a mobile-first approach.`,
      `Implemented GraphQL on Product Detail and Listing pages to improve data retrieval efficiency and reduce latency.`,
      `Integrated new Restful API endpoints into the Redux store and actions to improve state management reliability.`,
      `Utilized Styled-Components theming functionality to create brand-specific themes, simplifying updates and improving maintainability.`,
      `Cross collaborated with Product, UI, and Backend teams to deliver new features, reducing development time`,
      `Mentored 8+ developers through code reviews, technical guidance, and onboarding, fostering skill growth and enhancing team productivity.`,
      `Managed deployment and maintenance of Node.js modules using Git and Jenkins pipelines, and designed a zero-cost AppCenter replacement, achieving annual savings of $15,000.`,
      `Built Storybook pages to showcase and document reusable component options across brands, streamlining the design-developer handoff process.`,
      `Led React Native roadmap and developed a new onboarding process, accelerating mobile project development timelines.`,
      `Removed unnecessary server-side data fetching in Next.js reducing initial load times by 5%.`,
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
