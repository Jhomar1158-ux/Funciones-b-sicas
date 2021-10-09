// Imprime todos los enteros desde el 0 hasta el 255. Con cada entero, debes imprimir la suma de todos hasta ese punto. Retorna la suma final.
function printSum(x){
    var sum=0;
    //escribe tu código aquí
    for(var i=0; i<=x ; i++){
        console.log(i);
        sum+=i;
    }
    return sum;
}

y=printSum(255);
console.log(y);