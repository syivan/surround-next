"use client";

import Loading from "../Loading/Loading";
import VideoCard from "../VideoCard/VideoCard";
import { Row, Container } from "react-bootstrap";
import styles from "./VideoFeed.module.css";
import { useState } from "react";
import Paginate from "../Paginate/Paginate";

const VideoFeed = ({ videos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const size = {
    imageSize: "12rem",
    titleSize: "1rem",
    channelSize: "0.8rem",
    bodySize: "6rem",
  };

  const videoMap = videos.map((item, index) => (
    <Container key={index}>
      <VideoCard item={item} size={size} />
    </Container>
  ));

  const totalPosts = 36;

  if (!videos?.length) return <Loading />;

  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(videos.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Row md={2} lg={3} xs={1} className={styles["search-feed-view"]}>
        {videoMap.slice(
          postsPerPage * (currentPage - 1),
          postsPerPage * currentPage
        )}
      </Row>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        paginate={paginate}
      />
    </>
  );
};

export default VideoFeed;
