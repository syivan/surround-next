import React from "react";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import ProfileImg from "@/public/img/i.svg";

const Page = () => {
  return (
    <React.Fragment>
      <section className={styles["about-main-header"]}>
        <h2>The Custom Background Mixer For You</h2>
      </section>
      <section className={styles["purpose-declaration"]}>
        <section className={styles["statement"]}>
          <p>
            I put together the Sound Ambience for those who enjoy their day and
            routine with the presence of ambient music. It was initially a
            single purpose project, but I have come across family and friends
            who also listen to background ambience to focus and drown out
            distraction. This is for me, for them, to design their environmental
            ambience how they want it.
          </p>
        </section>
        <section className={styles["profile-image"]}>
          <Image src={ProfileImg} className={styles["circular"]} alt="me" />
        </section>
      </section>

      <p>
        Credits to the following people who granted me licensed use of their
        icons and recorded audio:
      </p>
      <section className={styles["credits"]}>
        <details className={styles["item-credits"]}>
          <summary>Images</summary>
          <ul>
            <li>
              <a href="https://www.iconfinder.com/ladalle">Ladalle CS</a>
            </li>
            <li>
              <a href="https://www.iconfinder.com/akmal-mahdi">Akmal Mahdi</a>
            </li>
            <li>
              <a href="https://www.iconfinder.com/Oppossume">Alex Timashenka</a>
            </li>
            <li>
              <a href="https://www.iconfinder.com/Rengised">
                Alexandr Martinov
              </a>
            </li>
            <li>
              <a href="https://www.iconfinder.com/hk12215">Olha Filipenko</a>
            </li>
          </ul>
        </details>
        <details className={styles["item-credits"]}>
          <summary>Audio Recordings</summary>
          <ul>
            <li>
              <a href="https://pixabay.com/sound-effects/birds-19624/">
                Pixabay
              </a>{" "}
              - Birds
            </li>
            <li>
              <a href="https://freesound.org/people/Matias44/sounds/173920/">
                Matias44
              </a>{" "}
              - Murmullo restaurante | Murmur restaurant
            </li>
            <li>
              <a href="https://freesound.org/people/inchadney/sounds/83986/">
                Inchadney
              </a>{" "}
              - fireplace
            </li>
            <li>
              <a href="https://freesound.org/people/gluckose/sounds/333987/">
                gluckose
              </a>{" "}
              - stream2
            </li>
            <li>
              <a href="https://freesound.org/people/gepetto3548/sounds/689986/">
                gepetto3548
              </a>{" "}
              - Excellent thunder & rain 25 Sept 21
            </li>
            <li>
              <a href="https://pixabay.com/sound-effects/soft-rain-ambient-111154/">
                SoundsForYou
              </a>{" "}
              - Soft Rain Ambient
            </li>
          </ul>
        </details>
      </section>
    </React.Fragment>
  );
};

//  Map Filter implementation
//  Transition effects

export default Page;
