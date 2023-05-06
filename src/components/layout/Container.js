import styles from "../../styles/components/Container.module.css";
//Criaçao do container para abrigar todos os filhos. Se tirar o props.children não aparece mais nenhuma informação relativa as paginas(h1, img)
/*Aqui no return  eu chamo a folha de estilo e dou uma classe pra ela (.container) */
function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
