"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import LiteYoutubeEmbed from "react-lite-youtube-embed";

const VideoPlayer = ({ videoID }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <LiteYoutubeEmbed
      id={videoID}
      title="Youtube Embeddable"
      poster="hqdefault"
    />
  ) : (
    <h1>Never Rendered</h1>
  );
};

export default VideoPlayer;
