function pesquisarATemperatura() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Obtém o termo de pesquisa, convertendo para minúsculas para facilitar a comparação
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    termoPesquisa.trim();

    // Verifica se o termo de pesquisa tem pelo menos 3 caracteres (para evitar pesquisas muito curtas)
    if (termoPesquisa.length < 3) {
        // Exibe uma mensagem indicando que o termo de pesquisa é muito curto
        section.innerHTML = `<p class="warning">Digite pelo menos 3 caracteres para pesquisar.</p>`;
        return; // Encerra a função, pois não há necessidade de continuar
    }

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultadosHTML = "";

    // Itera sobre cada dado, verificando se o termo de pesquisa existe no título, descrição ou tags
    for (const capital of capitais) {
        // Converte os dados para minúsculas para facilitar a comparação
        const cidade = capital.cidade.toLowerCase();

        // Objeto de mapeamento para os ícones com base nas condições climáticas
        const iconesTempo = {
            "Ensolarado": "assets/images/icons/ensolarado.png",
            "Nublado": "assets/images/icons/nublado.png",
            "Chuvoso": "assets/images/icons/chuvoso.png",
            "Tempestade": "assets/images/icons/tempestade.png",
            "Padrão": "assets/images/icons/chuvoso.png" // Ícone padrão
        };

        // Verifica se o termo de pesquisa está presente em algum dos campos
        if (cidade.includes(termoPesquisa)) {
            // Determina o ícone baseado nas condições climáticas ou usa o ícone padrão
            const icon = iconesTempo[capital.tempo] || iconesTempo["Padrão"];
            // Cria um novo elemento de resultado e adiciona ao HTML
            resultadosHTML += `
                <div class="item-resultado">
                    <h2>${capital.cidade}</h2>
                    <div class="info">
                        <div class="temp">
                            <div class="temp-titulo">Temperatura</div>
                            <div class="temp-info">${capital.temperatura} <sup>ºC</sup></div>
                            <img src="${icon}" />
                        </div>
                        <div class="vento">
                            <div class="vento-titulo">Tempo</div>
                            <div class="vento-info">${capital.tempo}</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (!resultadosHTML) {
        resultadosHTML = `<p class="warning">Nenhum resultado encontrado para a cidade pesquisada.</p>`;
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultadosHTML;
}

const botaoDePesquisa = document.getElementById("botao-pesquisa");

if (botaoDePesquisa) {
    botaoDePesquisa.addEventListener('click', pesquisarATemperatura);
    botaoDePesquisa.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {    
            pesquisarATemperatura();
        }
    });
}