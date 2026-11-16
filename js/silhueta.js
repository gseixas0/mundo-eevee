const pokemons = [
    { nome: "Vaporeon", img: "imagens/vaporeon.png" },
    { nome: "Jolteon", img: "imagens/jolteon.png" },
    { nome: "Flareon", img: "imagens/flareon.png" },
    { nome: "Espeon", img: "imagens/espeon.png" },
    { nome: "Umbreon", img: "imagens/umbreon.png" },
    { nome: "Leafeon", img: "imagens/leafeon.png" },
    { nome: "Glaceon", img: "imagens/glaceon.png" },
    { nome: "Sylveon", img: "imagens/sylveon.png" }
];

const imagem = document.getElementById("img-misterio");
const campo = document.getElementById("campo-chute");
const formulario = document.getElementById("form-chute");
const mensagem = document.getElementById("msg-chute");
let atual;

function sortear() {
    let numero = Math.floor(Math.random() * pokemons.length);
    atual = pokemons[numero];

    imagem.src = atual.img;
    imagem.classList.remove("revelada");
    campo.value = "";
    mensagem.textContent = "Quem é esse Pokémon?";
}

function chutar(evento) {
    evento.preventDefault();

    if (campo.value.toLowerCase() === atual.nome.toLowerCase()) {
        mensagem.textContent = "Acertou! É o " + atual.nome + "!";
    } else {
        mensagem.textContent = "Não foi dessa vez! Era o " + atual.nome + ".";
    }

    imagem.classList.add("revelada");
}

formulario.addEventListener("submit", chutar);
document.getElementById("btn-proximo").addEventListener("click", sortear);

sortear();
