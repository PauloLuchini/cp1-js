// Recuperando o input das especificações da tarefa
const descricao = document.getElementById("inputDesc");
const Autor = document.getElementById("inputAutor");
const Departamento  = document.getElementById("inputDep");
const Importância  = document.getElementById("inputImp");
const Valor = document.getElementById("inputValor");
const Duracao = document.getElementById("inputDuracao");
//Recuperando btn de Adicionar Nova Tarefa
const btnAddTarefa = document.getElementById("btnTarefa")

//Adicionando um listener de clicck no botão addTarefa
btnAddTarefa.addEventListener("click", (evt)=>{

    evt.preventDefault();

    // criando a lista(li) para cada valor da tarefa e adicionando ela a tag ul
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
  
    let li5 = document.createElement("li");
    li5.textContent =  Valor.value;
    const listaUlValor = document.getElementById("lista-valor");
    listaUlValor.appendChild(li5);

   
    let li6 = document.createElement("li");
    li6.textContent = Duracao.value;
    const listaUlDuracao = document.getElementById("lista-duracao");
    listaUlDuracao.appendChild(li6);
  
   //Criando botao Para deletar tarefas e adicionando ele do lado da lista de valor(Extrema Direita)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Clear";
    deleteButton.addEventListener("click", () => {
        listaUlDesc.removeChild(li);
        listaUlAutor.removeChild(li2);
        listaUlDep.removeChild(li3);
        listaUlImp.removeChild(li4);
        listaUlValor.removeChild(li5);
        listaUlDuracao.removeChild(li6);
    });

    
    if(Valor.value == ""){
        li4.appendChild(deleteButton);
    }else if(Duracao.value == ""){
        li5.appendChild(deleteButton);
    }else{
        li6.appendChild(deleteButton)
    };


});

const btnListaPorImportancia = document.getElementById("btnListaPorImportancia");

btnListaPorImportancia.addEventListener("click", () => {
    const listaUlImportancia = document.getElementById("lista-Imp");
    const listaDescPorImportancia = document.getElementById("lista-desc-por-importancia");

    // Remove os itens anteriores da lista, se houver
    while (listaDescPorImportancia.firstChild) {
        listaDescPorImportancia.removeChild(listaDescPorImportancia.firstChild);
    }

    // Cria uma matriz de objetos {importancia, descricao}
    const tarefas = [];
    const itensImportancia = listaUlImportancia.getElementsByTagName("li");
    for (let i = 0; i < itensImportancia.length; i++) {
        const importancia = parseInt(itensImportancia[i].textContent);
        const descricao = itensImportancia[i].previousElementSibling.textContent;
        tarefas.push({ importancia, descricao });
    }

    // Ordena as tarefas por ordem de importância
    tarefas.sort((a, b) => b.importancia - a.importancia);

    // Cria os elementos <li> apenas com as descrições por ordem de importância
    for (const tarefa of tarefas) {
        const li = document.createElement("li");
        li.textContent = tarefa.descricao;
        listaDescPorImportancia.appendChild(li);
    }
});