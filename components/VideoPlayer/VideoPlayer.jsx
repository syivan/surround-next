"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ videoID }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoID}`}
      className={styles["react-player"]}
      controls={true}
    />
  ) : (
    <h1>Never Rendered</h1>
  );
};

export default VideoPlayer;
