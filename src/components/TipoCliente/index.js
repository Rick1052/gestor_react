import React, { useState } from "react";


function TipoPessoa(){
    const [selectedPessoa, setSelectedPessoa] = useState('fisica');

    const HandleChange = (event) => {
        setSelectedPessoa(event.target.value);
    }

    console.log(selectedPessoa);

    return(
        <>  
            {/* Pessoa Fisíca */}
            {selectedPessoa === 'fisica' &&
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
                                value={selectedPessoa}
                                onChange={HandleChange}
                            >
                                <option value={'fisica'} selected>Pessoa Fisíca</option>
                                <option value={'juridica'}>Pessoa Jurídica</option>
                                <option value={'estrangeiro'}>Estrangeiro</option>
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
            
            }

            {/* Pessoa Jurídica */}
            {selectedPessoa === 'juridica' && 
            <>
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
                        value={selectedPessoa}
                        onChange={HandleChange}
                    >
                        <option value={'fisica'}>Pessoa Fisíca</option>
                        <option value={'juridica'} selected>Pessoa Jurídica</option>
                        <option value={'estrangeiro'}>Estrangeiro</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor="">CNPJ</label>
                    <input type="text" className="form-control form-control-sm" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="">Código de regime tributário</label>
                        <select
                            className="form-select form-select-sm"
                            aria-label="Default select example"
                        >
                            <option value={1} selected="">Não definido</option>
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
                                <option value={3} selected="">9 - Não Contribuinte</option>
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
                        <div className="col-md-3">
                            <br />
                            <input type="checkbox" className="form-check-input" />
                            <label htmlFor=""> - IE Isento</label>
                        </div>
                        <div className="col-md-9">
                            <label htmlFor="">Orgão Emissor</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>
                    </div>
                </div>
            </div>
            </>
            }

            {/* Pessoa Estrangeira */}
            {selectedPessoa === 'estrangeiro' && 
            <>            
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
                            value={selectedPessoa}
                            onChange={HandleChange}
                        >
                            <option value={'fisica'}>Pessoa Fisíca</option>
                            <option value={'juridica'}>Pessoa Jurídica</option>
                            <option value={'estrangeiro'} selected="">Estrangeiro</option>
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
            </>               
            }
        </>
    );
}

export default TipoPessoa;