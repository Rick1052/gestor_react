import React from "react";
import { Link } from "react-router-dom";
import { FunnelFill, Search, Printer } from "react-bootstrap-icons";

function Cliente(){
    return(
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col-md-10">
                    <div className="row">
                        <ul className="navbar-nav list-group list-group-horizontal">
                            <li className="nav-item text-white ps-3">
                                <h3>Clientes</h3>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-success"><FunnelFill/></button>
                        </div>
                        <div className="col-md-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome do Cliente"
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
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-success"><Printer/></button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Código</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF/ CNPJ</th>
                                        <th scope="col">Cidade</th>
                                        <th scope="col">Telefone </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Henrique Santos</td>
                                        <td>111.135.729-30</td>
                                        <td>Guarapuava-PR</td>
                                        <td>(42) 9 8829-3833</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>João Ortolan</td>
                                        <td>123.456.789-10</td>
                                        <td>Palmeirinha-PR</td>
                                        <td>(42) 9 9999-9999</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Rafael Angelo</td>
                                        <td>111.111.111.11</td>
                                        <td>Guarapuava-PR</td>
                                        <td>(42) 9 8888-8888</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Pedro Henriuqe</td>
                                        <td>111.546.897-25</td>
                                        <td>São Paulo-SP</td>
                                        <td>(42) 9 5555-5555</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Emerson José Caldas</td>
                                        <td>111.465.598-45</td>
                                        <td>Guarapuava-PR</td>
                                        <td>(42) 9 4256-3525</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Patrick Correa</td>
                                        <td>546.548.128-59</td>
                                        <td>Toledo-PR</td>
                                        <td>(42) 9 5685-2352</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 fixed">
                <Link className="btn btn-success" to="/cad_cliente">
                    Incluir Cadastro
                </Link>
                </div>
            </div>
        </div>

    );
}

export default Cliente;