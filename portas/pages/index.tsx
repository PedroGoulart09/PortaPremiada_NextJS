import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/entradaNumerica";
import styles from "../styles/Formulario.module.css";

export default function Formulario() {
  const [qtde, setQtde] = useState(3);
  const [comPresente, setcomPresente] = useState(1);
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monte Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="qtde portas"
            value={qtde}
            onChange={(nova) => setQtde(nova)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com presente"
            value={comPresente}
            onChange={(nova) => setcomPresente(nova)}
          />
        </Cartao>

        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtde}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
