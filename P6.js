// Imprime números enteros de 1 a x. Si x es menor que 1, retorna false.
function imprimeHasta(x){
    if(x<1){
        return false;
    }
    else{
        for(var i=1; i<=x ; i++){
            console.log(i);
        }
        return true;
    }
    
}
// y=imprimeHasta(10);
y=imprimeHasta(-10);
console.log(y);