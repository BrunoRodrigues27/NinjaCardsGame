let barra = window.document.getElementById('barra')
let menu = document.getElementById('menu')

barra.addEventListener('click', barrinha)

function barrinha(){
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}
