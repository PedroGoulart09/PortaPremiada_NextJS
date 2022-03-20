import Link from 'next/link'
import Cartao from '../components/Cartao'
import styles from '../styles/Formulario.module.css'

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
      <Cartao bgcolor="#c0392c">
        <h1>Monte Hall</h1>
      </Cartao>
      <Cartao></Cartao>
      </div>
      <div>
      <Cartao></Cartao>
    
      <Cartao bgcolor="#28a085">
      <Link href={`/jogo/4/2`} passHref>
      <h2 className={styles.link}>Iniciar</h2>
      </Link>
      </Cartao>
      </div>
   
    </div>
  )
}
