import React from "react";
import { Link } from "react-router-dom";

import { Trash3 } from "react-bootstrap-icons";

function IncluirVenda(){
    return(
        <>
            <section>
                <div className="container-fluid pt-1">
                    <div className="">
                        <ul className="navbar-nav list-group list-group-horizontal">
                            <li className="nav-item text-secondary ps-2">Home</li>
                            <li className="nav-item text-secondary ps-2">Vendas</li>
                            <li className="nav-item text-white ps-2">Pedido Venda</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="text-white p-3">
                <div className="container-fluid bg-dark p-3">
                    <div className="cabecalho_pedido">
                        {" "}
                        {/* Cabeçalho Pedido de Venda */}
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-8">
                                <h3>Pedido de Venda - 1595</h3>
                            </div>
                            <div className="col-md-1">
                                <Link to="/vendas"><button className="btn btn-outline-success">Cancelar</button></Link>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-success">Salvar</button>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="dados_cliente">
                        {" "}
                        {/* Dados Venda */}
                        <div className="row">
                            <h5>Dados do Cliente</h5>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="">Cliente</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Vendedor</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Loja</label>
                                <select className="form-select form-select-sm">
                                    <option value={1} selected="">Escolher Loja</option>
                                    <option value={2}>Campo Real</option>
                                </select>
                            </div>
                        </div>{" "}
                        <hr />
                    </div>

                    <div className="itens_pedido">
                        {" "}
                        {/* Itens do Pedido */}
                        <div className="row">
                            <h5>Itens do Pedido de Venda</h5>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col" />
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Código</th>
                                            <th scope="col">Un</th>
                                            <th scope="col">Quantidade</th>
                                            <th scope="col">Desc %</th>
                                            <th scope="col">Preço un</th>
                                            <th scope="col">Preço Total</th>
                                            <th scope="col" />
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th className="row">1</th>
                                        <td>
                                            <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Un"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            />
                                        </td>
                                        <td>
                                            <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            />
                                        </td>
                                        <td />
                                        <td>
                                            <button className="btn btn-outline-danger">
                                                <i className=""><Trash3/></i>
                                            </button>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="d-flex justify-content-end">
                                <button className="btn text-success">+ Adicionar Produto</button>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <div className="totais">
                        {" "}
                        {/* Totais da venda */}
                        <div className="row">
                            <h5>Totais</h5>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="">N° de Itens</label>
                                <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder={5}
                                />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="">Desconto</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="">Prazo de Entrega</label>
                                <input type="date" className="form-control form-control-sm" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="">Desconto Total da Venda</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    disabled=""
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="">Desconto Total dos Itens</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    disabled=""
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="">Total dos Itens</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="">Total da Venda</label>
                                <input type="text" className="form-control form-control-sm " />
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <div className="detalhes_venda">
                        {" "}
                        {/* Detalhes da Venda */}
                        <div className="row">
                            <h5>Detalhes da Venda</h5>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="">N° do Pedido</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder={1595}
                                    disabled=""
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="">Data da Venda</label>
                                <input type="date" className="form-control form-control-sm" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="">Data de Saída</label>
                                <input type="date" className="form-control form-control-sm" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="">Data Prevista</label>
                                <input
                                    type="date"
                                    className="form-control form-control-sm"
                                    disabled=""
                                />
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <div className="observacoes_pedido p-3">
                        {" "}
                        {/* Observações Pedido */}
                        <div className="row">
                            <h5>Dados Adicionais</h5>
                        </div>
                        <br />
                        <div className="row">
                            <label htmlFor="">Observações</label>
                            <textarea rows={5} className="form-control" defaultValue={""} />
                        </div>
                        <br />
                        <div className="row">
                            <label htmlFor="">Observações Internas</label>
                            <textarea rows={5} className="form-control" defaultValue={""} />
                        </div>
                        <br />
                    </div>
                </div>
            </section>            

        </>
    );
}

export default IncluirVenda;