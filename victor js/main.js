//function tabuadas() {
//let tabuada = +prompt("Digite o seu número:");
// for (let index = 1; index <= 10; index++) {
//console.log(`${tabuada} x ${index} = ${tabuada * index}`);
//}
//}


function calcularFatorial() {
    let numb = +prompt("Digite um número para calcular o fatorial:");

    if (numb < 0) {
        console.log("Por favor, digite um número não-negativo.");
        return;
    }

    let fatorial = 1;

    for (let i = 1; i <= numb; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numb} é: ${fatorial}`);
}

