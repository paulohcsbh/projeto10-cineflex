import styled from "styled-components"

import { useNavigate, useLocation } from "react-router-dom"
export default function Sucesso(){
    const navigate = useNavigate() 
    const location = useLocation()
    function home(){
        navigate("/")
    }
    return(
        <Geral>
            <Text> Pedido feito com sucesso! </Text> 
            <ContainerInfos>
                <Title> Filmes e sessão </Title>
                <Infos data-identifier="movie-session-infos-reserve-finished"> {location.state.assento.movie.title} </Infos>
                <Infos data-identifier="movie-session-infos-reserve-finished"> {location.state.assento.day.date} {location.state.assento.name} </Infos>
            </ContainerInfos>
            <ContainerInfos>
                <Title> Ingressos </Title>
                {location.state.listaAssentos.map((lugar, i) => <Infos data-identifier="seat-infos-reserve-finished" key={i}> Assento {lugar} </Infos>)}
                
            </ContainerInfos>
            <ContainerInfos>
                <Title> Comprador </Title>
                <Infos data-identifier="buyer-infos-reserve-finished">Nome: {location.state.nome}  </Infos>
                <Infos data-identifier="buyer-infos-reserve-finished">CPF: {location.state.cpf}</Infos>
            </ContainerInfos>
            
                <BotaoReservar data-identifier="back-to-home-btn" onClick={home}>Voltar para Home</BotaoReservar>
            
        </Geral>

    )
}
const Geral = styled.div`
width: 375px;
height: 812px;
overflow-y: auto;
overflow-X: hidden;
`
const Text = styled.p`
width: 175px;
height: 110px;
color: #247a6b;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
font-size: 24px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
margin: 57px 0 0 100px;
line-height: 28.13px;
`
const ContainerInfos = styled.div`
width: 347px;
min-height: 110px;
color: #293845;
font-size: 24px;
font-family: 'Roboto', sans-serif;
margin: 25px 0 0 28px;
line-height: 28.13px;
`   
const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: 700;
`
const Infos = styled(Title)`
font-family: 'Roboto', sans-serif;
font-weight: 400;
`
const BotaoReservar = styled.div`
width: 225px;
height: 42px;
display: flex;
justify-content: center;
align-items: center;
background-color: #e8833a;
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 18px;
margin: 62px 0 30px 72px;
border: transparent;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
`