const navegacao = document.querySelector('header nav div.menu')
const menu =document.querySelector('header nav button')

menu.addEventListener('click', () => {
    navegacao.style.height = '40vh'
 })

 navegacao.addEventListener('click', () => {
     navegacao.style.height = '0'
 })

 window.addEventListener('scroll', () => {
     document.querySelectorAll('.esquerda').forEach((animacacao, index) => {
        if(animacacao.getBoundingClientRect().top < window.innerHeight - 50) {
            animacacao.classList.add('efeito-scroll')
        }
     })
 })

 window.addEventListener('scroll', () => {
    document.querySelectorAll('.direita').forEach((animacacao, index) => {
       if(animacacao.getBoundingClientRect().top < window.innerHeight - 50) {
           animacacao.classList.add('efeito-scroll')
       }
    })
})

window.addEventListener('scroll', () => {
    document.querySelectorAll('.baixo').forEach((animacacao, index) => {
       if(animacacao.getBoundingClientRect().top < window.innerHeight - 50) {
           animacacao.classList.add('efeito-scroll')
       }
    })
})