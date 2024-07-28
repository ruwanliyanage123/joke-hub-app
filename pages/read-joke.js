import styles from "../styles/ReadJoke.module.css";
import { getJokeByTitle } from "../services/joke-service";
import { useState } from "react";

export default function ReadJoke() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log(type);
    const joke = await getJokeByTitle(type);
    if (joke) {
      setTitle(joke.jokeTitle);
      setDescription(joke.jokeDescription);
    } else {
      console.error("No joke found with the given title");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Read a Joke</h1>
        <form onSubmit={handlerSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <select
              id="jokeType"
              required
              className={styles.select}
              onChange={(e) => {
                setType(e.target.value);
              }}
              value={type}
            >
              <option value="amare">Select category</option>
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
            <label htmlFor="jokeType" className={styles.label}>
              Enter your favourite Joke Category
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Get a Joke
          </button>
        </form>
        <h4>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
}
