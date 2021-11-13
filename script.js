const btnAdd = document.querySelector('#btn-add')
const inputTarefa = document.querySelector('#inputTarefa')
const lista = document.querySelector('ul')
let arrayTarefas = []

function addItem(){
    lista.appendChild(criaLi(inputTarefa.value, false))
    inputTarefa.value = ''
    salva()
  }

function riscaItem(e){
    let p  = e.parentElement.querySelector('p')
    for (let e of arrayTarefas) {
        if(e.texto === p.textContent)
            e.riscado = !e.riscado
    }
    if(p.className !== 'riscado'){
        p.setAttribute('class','riscado')        
    }else{
        p.classList.remove("riscado");
    }
    salva()
}

function remover(e){
    if(confirm('Tem certeza que deseja deletar a tarefa?')){
        let p = e.parentElement.querySelector('p')
        for (let index = 0; index < arrayTarefas.length; index++) {
            const element = arrayTarefas[index];
            if(element.texto === p.textContent){
                arrayTarefas.splice(index, 1)
                e.parentElement.remove()
                salva()
            }
        }
    }
}

function salva(){
    localStorage.setItem('listaTarefas2', JSON.stringify(arrayTarefas))
}

window.onload = function(){
    //localStorage.clear()

    JSON.parse(localStorage.getItem('listaTarefas2')).forEach(e => {
        lista.appendChild(criaLi(e.texto, e.riscado))
    });
 
 
}

function criaLi(texto, checked){

    let li = document.createElement('li')
    let input = document.createElement('input')
    let p = document.createElement('p')
    let btn = document.createElement('button')

    input.setAttribute('type','checkbox')
    input.setAttribute('onchange','riscaItem(this)')
    input.checked = checked
    if(checked)
        p.setAttribute('class', 'riscado')
    p.textContent = texto
    btn.setAttribute('onclick','remover(this)')
    btn.innerText = 'Remover'
    li.setAttribute('class','lContainer')

    li.appendChild(input)
    li.appendChild(p)
    li.appendChild(btn)
    
    let objeto = {}
    objeto.riscado = input.checked 
    objeto.texto = p.textContent
    arrayTarefas.push(objeto)

    return li
}