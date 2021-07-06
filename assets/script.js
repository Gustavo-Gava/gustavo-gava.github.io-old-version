let header = document.getElementsByTagName("header")[0];
let animation = 'header-fixo'

function animeScroll() {
    const windowTop = window.pageYOffset
    if ((windowTop) > header.offsetTop) {
        header.classList.add(animation)
    } else {
        header.classList.remove(animation)
    }
}

window.addEventListener("scroll", () => {
    animeScroll()

})

