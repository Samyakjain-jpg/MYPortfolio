import React from "react";
import logoImage from "../assets/logo.jpg"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logoImage}
          alt="Founder"
        />

        <h2>Samyak Jain</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="/" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
