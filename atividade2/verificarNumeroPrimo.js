function verificarNumeroPrimo(n){
    resultado = true
    if (n != 0 && n != 1){
        for (i = n - 1; i > 1; --i){
            if (n % i == 0){
                resultado = false
            }
        }
    }else{
        resultado = false
    }
    
    

    console.log (resultado)
}



verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false



