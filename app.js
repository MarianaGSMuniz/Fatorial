const express = require ('express');
const app = express();

app.get ('/',(req,res) => {
    return res.json("APi funcionando")
});

const N = parseFloat(prompt("Digite um número:"));

const fatorial = N;

for(cont=1; cont<N; cont++) {
    alert("Fatorial = "+ fatorial +" * ("+N+"-"+cont+") ");
    fatorial=fatorial* (N-cont);
}

alert (N+ "! = "+fatorial);

app.listen (3000,() =>{
alert (Funcionando)
});