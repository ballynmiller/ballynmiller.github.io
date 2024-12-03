import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const SocialLinks = () => {
  return (
    <div className="text-lg pt-2 flex items-center">
      <div className="flex gap-3">
        <Link
          href="https://github.com/ballynmiller"
          className="hover:text-wenge"
        >
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/ballynmiller/">
          <LinkedInIcon sx={{ color: "rgb(10, 102, 194)" }} />
        </Link>
        <Link
          href="mailto:ballyn.miller@gmail.com"
          className="hover:text-wenge"
        >
          <EmailIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
