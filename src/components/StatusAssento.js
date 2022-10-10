import styled from "styled-components"
export default function StatusAssento() {
    return (
        <>
            <Status data-identifier="seat-selected-subtitle"><Bola><Legenda>Selecionado</Legenda></Bola></Status>
            <Status data-identifier="seat-available-subtitle"><Bola2><Legenda>Disponível</Legenda></Bola2></Status>
            <Status data-identifier="seat-unavailable-subtitle"><Bola3><Legenda>Indisponível</Legenda></Bola3></Status>
        </>
    )
}
const Status = styled.div`
width: 91px;
height: 53px;
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 11px;
&:nth-child(2){
    width: 65px;
    height: 53px;           
    display: flex;
    justify-content: center;    
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 11px; 
}
`
const Bola = styled.div`
width: 25px;
height: 25px;
background-color: #1aae9e;
margin-right: 7px;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 11px;
`
const Bola2 = styled(Bola)`
background-color: #c3cfd9;

`
const Bola3 = styled(Bola)`
background-color: #fbe192;

`
const Legenda = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 13px;
margin-top: 45px;
`