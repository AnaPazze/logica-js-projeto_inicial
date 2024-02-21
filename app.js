alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');
//console.log('valor do chute:' , chute );


//console.log('Resultado da comparação:', chute == numeroSecreto);
if (chute == numeroSecreto) {
   alert(`Você acertou o número secreto  ${numeroSecreto}`);
}
else{
    ///console.log('valor do número secreto:', numeroSecreto);
alert('Você errou, o número secreto era:', numeroSecreto);
}else{


}