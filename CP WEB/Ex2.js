// Recuperando o input das especificações da tarefa
const descricao = document.getElementById("inputDesc");
const Autor = document.getElementById("inputAutor");
const Departamento  = document.getElementById("inputDep");
const Importância  = document.getElementById("inputImp");

//Recuperando btn de Adicionar Nova Tarefa
const btnAddTarefa = document.getElementById("btnTarefa")

//Inizializando listas vazias para cada especificação da Tarefa
let listaDesc = [];
let listaAutor = [];
let listaDep = [];
let listaImp = [];

//Adicionando um listener de clicck no botão addTarefa
btnAddTarefa.addEventListener("click", (evt)=>{



    evt.preventDefault();

    
    listaDesc.push(descricao.value);
    listaAutor.push(Autor.value);
    listaDep.push(Departamento.value);
    listaImp.push(Importância.value);

    
    let li = document.createElement("li");

    li.textContent = descricao.value;

    const listaUlDesc = document.getElementById("lista-desc");

    listaUlDesc.appendChild(li);

    let li2 = document.createElement("li");

    li2.textContent = Autor.value;

    const listaUlAutor = document.getElementById("lista-autor");

    listaUlAutor.appendChild(li2);

    let li3= document.createElement("li");

    li3.textContent = Departamento.value;

    const listaUlDep = document.getElementById("lista-dep");

    listaUlDep.appendChild(li3);

    let li4 = document.createElement("li");

    li4.textContent = Importância.value;

    const listaUlImp = document.getElementById("lista-Imp");

    listaUlImp.appendChild(li4);

    let btnDel = document.createElement("button");
    

});

const btnDel = document.getElementById("btnDelTarefa");

