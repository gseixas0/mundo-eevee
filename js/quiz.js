const pokemons = [
    { id: "vaporeon", nome: "Vaporeon", img: "imagens/vaporeon.png", descricao: "Calma, adaptável e acolhedora. Você flui com as situações e ajuda os outros a se acalmarem." },
    { id: "jolteon", nome: "Jolteon", img: "imagens/jolteon.png", descricao: "Rápida e cheia de energia. Você age primeiro, pensa depois e ninguém consegue te acompanhar." },
    { id: "flareon", nome: "Flareon", img: "imagens/flareon.png", descricao: "Leal, corajosa e calorosa. Você aquece o ambiente e defende quem ama até o fim." },
    { id: "espeon", nome: "Espeon", img: "imagens/espeon.png", descricao: "Inteligente e intuitiva. Você enxerga longe e planeja com cuidado." },
    { id: "umbreon", nome: "Umbreon", img: "imagens/umbreon.png", descricao: "Reservada e observadora. Você prefere o silêncio e age na hora certa." },
    { id: "leafeon", nome: "Leafeon", img: "imagens/leafeon.png", descricao: "Paciente e tranquila. Você cresce no seu ritmo e gosta da natureza." },
    { id: "glaceon", nome: "Glaceon", img: "imagens/glaceon.png", descricao: "Elegante e independente. Você mantém a calma sob pressão." },
    { id: "sylveon", nome: "Sylveon", img: "imagens/sylveon.png", descricao: "Carinhosa e sociável. Você valoriza a amizade." }
];

const botao = document.getElementById("btn-resultado");
const resultado = document.getElementById("resultado");

function mostrarResultado() {
    const respostas = document.querySelectorAll("input[type='radio']:checked");
    let vencedor = pokemons[0];
    let maior = 0;

    for (let i = 0; i < pokemons.length; i++) {
        let pontos = 0;

        for (let j = 0; j < respostas.length; j++) {
            if (respostas[j].value === pokemons[i].id) {
                pontos++;
            }
        }

        if (pontos > maior) {
            maior = pontos;
            vencedor = pokemons[i];
        }
    }

    document.getElementById("titulo-resultado").textContent = "Você é " + vencedor.nome + "!";
    document.getElementById("img-resultado").src = vencedor.img;
    document.getElementById("img-resultado").alt = vencedor.nome;
    document.getElementById("desc-resultado").textContent = vencedor.descricao;
    resultado.hidden = false;
}

botao.addEventListener("click", mostrarResultado);
