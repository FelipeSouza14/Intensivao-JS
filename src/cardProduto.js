export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo){
        const cartaoProduto = 
            `<div class= 'border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
                <img id="estiloImagem" src="./assets/img/${produtoCatalogo.imagem}" alt="Produto 1 do magazine hashtag.">
                <p>${produtoCatalogo.marca}</p>
                <p>${produtoCatalogo.nome}</p>
                <p>$${produtoCatalogo.preco}</p>
                <button>Adicionar</button>
            </div>`;
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    }
}