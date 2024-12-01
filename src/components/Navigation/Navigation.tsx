"use client";

import Link from "next/link";
import Styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavBar = Styled.div.attrs({
  className: "p-5",
})`
  background-color: #A2C5AC;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Links = Styled.div`
  display: flex;
  gap: 10px;

  a:hover {
    color: #D3D5D4;
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <div>Ballyn Miller</div>
      <Links>
        <Link href="#about">About</Link>
        <Link href="/resume.pdf">Resume</Link>
        <Link href="mailto:ballyn.miller@gmail.com">Contact</Link>
        <Link href="#">
          <GitHubIcon />
        </Link>
        <Link href="#">
          <LinkedInIcon />
        </Link>
      </Links>
    </NavBar>
  );
};

export default Navigation;
