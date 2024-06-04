import React from "react";

function ContasPagar(){
    
    
    return (){
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
                        <a href="" className="bi bi-x text-success" />
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
                                className=" bi bi-three-dots-vertical"
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
                            <td>Super Pão </td>
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
                                className=" bi bi-three-dots-vertical"
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
                            <td>LS CARDOSO</td>
                            <td>Ref ao pedido n° 1542</td>
                            <td>Dinheiro</td>
                            <td>564654</td>
                            <td>15/03/2024</td>
                            <td>R$ 2.150,00</td>
                            <td>
                            <i className="bi bi-circle-fill text-danger" />
                            </td>
                            <td className="dropdown">
                            <i
                                className=" bi bi-three-dots-vertical"
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
                {/* Atividades Gerais */}
                <section className="bg-dark p-3 text-white rounded">
                    <div className="row">
                    <div className="col-md-12">
                        <a href="#" className="btn text-white">
                        <i className="fas fa-check-circle" />
                        <span className="ps-2 align-middle">Baixar selecionados</span>
                        </a>
                        <hr />
                        <a href="#" className="btn text-white">
                        <i className="bi bi-printer" />
                        <span className="ps-2 align-middle">Gerar Recibos</span>
                        </a>
                        <hr />
                    </div>
                    </div>
                </section>
                </div>
            </div>
            </div>
            {/* Modal */}
            <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
            <div className="modal-dialog modal-lg modal-dialog-centered  ">
                <div className="modal-content bg-dark text-white">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                    Contas a Pagar
                    </h5>
                    <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    />
                </div>
                <div className="modal-body">
                    <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="">Fornecedor</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="">Vencimento</label>
                        <input type="date" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Valor</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="">Data de emissão</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">N° documento</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    </div>
                    <div className="row p-2">
                    <label htmlFor="">Histórico</label>
                    <textarea rows={5} defaultValue={""} />
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">Forma de Pagamento</label>
                        <select className="form-select">
                        <option value={1} selected="">
                            Selecione
                        </option>
                        <option value={2}>Dinheiro</option>
                        <option value={3}>Cartão de Crédito</option>
                        <option value={4}>Cartão de Débito</option>
                        <option value={5}>Pix</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Vendedor</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Ocorrência</label>
                        <select className="form-select">
                        <option value={1} selected="">
                            Única
                        </option>
                        <option value={2}>Mensal</option>
                        <option value={3}>Bimestral</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    className="btn btn-outline-success"
                    data-bs-dismiss="modal"
                    >
                    Cancelar
                    </button>
                    <button type="button" className="btn btn-success">
                    Salvar
                    </button>
                </div>
                </div>
            </div>
            </div>

      
        
        </>
    }
}