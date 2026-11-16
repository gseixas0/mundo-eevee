const pokemons = [
    { nome: "Vaporeon", img: "imagens/vaporeon.png" },
    { nome: "Jolteon",  img: "imagens/jolteon.png" },
    { nome: "Flareon",  img: "imagens/flareon.png" },
    { nome: "Espeon",   img: "imagens/espeon.png" },
    { nome: "Umbreon",  img: "imagens/umbreon.png" },
    { nome: "Leafeon",  img: "imagens/leafeon.png" },
    { nome: "Glaceon",  img: "imagens/glaceon.png" },
    { nome: "Sylveon",  img: "imagens/sylveon.png" }
];

const formulario = document.getElementById("form-chute");
const imagem = document.getElementById("img-misterio");
const campo = document.getElementById("campo-chute");
const botaoChutar = document.getElementById("btn-chutar");
const botaoProximo = document.getElementById("btn-proximo");
const mensagem = document.getElementById("msg-chute");
const placar = document.getElementById("placar-chute");

let atual;
let acertos = 0;
let tentativas = 0;

function sortear() {
    const posicao = Math.floor(Math.random() * pokemons.length);
    atual = pokemons[posicao];

    imagem.src = atual.img;
    imagem.alt = "Silhueta de um Pokémon misterioso";
    imagem.classList.remove("revelada");

    campo.value = "";
    campo.disabled = false;
    botaoChutar.disabled = false;
    mensagem.className = "mensagem";
    mensagem.textContent = "Quem é esse Pokémon?";
}

function chutar(evento) {
    evento.preventDefault();

    const resposta = campo.value.trim().toLowerCase();
    if (resposta === "") {
        mensagem.textContent = "Digite um nome antes de chutar.";
        return;
    }

    tentativas++;

    if (resposta === atual.nome.toLowerCase()) {
        acertos++;
        mensagem.className = "mensagem acerto";
        mensagem.textContent = "Acertou! Era o " + atual.nome + ".";
    } else {
        mensagem.className = "mensagem erro";
        mensagem.textContent = "Errou! Era o " + atual.nome + ".";
    }

    imagem.classList.add("revelada");
    imagem.alt = atual.nome;
    placar.textContent = "Acertos: " + acertos + " de " + tentativas;

    campo.disabled = true;
    botaoChutar.disabled = true;
}

formulario.addEventListener("submit", chutar);
botaoProximo.addEventListener("click", sortear);

sortear();
