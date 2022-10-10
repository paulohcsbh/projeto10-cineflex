import styled from "styled-components"
import { useState } from "react"



export default function Assentos(props) {
    const { a, setSelecionados, selecionados, listaAssentos, setListaAssentos } = props
    
    const [verde, setVerde] = useState(true)
    function qualClicado() {
        if (a.isAvailable === false) {
            alert("Assento indisponível.")
            return;
        } if (a.isAvailable && verde === true) {
            setVerde(false)
            setListaAssentos([...listaAssentos, a.name])
            setSelecionados([...selecionados, Number(a.id)])
        }
        if (verde === false) {
            setVerde(true)
            selecionados.splice(selecionados.indexOf(a.id), 1)
            listaAssentos.splice(listaAssentos.indexOf(a.name), 1)
        }
        
    }
    return (
        <>
            <Assento data-identifier="seat" onClick={() => qualClicado()} cor={a.isAvailable === false ? "#fbe192" : verde === true ? "#c3cfd9" : "#0e7d71"}>{a.name}</Assento>
        </>
    )
}


const Assento = styled.div`
width: 26px;
height: 26px;
border:1px solid #808f9d;
background-color: ${props => props.cor};
margin-right: 6px;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 11px;
cursor: pointer;
`