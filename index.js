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