"use client";

import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <Stack direction="horizontal" gap={3} className={styles["search-section"]}>
      <Form.Control
        size="md"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className={styles["search-bar"]}
        onKeyDown={handleKeyPress}
      ></Form.Control>
      <Button
        type="input"
        size="sm"
        variant="primary"
        onClick={onSubmit}
        className={styles["search-button"]}
      >
        Search
      </Button>
    </Stack>
  );
}
