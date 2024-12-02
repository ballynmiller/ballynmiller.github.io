"use client";

import Link from "next/link";
import Styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Socials = Styled.div.attrs({
  className: "text-lg",
})`
  background-color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Links = Styled.div`
  display: flex;
  gap: 10px;

  a:hover {
    color: #D3D5D4;
  }
`;

const SocialLinks = () => {
  return (
    <Socials>
      <Links>
        <Link href="#">
          <GitHubIcon />
        </Link>
        <Link href="#">
          <LinkedInIcon sx={{ color: "rgb(10, 102, 194)" }} />
        </Link>
        <Link href="mailto:ballyn.miller@gmail.com">
          <EmailIcon />
        </Link>
      </Links>
    </Socials>
  );
};

export default SocialLinks;
