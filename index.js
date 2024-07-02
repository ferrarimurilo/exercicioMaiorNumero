const prompt = require("prompt-sync")({sigint:true});

console.log("Vamos descobrir qual é o maior número possível de formar com os algarismos digitados");

let numeroDigitado = (prompt("Digite um número com quantos dígitos preferir: "));

let numeroDigitadoSplit = numeroDigitado.split("");

for (i = 0; i < numeroDigitadoSplit.length; i++){
    for( j = (i + 1); j < numeroDigitadoSplit.length; j++){
        if(numeroDigitadoSplit[j]>numeroDigitadoSplit[i]){
            let auxiliar = numeroDigitadoSplit[j];
            numeroDigitadoSplit[j] = numeroDigitadoSplit[i]
            numeroDigitadoSplit[i] = auxiliar;
        }
    }
}

console.log("O maior número possível de se formar com os números digitados é: "+numeroDigitadoSplit.join(""));

