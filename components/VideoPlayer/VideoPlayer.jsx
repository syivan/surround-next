"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./VideoPlayer.module.css";
import LiteYoutubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYoutubeEmbed.css";

const VideoPlayer = ({ videoID }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <LiteYoutubeEmbed
      id={videoID}
      title="Youtube Embeddable"
      poster="sddefault"
    />
  ) : (
    <h1>Never Rendered</h1>
  );
};

export default VideoPlayer;
