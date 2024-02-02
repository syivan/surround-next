import React from "react";
import styles from "./Paginate.module.css";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate = null,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section className={styles["pagination-container"]}>
      <ul className={styles["pagination"]}>
        <li onClick={previousPage} className={styles["page-number"]}>
          Prev
        </li>
        {paginate !== null &&
          pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => {
                paginate(number);
                console.log(currentPage);
              }}
              className={
                styles[`page-number${number === currentPage ? "-active" : ""}`]
              }
            >
              {number}
            </li>
          ))}
        <li onClick={nextPage} className={styles["page-number"]}>
          Next
        </li>
      </ul>
    </section>
  );
};

export default Paginate;
