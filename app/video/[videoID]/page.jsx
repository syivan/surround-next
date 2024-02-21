import React from "react";
import { Stack, Container } from "react-bootstrap";
import { fetchRelatedFeed, fetchVideoDetails } from "@/utils/fetchAPI";
import SearchBar from "@/components/SearchBar/SearchBar";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import styles from "@/styles/video.module.css";
import VideoDetails from "@/components/VideoDetails/VideoDetails";
import SoundAccordion from "@/components/SoundAccordion/SoundAccordion";
import RelatedVideos from "@/components/RelatedVideos/RelatedVideos";

const getRelatedFeed = async (videoID) => {
  const response = await fetchRelatedFeed(videoID);
  const result = await response.json();
  const feed = result.items
    .filter((item) => item.id.kind === "youtube#video")
    .slice(0, 36);
  return feed;
};

const getVideoDetails = async (videoID) => {
  const response = await fetchVideoDetails(videoID);
  const result = await response.json();
  return result;
};

export default async function Page({ params }) {
  let relatedFeed = await getRelatedFeed(params.videoID);
  let videoDetails = await getVideoDetails(params.videoID);
  videoDetails = videoDetails.items[0];
  let id = params.videoID;

  return (
    <React.Fragment>
      <SearchBar />
      <Stack
        direction={{ xs: "vertical", md: "horizontal" }}
        className={styles["display-container"]}
      >
        <section className={styles["full-content"]}>
          <Container className={styles["video-ambience-container"]}>
            <VideoPlayer videoID={id} />
            <VideoDetails details={videoDetails} />
            <SoundAccordion />
          </Container>
          <RelatedVideos relatedFeed={relatedFeed} />
        </section>
      </Stack>
    </React.Fragment>
  );
}
