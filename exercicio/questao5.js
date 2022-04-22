function clicou(){
    var n1=Number(prompt("Digite seu primeiro número"));
    var n2=Number(prompt("Digite seu segundo número"));
    
    soma=n1+n2;
    sub=n1-n2;
    mul=n1*n2;
    div=n1/n2;

    document.getElementById('numero').innerHTML=`<p>O seu primeiro número é ${n1} e o seu segundo número é ${n2}.<br> A soma dos seus dois números é ${soma}, a subtração dos seus dois números é ${sub}, a multiplicação dos seus dois números é ${mul} e a divisão dos seus dois números é ${div}`
}