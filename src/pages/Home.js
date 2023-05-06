import styles from "../styles/pages/Home.module.css";
import background from "../imagens/charpente.jpg";

function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.bg}></div>
      <div className={styles.title}>
        <h1>
          Nous construisons <br />
          des rêves.
        </h1>
        <h2>Avec excellence et savoir-faire.</h2>
      </div>
    </main>
  );
}

export default Home;
