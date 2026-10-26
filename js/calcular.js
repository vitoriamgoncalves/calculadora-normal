/*
Operadores aritiméticos:
+ soma 
- subtração
* mltiplicação
/ divisão
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)

Operadores de atribuição:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual
*= multiplicado ou igual

Operadores de sequencia:
+(serve para concatenar valores
   (string ou variaveis))
-(serve para subtrair valores
   (string ou variaveis))

Operadores de comparação: 
RETORNA TRUE( VERDADEIRO) OU FALSE (FALSO)
== (comparar 2 valores)
=== (comparar valores e tipo de dado)
!= (diferente)de valores apenas
!== (comparar a diferença de valores e tipo de dado)

< menor   > maior
<=menor ou igual  >= maior ou igual
*/


function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = resultado;
    //alterar a cor do resultado caso seja menor q 0
const corResultado = document.getElementById("resultado");
if(resultado < 0){
    corResultado.style.backgroundColor = "red";
}
else{
    corResultado.style.backgroundColor = "lightblue";
}
}


function subtrair(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado").innerHTML = resultado;
   const corResultado = document.getElementById("resultado");
if(resultado < 0){
    corResultado.style.backgroundColor = "red";
}
else{
    corResultado.style.backgroundColor = "lightblue";
}
}

function multiplicar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado").innerHTML = resultado;
    const corResultado = document.getElementById("resultado");
if(resultado < 0){
    corResultado.style.backgroundColor = "red";
}
else{
    corResultado.style.backgroundColor = "lightblue";
}
}

function dividir(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    if(n2 === 0){
        document.getElementById("resultado").innerHTML = "Erro: divisão por 0"
        document.getElementById("resultado").style.backgroundColor = "lightyellow"
    }
    else{
        let resultado = n1 / n2;
    document.getElementById("resultado").innerHTML = resultado;
    const corResultado = document.getElementById("resultado");
if(resultado < 0){
    corResultado.style.backgroundColor = "red";
}
else{
    corResultado.style.backgroundColor = "lightblue";
}
    }

}

function limpar(){
    let n1 = Number(document.getElementById("num1").value = "");
    let n2 = Number(document.getElementById("num2").value = "");
    document.getElementById("resultado").innerHTML = "---";
    document.getElementById("resultado").style.backgroundColor = "lightblue"
}

