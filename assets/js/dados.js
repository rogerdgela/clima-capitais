// Função para gerar uma temperatura aleatória entre 15°C e 44°C
function gerarTemperaturaAleatoria() {
// Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo)
    const numeroAleatorio = Math.random();
// Multiplica por 30 para obter um número entre 0 e 29.99...
// Arredonda para baixo com Math.floor para obter um número inteiro entre 0 e 29
// Soma 15 para ajustar o intervalo para entre 15 e 44
    return Math.floor(numeroAleatorio * 30) + 15;
}

// Função para gerar uma condição climática aleatória a partir de um array
function gerarTempoAleatorio() {
// Define um array com as possíveis condições climáticas
    const condicoesPossiveis = ["Ensolarado", "Nublado", "Chuvoso", "Tempestade"];
// Gera um índice aleatório dentro do array de condições
    const indiceAleatorio = Math.floor(Math.random() * condicoesPossiveis.length);
// Retorna a condição correspondente ao índice aleatório
    return condicoesPossiveis[indiceAleatorio];
}

// Array para armazenar as informações das capitais
const capitais = [];

// Array com os nomes das capitais brasileiras
const capitaisBrasileiras = [
    "Brasília",
    "Rio de Janeiro",
    "São Paulo",
    "Belo Horizonte",
    "Salvador",
    "Fortaleza",
    "Manaus",
    "Recife",
    "Porto Alegre",
    "Goiânia",
    "Curitiba",
    "Campo Grande",
    "Palmas",
    "São Luís",
    "Belém",
    "Maceió",
    "João Pessoa",
    "Teresina",
    "Vitória",
    "Natal",
    "Aracaju",
    "Florianópolis",
    "Macapá",
    "Porto Velho",
    "Rio Branco",
    "Boa Vista",
];

// Itera sobre cada capital brasileira e cria um objeto com as informações
capitaisBrasileiras.forEach(capital => {
// Cria um objeto para representar a capital
    const capitalInfo = {
        // Nome da cidade
        cidade: capital,
        // Temperatura aleatória gerada pela função
        temperatura: gerarTemperaturaAleatoria(),
        // Condição climática aleatória gerada pela função
        tempo: gerarTempoAleatorio()
    };
// Adiciona o objeto ao array de capitais
    capitais.push(capitalInfo);
});
