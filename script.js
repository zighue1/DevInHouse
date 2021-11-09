const btnAdd = document.querySelector('#btn-add')
const inputTarefa = document.querySelector('#inputTarefa')
const lista = document.querySelector('ul')

function addItem(){
    lista.innerHTML += ` <input type = "checkbox" onchange='riscaItem(this)'><p>${inputTarefa.value}</p><button onclick='remover(this)'>Remover</button><br>`
}

function riscaItem(e){
    if(e.nextSibling.style.textDecoration !== 'line-through'){
        e.nextSibling.style.textDecoration = 'line-through'
    }else{
        e.nextSibling.style.textDecoration = 'none'
    }
}

function remover(e){
    e.previousSibling.previousSibling.remove()
    e.previousSibling.remove()
    e.remove()
}