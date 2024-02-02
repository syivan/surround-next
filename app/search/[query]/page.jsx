import React from "react";
import { fetchSearch } from "@/utils/fetchAPI";
import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "@/styles/search.module.css";
import VideoFeed from "@/components/VideoFeed/VideoFeed";

const getSearchFeed = async (query) => {
  const response = await fetchSearch(query);
  const result = await response.json();
  const feed = result.items
    .filter((item) => item.id.kind === "youtube#video")
    .slice(0, 36);
  return feed;
};

export default async function Feed({ params }) {
  let heading = decodeURI(params.query);
  let feed = await getSearchFeed(heading);
  console.log(feed);
  return (
    <React.Fragment>
      <SearchBar />
      <section>
        <h3 className={styles["search-banner"]}>
          Search Results for:{" "}
          <span className={styles["query-heading"]}>{heading}</span>
        </h3>
      </section>
      <VideoFeed videos={feed}></VideoFeed>
    </React.Fragment>
  );
}
