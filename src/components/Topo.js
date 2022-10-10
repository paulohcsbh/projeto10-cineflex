import styled from "styled-components"
export default function Topo(){
    return(
        <Header>
                <Title>Cineflex</Title>
        </Header>
    )
}
const Header = styled.div`
width: 375px;
height: 67px;
background-color: #c3cfd9;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top:0;
left:0;
`
const Title = styled.h1`
font-size: 34px;
font-family: 'Roboto', sans-serif;
color: #e8833a;
text-transform: uppercase;
font-weight: 400;
`