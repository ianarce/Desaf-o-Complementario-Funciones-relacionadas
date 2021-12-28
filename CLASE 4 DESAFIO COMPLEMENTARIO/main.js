function entradaNumero (num){
    num = parseInt(prompt("Ingresa el numero"))
    return num
}

function verificarNumero (num){
    return num%3
}

function resultado(num){
    if (num==0){
        alert("Es multiplo de 3")
    }
    else {
       alert( "No es multiplo de 3")
    }
}

let entrada=entradaNumero()
let proceso=verificarNumero(entrada)
let salida= resultado(proceso)