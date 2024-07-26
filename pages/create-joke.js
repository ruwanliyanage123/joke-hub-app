import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/CreateJoke.module.css";

export default function CreateJoke() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setImage(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="jokeName" className={styles.label}>
              Joke Name
            </label>
            <input
              type="text"
              id="jokeName"
              className={styles.input}
              placeholder="Enter joke name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jokeCategory" className={styles.label}>
              Joke Category
            </label>
            <select id="jokeCategory" className={styles.select}>
              <option value="">Select category</option>
              <option value="funny">Funny</option>
              <option value="pun">Pun</option>
              <option value="dad">Dad Joke</option>
              <option value="knock-knock">Knock-Knock</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              id="description"
              className={styles.textarea}
              placeholder="Enter joke description"
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Image</label>
            <div
              className={styles.dropArea}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                className={styles.fileInput}
                onChange={handleImageUpload}
              />
              {image ? (
                <p>{image.name}</p>
              ) : (
                <p>Drag and drop an image here, or click to select one</p>
              )}
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
