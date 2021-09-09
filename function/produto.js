const funcionario = {
    id : 000001,
    nome: 'Luiz',
    dataDeNascimento: '21-03-1999',
    cargo : 'Analista de sistemas',
    salario : 'Trabalhamos por amor kkkkk'
}


//const aoCubo =  function (numero){
//    return Math.pow(numero, 3)
//}
//console.log(aoCubo(3))

// arrow function

//const aoQuadrado = (numero) => numero * numero;

//math.floor() aredonda 9.5 para 9



const aoQuadrado = (numero) => {
    let teste = Math.sqrt(numero);
    return teste
}

console.log(aoQuadrado(9))

// if ternario

const idade = Math.floor(Math.floor() * 99)

idade < 18 ? console.log("não pode beber " + idade) : idade > 80 ? console.log("Não é aconselhavel beber " + idade) : console.log("pode " + idade);