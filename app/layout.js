import { Inter } from "next/font/google";
import NavHeader from "@/components/NavHeader/NavHeader";
import NavFooter from "@/components/NavFooter/NavFooter";
import { Container } from "react-bootstrap";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Sound Ambience",
  description: "Ambience-based Effects Player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavHeader />
        <Container>{children}</Container>
        <NavFooter />
      </body>
    </html>
  );
}
