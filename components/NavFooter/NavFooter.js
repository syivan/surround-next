import React from "react";
import { Row } from "react-bootstrap";
import Link from "next/link";
import styles from "./NavFooter.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className={styles["footer-section"]}>
        <section className={styles["copyright-statement"]}>
          Copyright © {year}. All Rights Reserved.
        </section>
        <Row lg={2} md={2} xs={2} className={styles["footer-links"]}>
          <Link href="/search/Music Today">
            <li>Youtube Client</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </Row>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
