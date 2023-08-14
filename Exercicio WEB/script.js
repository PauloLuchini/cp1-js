const listaSalario = [{salario: 1000},{salario: 2000},{salario: 3000},{salario: 4000},{salario: 5000},{salario: 6000},{salario: 7000},{salario: 8000},{salario: 9000},{salario: 10000}];

const listaatt = listaSalario.map((listaSalario)=>{

    
    if(listaSalario.salario <= 2000){
        let val = listaSalario.salario + listaSalario.salario*0.15
        return val
    }else if(listaSalario.salario > 2000){
        let val = listaSalario.salario + listaSalario.salario*0.10
        return val
    };
});

console.log(listaatt)
console.log("\n")

const listaatt2 = listaatt.filter(listaatt => listaatt > 2500);

console.log(listaatt2)



