const main = (params) => {
    function fibonnanci(valor){
     var anterior = 0
    var atual =1
    var proximo = 1
    for (let i = 0; i <= valor; i++) {
        console.log(proximo)
        anterior = atual + proximo
        atual = proximo
        proximo = anterior
           
    }
    
    }
    fibonnanci(20)

}