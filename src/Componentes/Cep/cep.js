import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cep() {
    const [cep, setCep] = useState(''); // Estado para armazenar o CEP digitado pelo usuário
    const [academias, setAcademias] = useState([]); // Estado para armazenar os resultados da busca das academias

    const handleChange = (e) => {
        setCep(e.target.value);
    }

    const onSearch = () => {
        const onSearch = () => {
            // Verificar se o CEP está no formato correto (opcional)
            const cepRegex = /^\d{5}-\d{3}$/;
            if (!cepRegex.test(cep)) {
                alert('Por favor, insira um CEP válido.');
                return;
            }
        
            // Fazer a requisição para buscar as academias com base no CEP usando uma API (exemplo fictício)
            fetch(`https://api.exemplo.com/academias?cep=${cep}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao buscar academias.');
                    }
                    return response.json();
                })
                .then(data => {
                    // Atualizar o estado das academias com os resultados da busca
                    setAcademias(data);
                })
                .catch(error => {
                    console.error('Erro ao buscar academias:', error);
                    alert('Erro ao buscar academias. Por favor, tente novamente mais tarde.');
                });
        }
        
        // Lógica para buscar academias com base no CEP
    }

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>BUSCAR</h2>
                    <p>Encontre a mais próxima de você</p>
                </div>

                <div className="row mt-5">

                    <div className="col-lg-2">
                        <div className="info">
                        </div>
                    </div>

                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <form className="php-email-form">
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="cep" id="cep" pattern="\d{5}-\d{3}" placeholder="Digite seu CEP" value={cep} onChange={handleChange} required />
                            </div>
                            <div className="my-3">
                                <div className="text-center"><button type="button" onClick={onSearch}>BUSCAR ENDEREÇOS</button></div>
                            </div>
                        </form>

                        <div id="map" style={{ height: '400px', width: '100%' }}></div>

                        <table id="resultsTable">

                            <tbody>
                                {/* Aqui você deve mapear os resultados das academias e renderizar as linhas da tabela */}
                                {academias.map((academia, index) => (
                                    <tr key={index}>
                                        <td>{academia.nome}</td>
                                        <td>{academia.endereco}</td>
                                        <td>{academia.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cep;
