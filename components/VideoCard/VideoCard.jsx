import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
import styles from "./VideoCard.module.css";

const VideoCard = ({
  item: {
    id: { videoId },
    snippet,
  },
  size,
}) => {
  return (
    <Card
      className={styles["card"]}
      style={{
        width: { md: "15px", xs: "100%" },
      }}
    >
      <Link href={`/video/${videoId}`}>
        <Card.Img
          variant="top"
          src={`http://img.youtube.com/vi/${videoId}/sddefault.jpg`}
          className={styles["card-img"]}
          alt={snippet.title}
          style={{ height: `${size.imageSize}` }}
        ></Card.Img>
      </Link>
      <Card.Body style={{ height: `${size.bodySize}` }}>
        <Link href={`/video/${videoId}`} style={{ textDecoration: "none" }}>
          <Card.Title
            className={styles["card-title"]}
            style={{
              fontSize: `${size.titleSize}`,
            }}
          >
            {snippet.title.length >= 50
              ? snippet.title.slice(0, 50) + "..."
              : snippet.title}
          </Card.Title>
        </Link>
        <Card.Text
          className={styles["channel-title"]}
          style={{ fontSize: `${size.channelSize}` }}
        >
          {snippet.channelTitle}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
