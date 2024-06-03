import { Link } from "react-router-dom";
import './../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';

import Logo from './../../assets/icons/logo.svg';

function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="navbarScroll">

                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

                            {/* Logo */}
                            <li id="button_logo">
                                <span>
                                <Link to="/">
                                    <img
                                    src={Logo}
                                    alt="Logo"
                                    width="70%"
                                    />
                                </Link>
                                </span>
                            </li>

                            {/* Cadastro */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    id="navbarScrollingDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    area-expanded="false"
                                >Cadastro</Link>

                                <ul
                                    className="dropdown-menu dropdown-menu-dark"
                                    aria-labelledby="navbarScrollingDropdown"
                                >

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/cliente"
                                        >Clientes</Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to=""
                                        >Fornecedores</Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to=""
                                        >Vendedores</Link>
                                    </li>

                                    <li>
                                        <Link
                                        className="dropdown-item"
                                        to=""
                                        >Produtos</Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Suprimentos */}
                            <li className="nav-item dropdown">                                
                                <Link
                                    className="nav-link dropdown-toggle"
                                    id="navbarScrollingDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    area-expanded="false"
                                >Suprimentos</Link>

                                <ul
                                    className="dropdown-menu dropdown-menu-dark"
                                    aria-labelledby="navbarScrollingDropdown"
                                >

                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to=""
                                        >Controle de Estoque</Link>
                                    </li>

                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to=""    
                                        >Pedido de Compra</Link>
                                    </li>

                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to=""    
                                        >Relatórios</Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Vendas */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    id="navbarScrollingDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    area-expanded="false"
                                >Vendas</Link>

                                <ul
                                    className="dropdown-menu dropdown-menu-dark"
                                    aria-labelledby="navbarScrollingDropdown"
                                >
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to=""
                                        >Pedidos de Venda</Link>
                                    </li>
                                    
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to=""
                                        >Notas Fiscais</Link>
                                    </li>

                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to=""   
                                        >Relatórios</Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Financeiro */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    id="navbarScrollingDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    area-expanded="false"
                                >Financeiro</Link>
                                <ul
                                    className="dropdown-menu dropdown-menu-dark"
                                    aria-labelledby="navbarScrollingDropdown"
                                >
                                    <li>
                                        <Link
                                        className="dropdown-item"
                                        to=""
                                        >Contas Bancárias</Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to=""
                                        >Contas a Pagar</Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to=""
                                        >Contas a Receber</Link>
                                    </li>

                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to=""
                                        >Relatórios</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <button
                    className="navbar-toggler"
                    data-toggler="collapse"
                    data-target="#nav-principal"
                ><i className="fas fa-bars text-white" /></button>

                <div 
                    className="collapse navbar-collapse" 
                    id="nav-principal"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="">
                                <i className="bi bi-gear text-secondary" />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="">
                                <i className="bi bi-question-circle-fill text-secondary" />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="">
                                <i className="bi bi-box-arrow-right text-secondary" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>            
    );
}

export default Header;