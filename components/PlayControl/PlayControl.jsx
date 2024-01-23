import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const PlayControl = ({ button }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const changeOverlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Button
      onClick={() => {
        button();
        changeOverlay();
      }}
    >
      {isPlaying ? "Rest" : "Play"}
    </Button>
  );
};

export default PlayControl;
