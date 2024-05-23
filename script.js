let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu(){
    
    //menu fechado - tem a classe menu fechado
    //menu aberto - ele nao tem a classe menu fechado

    //Alterna a classe 
    //menu.classlist.toggle

    //se o menu contem a classe menu fechado
if(menu.classList.contains("menu-fechado")){
    //abrir menu - tira a classe menu fechado
    menu.classList.remove("menu-fechado")

    //mostrar icone barras
    iconeBarras.style.display = "none"

    //esconder o icone do X
    iconeX.style.display = "inline"

}else{
    //fechar menu - adicionar a classe menu-fechado
    menu.classList.add("menu-fechado")

    //esconder icone do X
    iconeX.style.display = "none"

    // mostrar o icone barras
    iconeBarras.style.display = "inLine"
}

}

onresize = () => {
    //abrir menu - tira a classe menu fechado
    menu.classList.remove("menu-fechado")

    //mostrar icone barras
    iconeBarras.style.display = "none"

    //esconder o icone do X
    iconeX.style.display = "inline"
}

//carrossel
let banner = document.querySelector(".banner")

//let slides = [0, 1, 2]
//slides [0] -> primeiro-banner
//slides [1] -> segundo-banner
//slides [2] -> terceiro-banner

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])
//array sempre se usa colchetes[]

function mostrarProximoSlide() {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        //somar 1 na variavel slideAtual
        slideAtual++
    } else {
        // voltar para o primeiro slide
        slideAtual = 0
    }

    //Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior(){    

     //remover o slide anterior
     banner.classList.remove(slides[slideAtual])

     if(slideAtual > 0){
        //subtrair 1 na variavel slideAtual
    slideAtual--
     }else {
        //voltar para o proximo slide
        slideAtual = 2
     }     

    //Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

