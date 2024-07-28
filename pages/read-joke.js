import styles from "../styles/ReadJoke.module.css";
import { getJokeByTitle, getActiveTypes } from "../services/joke-service";
import { useEffect, useState } from "react";

export default function ReadJoke() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [activeTypes, setActiveTypes] = useState([]);

  useEffect(() => {
    const getActiveJokesTypes = async () => {
      const types = await getActiveTypes();
      setActiveTypes(types);
    };
    getActiveJokesTypes();
  }, []);

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
              <option value="">Select category</option>
              {activeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
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
