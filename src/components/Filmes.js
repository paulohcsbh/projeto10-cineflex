import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Filmes({ filme }) {    
    return (
        <Link to={`/horario/${filme.id}`}>
            <Banner data-identifier="movie-outdoor" src={filme.posterURL} alt="Capa do filme">
            </Banner>
        </Link>
    )
}
const Banner = styled.img`
width: 129px;
height: 193px;
margin-bottom: 19px;
cursor: pointer

`