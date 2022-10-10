import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelecaoFilmes from "./SelecaoFilmes"
import EscolhaHorario from "./EscolhaHorario"
import SelecaoAssento from "./SelecaoAssento"
import Sucesso from "./Sucesso"
import Topo from "./Topo";

export default function App() {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<SelecaoFilmes />} />
                <Route path="/horario/:idHorario" element={<EscolhaHorario />} />
                <Route path="/assento/:idAssento" element={<SelecaoAssento />} />
                <Route path="/sucesso/" element={<Sucesso />} />                
            </Routes>
        </BrowserRouter>
    )
}