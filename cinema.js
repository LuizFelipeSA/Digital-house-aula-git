let catalogo = [
    {
        codigo: 1,
        titulo: "A Hora do Rush",
        anoDeLancamento: 1998,
        duracao: 1.7, 
        emCartaz: false,
    }, 
    {
        codigo: 2,
        titulo: "Velozes e Furiosos 9",
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true,
    },
    {
        codigo: 3,
        titulo: "Homem aranha",
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true
    }
];

function adicionarFilme (codigo, titulo, ano, emCartaz){
    catalogo.push({
        codigo,
        titulo,
        ano,
        emCartaz
    });

    console.log(`o filme ${titulo} foi adicionado com sucesso. \n Cod: ${codigo} \n Ano: ${ano}`)
}

function buscarFilme(){
}

function alateraStatusEmCartaz(){

}

function listaFilmeLongos() {
    let filmesLongos = catalogo.filter((item) => item.duracao > 2);
    filmesLongos.forEach()
}

function buscarFilmePeloCodigo(cd){
}

function calculaFaturamento(){
    //com reduce calcular tudo 
}

 module.exports = {
 adicionarFilme,
 listaFilmeLongos    
 };   
//buscarFilme(2)

//adicionarFilme(3, "teste", 21, true)
