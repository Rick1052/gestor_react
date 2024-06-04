import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';

import Home from './pages/Home';
import Cliente from "./pages/cadastro/Cliente/index";
import CadCliente from "./pages/cadastro/Cliente/cad_cliente";
import Vendas from "./pages/Vendas";
import IncluirVenda from "./pages/Vendas/IncluirVenda";
import ContasPagar from "./pages/ContasPagar";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cliente" element={<Cliente/>}/>
                <Route path="/cad_cliente" element={<CadCliente/>}/>
                <Route path="/vendas" element={<Vendas/>}/>
                <Route path="/incluir_pedido" element={<IncluirVenda/>}/>
                <Route path="/contas_pagar" element={<ContasPagar/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;