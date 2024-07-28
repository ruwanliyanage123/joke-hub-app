import styles from "../styles/ReadJoke.module.css";

export default function ReadJoke() {
  const joke = {
    id: "123",
    title: "Funny Joke",
    description: "This is a very funny joke.",
    image: "https://example.com/joke.jpg",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{joke.title}</h1>
      <img src={joke.image} alt={joke.title} className={styles.image} />
      <p className={styles.description}>{joke.description}</p>
      <p className={styles.id}>ID: {joke.id}</p>
    </div>
  );
}
