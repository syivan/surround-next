import React from "react";
import { Stack, Badge } from "react-bootstrap";
import styles from "./VideoDetails.module.css";

export default function VideoDetails({ details }) {
  return (
    <React.Fragment>
      <h5 className={styles["video-title"]}>{details.snippet.title}</h5>
      <Stack direction="horizontal" gap={3}>
        <p className={styles["channel-title"]}>
          <span style={{ color: "red" }}>Channel:</span>{" "}
          {details.snippet.channelTitle}
        </p>
        <p className={styles["video-metrics"]}>
          <Badge bg="light" text="dark">
            {parseInt(details.statistics.viewCount).toLocaleString() + " "}
            views
          </Badge>
        </p>
        <p>
          <Badge bg="light" text="dark">
            {parseInt(details.statistics.likeCount).toLocaleString() + " "}
            likes
          </Badge>
        </p>
      </Stack>
    </React.Fragment>
  );
}
