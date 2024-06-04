import React from "react";
import { Link } from "react-router-dom";

import './../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { X, FunnelFill, Search, Calendar, Printer, CircleFill, ThreeDotsVertical } from "react-bootstrap-icons";
import "bootstrap/js/dist/dropdown";

function Vendas(){


    return(
        <>
            <br/>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-12">
                        <div className="col-md-12 d-flex justify-content-between">
                            <div className="col-md-10">
                                <ul className="navbar-nav list-group list-group-horizontal">
                                    <li className="nav-item text-secondary ps-2">Home</li>
                                    <li className="nav-item text-secondary ps-2">Vendas</li>
                                    <li className="nav-item text-white ps-2">Pedido Venda</li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <Link to='/incluir_pedido'><button className="btn btn-success w-100">+ Incluir Pedido</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-2">

                        {/* Filtro */}
                        <section className="filtro_ped_vend text-white bg-dark rounded p-3">

                            {/* Filtro Pedido de Venda */}
                            <div className="row">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <i className=""><FunnelFill/></i>
                                        <h5 className="ps-2">Filtro</h5>
                                    </div>
                                    <button className="btn text-success"><X/></button>
                                </div>
                            </div>

                            <div className="row ps-3 pe-3">
                                <label htmlFor="">Situação</label>
                                <select className="form-select form-select-sm">
                                    <option value={1}>Todos</option>
                                    <option value={2}>Atendido</option>
                                    <option value={3}>Aberto</option>
                                    <option value={4}>Em produção</option>
                                </select>
                            </div>

                            <div className="row ps-3 pe-3">
                                <label htmlFor="">Vendedor</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>

                            <div className="row ps-3 pe-3">
                                <label htmlFor="">Produto</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>

                            <div className="row ps-3 pe-3">
                                <label htmlFor="">Cep</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>

                            <div className="row ps-3 pe-3">
                                <label htmlFor="">N° do pedido de compra</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>

                            <br />

                            <div className="row ps-3 pe-3">
                                <button className="btn btn-success">Filtrar</button>
                            </div>
                        </section>
                
                        </div>
                    <div className="col-md-8">
                    {" "}
                    {/* Corpo */}
                    <section className="main_ped_vend text-white bg-dark p-3 rounded">
                        {" "}
                        {/* Conteudo Principal Pedido de Venda */}
                        <div className="row">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex col-md-7">
                            <div className="col-md-8">
                                <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pesquisar por nome, email, CPF/CNPJ, ou n° do pedido"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    className="btn btn-outline-success"
                                    type="button"
                                    id="button-addon2"
                                ><Search/></button>
                                </div>
                            </div>
                            <div className="col-md-3 ps-3">
                                <div className="input-group">
                                <button
                                    className="btn btn-outline-success"
                                    type="button"
                                    id="button-addon2"
                                ><Calendar/></button>
                                <input
                                    type="text"
                                    className="form-control ps-2"
                                    placeholder="04/04/2024"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-1 d-flex justify-content-end">
                            <button className="btn btn-success"><Printer/></button>
                            </div>
                        </div>
                        </div>
                        <br />
                        <div className="row">
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col" />
                                <th scope="col">Número</th>
                                <th scope="col">Data</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Total</th>
                                <th scope="col">Situação</th>
                                <th scope="col" />
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">
                                <input type="checkbox" className="form-check-input" />
                                </th>
                                <td>1594</td>
                                <td>03/04/2024</td>
                                <td>João Carlos</td>
                                <td>R$ 5.950,00</td>
                                <td>
                                <i className="text-warning"><CircleFill/></i>
                                </td>
                                <td className="dropdown">
                                <i
                                    className=""
                                    href="#"
                                    id="navbarScrollingDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    area-expanded="false"
                                ><ThreeDotsVertical/></i>
                                <ul
                                    className="dropdown-menu dropdown-menu-dark rounded"
                                    aria-labelledby="navbarScrollingDropdown"
                                >
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <button className="btn btn-danger btn-sm">N</button>{" "}
                                        Gerar NF-e
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <button className="btn btn-primary btn-sm">E</button>{" "}Gerar Estoque
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <button className="btn btn-success btn-sm">C</button>{" "}Gerar Contas
                                    </a>
                                    </li>
                                    <hr />
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <i className=""><Printer/></i> Imprimir
                                    </a>
                                    </li>
                                    <hr />
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <i className="text-success"><CircleFill/></i>{" "}
                                        Atendido
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <i className="text-range"><CircleFill/></i>{" "}Cancelar
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <i className="text-warning"><CircleFill/></i>{" "} Aberto
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        className="dropdown-item"
                                        href="./../../cadastros/cliente/cliente.html"
                                    >
                                        <i className="text-primary"><CircleFill/></i>{" "}Em Produção
                                    </a>
                                    </li>
                                </ul>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>
                        </div>
                    </section>
                    </div>
                    <div className="col-md-2">
                    {" "}
                    {/* Atividades Gerais */}
                    <section className="bg-dark p-3 text-white rounded">
                        <div className="row">
                        <div className="col-md-12">
                            <button className="btn text-white">
                            <i className="fas fa-file-invoice-dollar" />
                            <span className="ps-2 align-middle">Gerar NF-e dos pedidos</span>
                            </button>
                            <hr />
                            <button className="btn text-white">
                            <i className="fas fa-file-invoice-dollar" />
                            <span className="ps-2 align-middle">
                                Alterar situação do pedido
                            </span>
                            </button>
                            <hr />
                            <button className="btn text-white">
                                <i className="fas fa-adjust" />
                                <span className="ps-2 align-middle">Imprimir Selecionados</span>
                            </button>
                        </div>
                        </div>
                    </section>
                    </div>
                </div>
                </div>
            </>

    );
}

export default Vendas;