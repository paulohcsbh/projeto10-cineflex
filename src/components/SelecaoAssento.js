import styled from "styled-components"
import {  useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import StatusAssento from "./StatusAssento"

import Assentos from "./Assentos"
import axios from "axios"

export default function SelecaoAssento() {
    const [listaAssentos, setListaAssentos] = useState([])
    const [selecionados, setSelecionados] = useState([])
    const [assento, setAssento] = useState()
    const { idAssento } = useParams()
    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    function inserirDados(e) {
        e.preventDefault()
        selecionados.sort((a, b) => a - b)
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", { ids: selecionados, name: nome, cpf: cpf })
        requisicao.then(() => { console.log("Dados enviados!") })
        requisicao.catch(() => { alert("Falha no envio") })
        navigate("/sucesso", {state: {nome, cpf, listaAssentos, assento}})
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssento}/seats`)
        promise.then((resposta) => { setAssento(resposta.data) });
        promise.catch(erro => { console.log(erro.response.data) })
    }, [idAssento])

    if (assento === undefined) {
        return "Carregando..."
    }
    return (
        <Geral>
            <Text> Selecione o(s) assento(s)</Text>
            <ContainerAssento>
                {assento.seats ?
                    assento.seats.map((a) => (
                        <Assentos key={a.id} a={a} setSelecionados={setSelecionados} selecionados={selecionados} listaAssentos={listaAssentos} setListaAssentos={setListaAssentos}></Assentos>
                    )) : ("Carregando...")}
            </ContainerAssento>
            <ContainerStatus>
                <StatusAssento />
            </ContainerStatus>
            <Desciption>Nome do comprador:</Desciption>
            <form onSubmit={inserirDados}>
                <InputNome data-identifier="buyer-name-input" type="text" placeholder={"Digite o seu nome..."} value={nome} onChange={e => setNome(e.target.value)} required></InputNome>
                <Desciption>CPF do comprador:</Desciption>
                <InputCPF data-identifier="buyer-cpf-input" type="text" placeholder={"Digite o seu CPF...(Somente números)"} maxLength="11" value={cpf} onChange={e => setCPF(e.target.value)} required></InputCPF>

                <BotaoReservar data-identifier="reservation-btn" type="submit">Reservar assento(s)</BotaoReservar>

            </form>
            <Footer>
                <Banner src={assento.movie.posterURL} ></Banner>
                <ContainerConfirmar>
                    <NomeFilme>{assento.movie.title}</NomeFilme>
                    <HoraFilme data-identifier="movie-and-session-infos-preview">{`${assento.day.weekday} - ${assento.name}`}</HoraFilme>
                </ContainerConfirmar>
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
const ContainerAssento = styled.div`
width: 330px;
height: 202px;
border:1px solid #ffffff;
margin-left:24px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const ContainerStatus = styled.div`
width: 271px;
height: 53px;
margin: 16px 0 41px 56px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const InputNome = styled.input`
width: 327px;
height: 51px;
margin: 0 0 7px 24px;
font-style: italic;
padding-left: 18px;
`
const Desciption = styled.p`
width: 241px;
height: 25px;
color: #293845;
margin-left: 24px;
font-size: 18px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
`
const InputCPF = styled(InputNome)`
margin-bottom: 57px;
`
const BotaoReservar = styled.button`
width:225px;
height: 42px;
display: flex;
justify-content: center;
align-items: center;
background-color: #e8833a;
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 18px;
margin: 0 0 30px 72px;
border: transparent;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
`
const Footer = styled.div`
width: 375px;
height: 117px;
background-color: #dfe6ed;
display: flex;
align-items: center;
padding-left: 18px;
`
const Banner = styled.img`
width: 48px;
height: 72px;
border: 1px solid red;
margin-right: 22px;
`
const ContainerConfirmar = styled.div`
padding-top: 20px;
`
const NomeFilme = styled.p`
width: 287px;
height: 40px;
color: #293845;
font-size: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
`
const HoraFilme = styled(NomeFilme)`
`








