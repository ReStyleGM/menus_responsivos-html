const menu = document.querySelector(".menu")

function ajustarMenu() {
    const larguraTela = window.innerWidth
    const larguraMenu = menu.scrollWidth
    let escala = 1
    if (larguraMenu > larguraTela) {
        escala = larguraTela / larguraMenu
    }
    menu.style.transform = `translateX(-50%) scale(${escala})`
}

window.addEventListener("load", ajustarMenu)
window.addEventListener("resize", ajustarMenu)