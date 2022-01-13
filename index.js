/* Highlight */
const linguagem = document.querySelector('.seletor')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botaohighlight = document.querySelector('.botaohighlight')

function aplicaHighlight(e){
    e.preventDefault()
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botaohighlight.addEventListener('click', 
    aplicaHighlight
)

/* pegando dados */
const nomeProjeto  = document.querySelector('.nomeprojeto')

const corFundo = document.querySelector(".selecaocor")

const descricao = document.querySelector(".descricao")

const codigo = document.querySelector(".preview")

const botaoSalvar = document.querySelector(".salvar")
/* enviando dados para o local storage */

botaoSalvar.addEventListener("click", e => {
    e.preventDefault()

    const infoProjeto  =  JSON.parse(localStorage.getItem('dados')) || []

    infoProjeto.push({
        nome: nomeProjeto.value,
        descricao: descricao.value,
        cor: corFundo.value,
        codigo: codigo.innerHTML
    })
    console.log(infoProjeto)

    localStorage.setItem('dados', JSON.stringify(infoProjeto))
    alert('Sucesso!')
})

/*Uncaught SyntaxError: Identifier 'cor' has already been declared*/