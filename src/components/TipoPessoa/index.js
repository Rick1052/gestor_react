import React from "react";

import { useState } from "react";

function SelectPessoa(){
    const [showElement, setShowElement] = useState(false);
    const showOrHide = () => setShowElement(true);

    console.log(showOrHide);

    return(
        <div>
            <div className="col-md-4">
                <label htmlFor="">Tipo Pessoa</label>
                <select
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    onChange={showOrHide}
                >
                    <option value={1} >Pessoa Fisíca</option>
                    <option value={2}>Pessoa Jurídica</option>
                    <option value={3}>Estrangeiro</option>
                </select>
            </div>
            { showElement ? <p>Tô aqui</p> : null }
        </div>
    );
}

function PessoaFisica() {
    return(
        <>  
            <div id="pessoa_fisica">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">Nome Cliente</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Fantasia</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Código</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            aria-label="Disabled input example"
                            disabled=""
                        />
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-4">
                        <label htmlFor="">Tipo Pessoa</label>
                        <select
                            className="form-select form-select-sm"
                            aria-label="Default select example"
                        >
                            <option value={1} selected>Pessoa Fisíca</option>
                            <option value={2}>Pessoa Jurídica</option>
                            <option value={3}>Estrangeiro</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="">CPF</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="">Cliente desde</label>
                                <input type="text" className="form-control form-control-sm" />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="">Contribuinte</label>
                                <select
                                    className="form-select form-select-sm"
                                    aria-label="Default select example"
                                >
                                    <option value={1}>1 - Contribuinte ICMS</option>
                                    <option value={2}>2 - Contribuinte Isento</option>
                                    <option value={3} selected="">9 - Não Contribuinte</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">Inscrição Estadual</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">RG</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Órgão Emissor</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                </div>
            </div>
        </>
    );
}

function tipoPessoa(){
    return(
        <>
            <SelectPessoa/>
            
                {/* <div id="pessoa_juridica">
                    <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">Nome Cliente</label>
                        <input type="text" className="form-control form-control-sm " />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Fantasia</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Código</label>
                        <input
                        type="text"
                        className="form-control form-control-sm"
                        aria-label="Disabled input example"
                        disabled=""
                        />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">Tipo da Pessoa</label>
                        <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        >
                        <option value={1} selected="">
                            Pessoa Jurídica
                        </option>
                        <option value={2}>Pessoa Fisíca</option>
                        <option value={3}>Estrangeiro</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">CNPJ</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Código de regima tributário</label>
                        <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        >
                        <option value={1} selected="">
                            Não definido
                        </option>
                        <option value={2}>Simples Nacional</option>
                        <option value={3}>Regime Normal</option>
                        </select>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Cliente desde</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Contribuinte</label>
                            <select
                            className="form-select form-select-sm"
                            aria-label="Default select example"
                            >
                            <option value={1}>1 - Contribuinte ICMS</option>
                            <option value={2}>2 - Contribuinte Isento</option>
                            <option value={3} selected="">
                                9 - Não Contribuinte
                            </option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Inscrição Estadual</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                        <div className="col-md-5">
                            <br />
                            <input type="checkbox" className="form-check-input" />
                            <label htmlFor="">IE Isento</label>
                        </div>
                        <div className="col-md-7">
                            <label htmlFor="">Inscrição Estadual</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div id="pessoa_estrangeira">
                    <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">Nome Cliente</label>
                        <input type="text" className="form-control form-control-sm " />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Fantasia</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">Código</label>
                        <input
                        type="text"
                        className="form-control form-control-sm"
                        aria-label="Disabled input example"
                        disabled=""
                        />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="">Tipo da Pessoa</label>
                        <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        >
                        <option value={1}>Pessoa Jurídica</option>
                        <option value={2}>Pessoa Fisíca</option>
                        <option value={3} selected="">
                            Estrangeiro
                        </option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Cliente desde</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">País</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
        </>
    );
}

export default tipoPessoa;