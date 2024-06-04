import React from "react";
import { Link } from "react-router-dom";

import TipoCliente from './../../../components/TipoCliente';

function cad_cliente(){
    return(
        <>
            <section>
                <div className="container-fluid pt-1">
                <div className="">
                    <ul className="navbar-nav list-group list-group-horizontal">
                        <li className="nav-item text-secondary ps-2">Home</li>
                        <li className="nav-item text-secondary ps-2">Cadastro</li>
                        <li className="nav-item text-white ps-2">Cliente</li>
                    </ul>
                </div>
                </div>
            </section>
            <section className="text-white p-3">
                <div className="container-fluid bg-dark p-3">

                <form >
                    <div className="row text-start">
                        <div className="col-md-10">
                            <h3 className="text-white">Cadastro Cliente</h3>
                        </div>
                        <div className="col-md-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to="/cliente"><button className="btn btn-outline-success">Cancelar</button></Link>
                                </div>
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-success">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />                    

                    <div className="row">
                        <h5>Dados Cadastrais</h5>
                    </div>
                    
                    <TipoCliente/>

                    <hr />
                    <div className="row">
                        <h5>Endereço</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">CEP</label>
                                    <input type="text" className="form-control form-control-sm" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">UF</label>
                                    <select
                                        className="form-select form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value={1}>RJ</option>
                                        <option value={2}>SP</option>
                                        <option value={3} selected="">PR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">Cidade</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">Bairro</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <label htmlFor="">Endereço</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="">Número</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="">Complemento</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <h5>Contato</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Informações de contato</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Fone</label>
                                    <input type="text" className="form-control form-control-sm" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Fax</label>
                                    <input type="text" className="form-control form-control-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Celular</label>
                                    <input type="text" className="form-control form-control-sm" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Operadora</label>
                                    <select
                                        className="form-select form-select-sm"
                                        aria-label="Default select example"
                                    >
                                        <option value={1}>TIM</option>
                                        <option value={2}>CLARO</option>
                                        <option value={3} selected="">
                                        Operadora
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="">E-mail</label>
                            <input type="email" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="">Observações</label>
                            <input type="text" className="form-control form-control-lg" />
                        </div>
                    </div>
                </form>
                </div>
            </section>
        </>

    );
}

export default cad_cliente;