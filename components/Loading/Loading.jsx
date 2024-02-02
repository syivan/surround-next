const { Spinner } = require("react-bootstrap");
import { Container } from "react-bootstrap";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <Container className={styles["buffer-container"]}>
      <div>
        <Spinner className={styles["spinner"]} animation="border" />
      </div>
    </Container>
  );
};

export default Loading;
