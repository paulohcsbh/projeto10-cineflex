import Filmes from "./Filmes"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
export default function SelecaoFilmes() {    
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then((resposta) => { setFilmes(resposta.data) });
        promise.catch(erro => { alert("Deu ruim!") })
    }, [])
    if (filmes === undefined){
        return "Carregando..."
    }
  
    return (
        <Geral>           
            <Text> Selecione um filme</Text>
            <ContainerBanner>
                {filmes.map((filme) => <Filmes key={filme.id} filme={filme}></Filmes>)}
            </ContainerBanner>
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
const ContainerBanner = styled.ul`
width: 296px;
display: flex;
justify-content: space-between;
margin-left: 38px;
flex-wrap: wrap;
`
