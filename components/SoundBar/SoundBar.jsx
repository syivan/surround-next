"use client";

import React from "react";
import { Row, Container } from "react-bootstrap";
import { useState } from "react";
import PlayControl from "@/components/PlayControl/PlayControl";
import { data } from "@/public/files";
import styles from "./SoundBar.module.css";
import SoundBox from "@/components/SoundBox/SoundBox";

const SoundBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  function controlButton() {
    setIsPlaying(!isPlaying);
  }

  return (
    <React.Fragment>
      <Container>
        <Row lg={3} md={2} sm={1}>
          <SoundBox
            key={1}
            playOn={isPlaying}
            data={data[0]}
            playerID={data[0].playerID}
          />
          <SoundBox
            key={2}
            playOn={isPlaying}
            data={data[1]}
            playerID={data[1].playerID}
          />
          <SoundBox
            key={3}
            playOn={isPlaying}
            data={data[2]}
            playerID={data[2].playerID}
          />
          <SoundBox
            key={4}
            playOn={isPlaying}
            data={data[3]}
            playerID={data[3].playerID}
          />
          <SoundBox
            key={5}
            playOn={isPlaying}
            data={data[4]}
            playerID={data[4].playerID}
          />
          <SoundBox
            key={6}
            playOn={isPlaying}
            data={data[5]}
            playerID={data[5].playerID}
          />
        </Row>
      </Container>
      <section className={styles["play-section"]}>
        <div className={styles["play-button-section"]}>
          <PlayControl button={controlButton} status={isPlaying} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default SoundBar;
