function clicou(){
    var num=Number(prompt("Digite um número"));
    
    ant=num-1;
    suc=num+1;

    document.getElementById('numero').innerHTML=`<p> O antecessor do número ${num} é ${ant} e seu sucessor é ${suc}`
}