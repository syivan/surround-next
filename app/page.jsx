import SoundBar from "@/components/SoundBar/SoundBar";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className={styles["home-container"]}>
      <h1>Sound Tailored to you</h1>
      <h5>How you prefer it.</h5>
      <section>
        <SoundBar key={1} />
      </section>
    </Container>
  );
}
