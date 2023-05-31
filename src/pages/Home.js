import styles from "../styles/pages/Home.module.css";
import background from "../imagens/charpente.jpg";
import Gallery from "../components/layout/Gallery";

function Home() {
  return (
    <main>
      <section
        className={styles.div_bg}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.title}>
          <h1>
            Nous construisons <br />
            des rêves.
          </h1>
          <h2>Avec excellence et savoir-faire.</h2>
        </div>
      </section>
      <section className={styles.about} id="aboutId">
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>À Propos</h1>
          <p>
            Bienvenue sur notre site ! Vous y trouverez un professionnel avec
            plus de 20 ans d'expérience dans la rénovation, la construction de
            maisons et les structures métalliques. Au fil des années, nous nous
            sommes imposés comme une référence dans le secteur, en fournissant
            un travail de qualité exceptionnelle et en respectant
            scrupuleusement les délais de livraison.
          </p>
          <p>
            Si vous envisagez de rénover ou de construire la maison de vos rêves
            ou si vous avez besoin de solutions en structures métalliques, vous
            êtes au bon endroit. Notre équipe d'experts hautement qualifiés est
            prête à concrétiser vos idées, grâce à notre expertise acquise lors
            de nombreux projets réussis.
          </p>
          <p>
            Ce qui nous distingue, c'est notre engagement envers la qualité dans
            les moindres détails. Nos professionnels sont compétents,
            expérimentés et possèdent une expertise avancée. Nous utilisons des
            matériaux de première qualité, garantissant durabilité et résistance
            dans chaque projet que nous réalisons. De plus, nous travaillons en
            étroite collaboration avec nos clients pour comprendre leurs besoins
            et dépasser leurs attentes.
          </p>
          <p>
            Contactez-nous pour discuter de votre projet, nous sommes impatients
            de vous proposer des solutions personnalisées pour répondre à vos
            besoins spécifiques. Si vous appréciez l'excellence, la fiabilité et
            le respect des délais, nous sommes prêts à concrétiser votre rêve.
            Faites-nous confiance!
          </p>
        </div>
      </section>
      <section className={styles.services} id="servicesId">
        <div className={styles.content}>
          <h1>Services</h1>
          <div className={styles.divGallery}>
            <Gallery />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
