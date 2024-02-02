"use client";

import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/img/logo.svg";

function NavHeader() {
  return (
    <>
      <Navbar className="bg-primary pb-4 pt-3">
        <Container fluid>
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
