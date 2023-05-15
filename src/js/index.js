alert("Olá essa é minha coleção de pokemon.");

const btnTroca = document.querySelector("#botao-alterar");
const corpo = document.querySelector("body");
const pokebola = document.querySelector(".imagem-botao");
let troca = false

btnTroca.addEventListener("click", trocaFundo)

function trocaFundo(){
 if(!troca){
    corpo.classList.add("modo-escuro")
    pokebola.src ="./src/img/pokeballgs.png"
    troca = true
    } else {
        corpo.classList.remove("modo-escuro")
    pokebola.src ="./src/img/pokeball.png"
    troca = false
    }
}
