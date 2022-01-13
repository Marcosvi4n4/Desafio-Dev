/* pegando dados do local storage */

const template = (nome,descricao,codigo,cor) =>{
    const novoconteudo = document.createElement("li")

    const conteudo = `<li class="cards">
    <div class="card">
        <div class="codigo">
            <div id="rectangle" style="background:${cor}">
                <div class="conteudo">
                    <img src="mac_buttons.svg" alt="bolinhas" class="bolinhas">
                    <div class="codigo-wrapper">
                        <code class="preview hljs" contenteditable="true" aria-label="Editor de código">${codigo}</code>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="informacao-projeto">
        <div class="info">
            <h2 class="titulo">${nome}</h2>
            <p class="descricao">${descricao}</p>
        </div>
        <div class="interacao">
            <p class="coment"><img src="comentario.svg" alt="comentarios">9</p>
            <p class="coracao"><img src="coração.svg" alt="likes">9</p>
            <img src="author.svg" alt="foto" class="foto">
        </div>
    </div>
</li>`

novoconteudo.innerHTML = conteudo

return novoconteudo
}

const listagemCards = document.querySelector("ul")

function pegarDados(){
    const infoProjeto  =  JSON.parse(localStorage.getItem('dados')) || []
console.log (infoProjeto)
infoProjeto.forEach (projeto=>{listagemCards.appendChild(template(projeto.nome,projeto.descricao,projeto.codigo,projeto.cor))})
} 

pegarDados()