import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import styles from "../../../styles/jogo.module.css";
import { attPortas, criarPortas } from "../../../functions/porta";
import { useRouter } from "next/router";

export default function Jogo() {
  const route = useRouter();
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const routesPorta = +route.query.portas
    const routesPresente = +route.query.temPresente
    setPortas(criarPortas(routesPorta, routesPresente));
    console.log('useEffect');
    
  }, [route.query])


  function renderPorta() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(news) => setPortas(attPortas(portas, news))}
        />
      );
    });
  }
  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>{renderPorta()}</div>
      <div className={styles.botoes}>
        <button onClick={() => route.push("/")}>Reiniciar Jogo</button>
      </div>
    </div>
  );
}
