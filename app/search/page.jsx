import SearchBar from "@/components/SearchBar/SearchBar";
import React from "react";
import styles from "@/styles/search.module.css";

const Page = () => {
  return (
    <React.Fragment>
      <section className={styles["search-header"]}>
        <h2>Enter your favorite artist, song, or album</h2>
      </section>
      <section className={styles["query-section"]}>
        <SearchBar />
      </section>
    </React.Fragment>
  );
};

export default Page;
