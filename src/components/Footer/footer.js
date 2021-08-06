import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Link } from "../Link";

const links = [
  // {
  //   header: "Courses",
  //   links: [
  //     { text: "Interior", link: "#" },
  //     { text: "Fashion", link: "#" },
  //     { text: "Graphics", link: "#" }
  //   ]
  // },
  // {
  //   header: "Materials",
  //   links: [
  //     { text: "Seminars", link: "/seminars" },
  //     { text: "Blog", link: "#" },
  //     { text: "Freebeis", link: "#" }
  //   ]
  // },
  // {
  //   header: "School",
  //   links: [{ text: "About", link: "#" }, { text: "Contacts", link: "#" }]
  // }
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {links.map(section => (
        <div key={section.header}>
          <h3>{section.header}</h3>
          {section.links.map(link => (
            <Link text={link.text} link={link.link} key={link.text} />
          ))}
        </div>
      ))}
    </div>
    <p className={styles.text}> developed by <a href="https://hmghaswala.netlify.app/">hmghaswala</a></p>
  </footer>
);

Footer.propTypes = {
  links: PropTypes.array
};

export default Footer;
