"use client";

import { useState, useEffect } from "react";
import styles from "./SoundBox.module.css";
import Image from "next/image";

const SoundBox = ({ playOn, data, playerID }) => {
  let initialVol = 0;
  if (typeof window !== "undefined") {
    initialVol = sessionStorage.getItem(`${data.name}`)
      ? parseFloat(sessionStorage.getItem(`${data.name}`))
      : 0;
  }

  const [volume, setVolume] = useState(initialVol);

  useEffect(() => {
    let audioPlayer = document.getElementById(playerID);
    audioPlayer.volume = volume;

    if (volume >= 0.02 && playOn) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }

    sessionStorage.setItem(`${data.name}`, volume.toString());
  }, [volume, playOn]);

  return (
    <section className={styles["sound-box-container"]}>
      <img
        src={`/img/${data.imageID}`}
        height={100}
        width={100}
        alt={data.name}
        className={styles["icon-prop"]}
      ></img>
      <section className={styles["sound-info-container"]}>
        <div className={styles["sound-info"]}>
          <label>
            <h3 className={styles["sound-label"]}>{data.name}</h3>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            ></input>

            <audio preload="auto" id={playerID} loop>
              <source src={`/audio/${data.audioID}`} type="audio/mp4"></source>
            </audio>
          </label>
        </div>
      </section>
    </section>
  );
};

export default SoundBox;
