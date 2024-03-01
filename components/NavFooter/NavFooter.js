"use client"

import React from "react";
import { Row } from "react-bootstrap";
import Link from "next/link";
import styles from "./NavFooter.module.css";
import { useState } from "react";
import Updates from "../Updates/Updates";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isRevealed, setIsRevealed] = useState(false);

  const handleShow = () => setIsRevealed(true);
  const handleClose = () => setIsRevealed(false);

  return (
    <React.Fragment>
      <footer className={styles["footer-section"]}>
        <section
          className={styles["copyright-statement"]}
          data-testid="copyright"
        >
          Copyright © {year}. All Rights Reserved.
        </section>
        <Row lg={3} md={3} xs={3} className={styles["footer-links"]}>
          <Link href="/search">
            <ul>
              <li>Youtube Client</li>
            </ul>
          </Link>
          <Link href="/about" data-testid="link-about">
            <ul>
              <li>About</li>
            </ul>
          </Link>
          <ul>
            <Updates status={isRevealed} handleStatus={handleClose} />
            <Link onClick={handleShow} href="#">
              <li>Stay Updated</li>
            </Link>
          </ul>
        </Row>
      </footer>
    </React.Fragment >
  );
};

export default Footer;
