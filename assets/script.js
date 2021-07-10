let header = document.getElementsByTagName("header")[0];
let buttons = document.getElementsByClassName('btn-header')
let btnBackground = document.getElementsByClassName('btn-header-background')[0];
let sobreMim = document.getElementById('mid')
let projetos = document.getElementById('projetos')
let contato = document.getElementById('contato')

let animation = 'header-fixo'

function animeScroll() {
    const windowTop = window.pageYOffset
    const screenHeight = window.screen.height
    // Animação do Header
    if ((windowTop) > header.offsetTop) {
        header.classList.add(animation)
    } else {
        header.classList.remove(animation)
    }

    // Animação dos buttons de acordo com onde o usuário estiver vendo.
    // Animação do button Sobre mim
    if ((windowTop >= sobreMim.offsetTop)) {
        buttons[0].classList.add('btn-header-animation')
        buttons[0].classList.add('about-me')
        buttons[0].style.color = "#be0a5b"
    } 
    if ((windowTop > projetos.offsetTop - 300) || (windowTop < sobreMim.offsetTop)){
        buttons[0].classList.remove('btn-header-animation')
        buttons[0].classList.remove('about-me')
        buttons[0].style.color = "white"
    }

    // Animação do button Projetos
    if ((windowTop > projetos.offsetTop - 300)) {
        buttons[1].classList.add('btn-header-animation')
        buttons[1].classList.add('project')
        buttons[1].style.color = "#be0a5b"
    }
    if ((windowTop < sobreMim.offsetTop + 300) || (windowTop > projetos.offsetTop + 30)){
        buttons[1].classList.remove('btn-header-animation')
        buttons[1].classList.remove('project')
        buttons[1].style.color = "white"
    }

    // Animação do button Contato
    if ((windowTop > projetos.offsetTop + 30)) {
        buttons[2].classList.add('btn-header-animation')
        buttons[2].classList.add('contact')
        buttons[2].style.color = "#be0a5b"
    } else{
        buttons[2].classList.remove('btn-header-animation')
        buttons[2].classList.remove('contact')
        buttons[2].style.color = "white"
    }


}

window.addEventListener("scroll", () => {
    animeScroll()

})

