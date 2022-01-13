/* mudança de cor atrás do código */
const rectangle = document.querySelector("#rectangle")

const cor = document.querySelector(".selecaocor")

cor.addEventListener("input",()=>{rectangle.style.backgroundColor=cor.value})

/* comentario: se vc quiser passar esse código para o index pode tranquilo */