import React from "react";

import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';

function ContasPagar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {" "}
                    {/* Cabeçalho */}
                    <div className="col-md-12">
                        <div className="col-md-12 d-flex justify-content-between">
                            <div className="col-md-10">
                                <ul className="navbar-nav list-group list-group-horizontal">
                                    <li className="nav-item text-secondary ps-2">Home</li>
                                    <li className="nav-item text-secondary ps-2">Financeiro</li>
                                    <li className="nav-item text-white ps-2">Contas a Pagar</li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <button
                                    className="btn btn-success w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >+ Incluir Pedido</button>
                            </div>
                        </div>  
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-2">
                        {" "}
                        {/* Filtro */}
                        <section className="filtro_ped_vend text-white bg-dark rounded p-3">
                            {" "}
                            {/* Filtro Pedido de Venda */}
                            <div className="row">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <i className="bi bi-funnel-fill" />
                                        <h5 className="ps-2">Filtro</h5>
                                    </div>
                                    <a href="#" className="bi bi-x text-success" />
                                </div>
                            </div>
                            <div className="row ps-3 pe-3">
                                <label htmlFor="">Opção</label>
                                <select className="form-select form-select-sm">
                                    <option value={1} selected="">
                                        Em aberto
                                    </option>
                                    <option value={2}>Atrasadas</option>
                                    <option value={3}>Emitidas</option>
                                    <option value={4}>Recebidas</option>
                                </select>
                            </div>
                            <div className="row ps-3 pe-3">
                                <label htmlFor="">Tipo de Pagamento</label>
                                <select className="form-select form-select-sm">
                                    <option value={1} selected="">
                                        Dinheiro
                                    </option>
                                    <option value={2}>Cartão de crédito</option>
                                    <option value={3}>Cartão de débito</option>
                                    <option value={4}>Pix</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Valor</label>
                                    <input type="text" className="form-control form-control-sm" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Vendedor</label>
                                    <input type="text" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-success">Filtrar</button>
                                </div>
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
                                                    placeholder="Pesquisar por nome, email, CPF/CNPJ, número ou histórico"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <button
                                                    className="btn btn-outline-success bi bi-search"
                                                    type="button"
                                                    id="button-addon2"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3 ps-3">
                                            <button
                                                className="btn btn-outline-success bi bi-calendar rounded"
                                                type="button"
                                                id="button-addon2"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-1 d-flex justify-content-end">
                                        <button className="bi bi-printer btn btn-success" />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <table className="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col" />
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Histórico</th>
                                            <th scope="col">Forma de pagamento</th>
                                            <th scope="col">N° documento</th>
                                            <th scope="col">Vencimento</th>
                                            <th scope="col">Valor</th>
                                            <th scope="col">Situação</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <input type="checkbox" className="form-check-input" />
                                            </th>
                                            <td>Porterite</td>
                                            <td>Ref ao pedido n° 2465</td>
                                            <td>Pix</td>
                                            <td>0016524</td>
                                            <td>17/03/2024</td>
                                            <td>R$ 250,00</td>
                                            <td>
                                                <i className="bi bi-circle-fill text-success" />
                                            </td>
                                            <td className="dropdown">
                                                <i
                                                    className="bi bi-three-dots-vertical"
                                                    href="#"
                                                    id="navbarScrollingDropdown"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    area-expanded="false"
                                                />
                                                <ul
                                                    className="dropdown-menu dropdown-menu-dark rounded"
                                                    aria-labelledby="navbarScrollingDropdown"
                                                >
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fas fa-check" /> Baixar Recebimento
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fas fa-eye" /> Gerenciar Recebimentos
                                                        </a>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi bi-printer" /> Imprimir Recibo
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi bi-printer" /> Imprimir duplicata
                                                        </a>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <button className="btn btn-success btn-sm">N</button>{" "}
                                                            Gerar nota de Serviço
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <input type="checkbox" className="form-check-input" />
                                            </th>
                                            <td>Super Pão</td>
                                            <td>Ref ao pedido n° 1354</td>
                                            <td>Cartão de Crédito</td>
                                            <td>00123546</td>
                                            <td>10/02/2024</td>
                                            <td>R$ 990,00</td>
                                            <td>
                                                <i className="bi bi-circle-fill text-warning" />
                                            </td>
                                            <td className="dropdown">
                                                <i
                                                    className="bi bi-three-dots-vertical"
                                                    href="#"
                                                    id="navbarScrollingDropdown"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    area-expanded="false"
                                                />
                                                <ul
                                                    className="dropdown-menu dropdown-menu-dark rounded"
                                                    aria-labelledby="navbarScrollingDropdown"
                                                >
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fas fa-check" /> Baixar Recebimento
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fas fa-eye" /> Gerenciar Recebimentos
                                                        </a>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi bi-printer" /> Imprimir Recibo
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi bi-printer" /> Imprimir duplicata
                                                        </a>
                                                    </li>
                                                    <hr />
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <button className="btn btn-success btn-sm">N</button>{" "}
                                                            Gerar nota de Serviço
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
                        {/* Resumo */}
                        <section className="resumo_ped_vend text-white bg-dark rounded p-3">
                            {" "}
                            {/* Resumo Pedido de Venda */}
                            <div className="row">
                                <div className="d-flex">
                                    <i className="bi bi-journal-text" />
                                    <h5 className="ps-2">Resumo</h5>
                                </div>
                                <hr />
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-9">Pedidos em aberto:</div>
                                <div className="col-md-2">3</div>
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-9">Pedidos atrasados:</div>
                                <div className="col-md-2">1</div>
                            </div>
                            <hr />
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-8">Pedidos quitados:</div>
                                <div className="col-md-2">0</div>
                            </div>
                            <hr />
                            <div className="row">
                                <button className="btn btn-outline-success">
                                    Gerar Relatório <i className="bi bi-printer" />
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContasPagar;
