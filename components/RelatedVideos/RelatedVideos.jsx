"use client";

import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import VideoCard from "@/components/VideoCard/VideoCard";
import Paginate from "@/components/Paginate/Paginate";
import Loading from "@/components/Loading/Loading";

export default function RelatedVideos({ relatedFeed }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const totalPosts = 16;

  const size = {
    imageSize: "7.5rem",
    titleSize: "0.8rem",
    channelSize: "10px",
    bodySize: "5.5rem",
  };

  if (!relatedFeed?.length) return <Loading />;

  const videoMap = relatedFeed.map((item, index) => (
    <Container key={index}>
      <VideoCard item={item} size={size} />
    </Container>
  ));

  const previousPage = () => {
    if (currentPage != 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage != Math.ceil(videoMap.length / postsPerPage))
      setCurrentPage(currentPage + 1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <Stack
        direction="vertical"
        gap={1}
        style={{ width: "15rem", paddingLeft: "1rem", marginBottom: "3rem" }}
      >
        <section>
          {videoMap.slice(
            postsPerPage * (currentPage - 1),
            postsPerPage * currentPage
          )}
          <section className="d-flex align-items-center">
            <Paginate
              totalPosts={totalPosts}
              postsPerPage={postsPerPage}
              nextPage={nextPage}
              previousPage={previousPage}
              currentPage={currentPage}
            />
          </section>
        </section>
      </Stack>
    </React.Fragment>
  );
}
