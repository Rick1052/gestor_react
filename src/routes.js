import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';

import Home from './pages/Home';
import Cliente from "./pages/cadastro/Cliente/index";
import CadCliente from "./pages/cadastro/Cliente/cad_cliente";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cliente" element={<Cliente/>}/>
                <Route path="/cad_cliente" element={<CadCliente/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;