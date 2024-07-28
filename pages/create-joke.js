import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/CreateJoke.module.css";
import axios from "axios";

export default function CreateJoke() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const jokeData = {
      jokeTitle: title,
      jokeType: type,
      jokeDescription: description,
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/api/createJoke",
        jokeData
      );
      console.log("Joke submitted successfully...", response.data);
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
              required
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
              required
              className={styles.select}
              onChange={(e) => {
                setType(e.target.value);
              }}
              value={type}
            >
              <option value="">Select category</option>
              <option value="political">Political</option>
              <option value="cricket">Cricket</option>
              <option value="film">Film</option>
              <option value="it">IT</option>
              <option value="kids">Kids</option>
              <option value="office">Office</option>
              <option value="home">Home</option>
              <option value="gym">Gym</option>
              <option value="school">School</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jokeDescription" className={styles.label}>
              Description
            </label>
            <textarea
              id="jokeDescription"
              required
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
