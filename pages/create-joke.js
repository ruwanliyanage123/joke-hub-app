import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/CreateJoke.module.css";

export default function CreateJoke() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const jokeData = {
      jokeTitle: title, // Corrected to use state variables
      jokeType: type,
      jokeDescription: description,
    };
    try {
      const response = await fetch("http://localhost:3001/api/createJoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jokeData),
      });
      if (response.ok) {
        console.log("Joke submitted successfully");
      } else {
        console.error("Failed to submit joke");
      }
    } catch (error) {
      console.error("Error submitting joke:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Create a New Joke</title>
        <meta
          name="description"
          content="Create a new joke and share it with the world!"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Create a New Joke</h1>
        <form onSubmit={handlerSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="jokeTitle" className={styles.label}>
              Joke Title
            </label>
            <input
              type="text"
              id="jokeTitle"
              className={styles.input}
              placeholder="Enter joke title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title} // Added value attribute to bind state
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jokeType" className={styles.label}>
              Joke Category
            </label>
            <select
              id="jokeType"
              className={styles.select}
              onChange={(e) => {
                setType(e.target.value);
              }}
              value={type}
            >
              <option value="">Select category</option>
              <option value="funny">Funny</option>
              <option value="pun">Pun</option>
              <option value="dad">Dad Joke</option>
              <option value="knock-knock">Knock-Knock</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jokeDescription" className={styles.label}>
              Description
            </label>
            <textarea
              id="jokeDescription"
              className={styles.textarea}
              placeholder="Enter joke description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
