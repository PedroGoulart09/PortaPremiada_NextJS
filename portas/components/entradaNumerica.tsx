import { useState } from 'react'
import styles from '../styles/EntradaNumerica.module.css'


interface entradaNumericaProps {
    text: string
    value:number
    onChange: (newValue: number) => void;
}

export default function EntradaNumerica(props: entradaNumericaProps) {
    const dec = () => props.onChange(props.value -1 )
    const inc = () => props.onChange(props.value + 1 )
  return (
    <div className={styles.entradaNumerica}>
        <p className={styles.text}>{props.text}</p>
    <p className={styles.value}>{props.value}</p>
    <div className={styles.botoes}>
      <button className={styles.btn} onClick={dec}>-</button>
      <button className={styles.btn} onClick={inc}>+</button>
    </div>
   </div>
  )
}
