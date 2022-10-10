import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
export default function EscolhaHorario() {
    const { idHorario } = useParams()
    const [horario, setHorario] = useState({})
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idHorario}/showtimes`)
        promise.then((resposta) => { setHorario(resposta.data) });
        promise.catch(erro => { console.log(erro.response.data) })
    }, [idHorario])

    if (horario === undefined){
        return "Carregando..."
    }
    return (

        <Geral>
            <Text> Selecione o horário</Text>
            {horario.days ?
                horario.days.map((session) => (                    
                    <ContainerSession key={session.id}>
                        <Weekday data-identifier="session-date">{`${session.weekday} - ${session.date}`}</Weekday>
                        {session.showtimes.map((times,i)=>
                        <Link to={`/assento/${times.id}`} key={i}>
                            <Showtimes data-identifier="hour-minute-btn">{times.name}</Showtimes>                            
                        </Link>)}
                    </ContainerSession>
                )) : "Carregando..."}
    
            <Footer>
                <Banner data-identifier="movie-img-preview" src={horario.posterURL}></Banner>
                <NomeFilme data-identifier="movie-and-session-infos-preview">{horario.title}</NomeFilme>
            </Footer>
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
width: 375px;
height: 110px;
color: #293845;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
margin-top: 57px;
`
const ContainerSession = styled.div`
width: 241px;
height: 100px;
margin: 0 0 22px 23px
`
const Weekday = styled.p`
width: 241px;
height: 35px;
margin: 0 0 22px 7px;
color: #293845;
display: flex;
align-items: center;
font-size: 18px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
`
const Showtimes = styled.div`
width: 82px;
height: 43px;
background-color: #e8833a;
margin-left: 8px;
font-weight: 400;
font-family: 'Roboto', sans-serif;
color: #ffffff;
padding: 12.5px;
text-align: center;
display: inline-block;
`
const Footer = styled.div`
width: 375px;
height: 117px;
background-color: #dfe6ed;
top: 480px;
display: flex;
align-items: center;
padding-left: 18px;
`
const Banner = styled.img`
width: 48px;
height: 72px;
margin-right: 22px;
`
const NomeFilme = styled.p`
width: 269px;
height: 40px;
color: #293845;
font-size: 26px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
`