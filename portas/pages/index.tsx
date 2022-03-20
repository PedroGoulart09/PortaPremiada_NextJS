
import { useState } from "react";
import Porta from "../components/Porta";
import {criarPortas, attPortas} from "../functions/porta";
import PortaModel from "../model/portaModel";

export default function Home() {

  const [portas, setPortas] = useState(criarPortas(3,2))

  function renderPorta(){
    return portas.map(porta => {
      return <Porta 
      key={porta.numero}
       value={porta} 
       onChange={ news => setPortas(attPortas(portas, news))}/>

    })
  }

  return (
    <div style={{ display: 'flex' }}>
      {renderPorta()}
    </div>
  )
}
