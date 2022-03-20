import PortaModel from "../model/portaModel";

export  function criarPortas(qtde: number, selecionada:number):PortaModel[]{
    return Array.from({length: qtde}, (_, i) => {
        const numero = i + 1
        const temPresente = numero === selecionada
        return new PortaModel(numero, temPresente)
    } )
}

export function attPortas(portas: PortaModel[], portaModificada: PortaModel):PortaModel[]{
    return portas.map(portaAtual => {
        const igualAmodificada = portaAtual.numero === portaModificada.numero
         if (igualAmodificada) {
            return portaModificada
        }else {
            return  portaModificada.aberta ? 
            portaAtual : portaAtual.desselecionar()
        }
    })
   

}
