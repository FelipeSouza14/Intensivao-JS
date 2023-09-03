import { catalogo } from "./utilidade";

function abrirCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[-360px]");
    document.getElementById("carrinho").classList.add("right-[0px]");
}

function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto){
    // p pode ser qualquer produto, é só uma forma de representar
    const produto = catalogo.find((p) => p.id === idProduto );
    const containerProdutoCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `
<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2">
        <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800">
        </i></button>
    <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24">
    <div class="py-2">
        <p class="text-slate-900">${produto.nome}</p>
        <p class="text-slate-400">Tamanho: M</p>
        <p class="text-green-400">$${produto.preco}</p>
    </div>
</article>`;

containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho;

}