
// variaveis com armazenamento independente de funçao
var numeros = [];
var operadores = [];
var resultado = 0;


function calcular(valorDisplay) {
    
    
    //split usando regular expression.
    numeros = valorDisplay.split(/[-+*\/]/);
    var operadoresPrimarios = true;
    var operadoresSecundarios = true;
    

        // executa operaçoes primarias, na ordem que há de ser feita, * e /, posteriormente, realiza as de + e -.
        while(operadoresPrimarios){
           
            operadoresPrimarios = false;

            for(var i = 0; i < operadores.length; i++){
                // declara o tamanho da lista antes de começar um laço para reorganizar a array, previne que a pagina trave.
                var tamanho = numeros.length;
               
                if(operadores[i] == "*"){    
                   
                    numeros[i] = numeros[i]*numeros[i+1];
                   
                    // reorganiza a array e posteriormente tira o ultimo elemento dela, que no caso já será inutilizado.
                    for(var cont = 1; cont < tamanho; cont++){
                        numeros[i+cont] = numeros[i+cont+1];
                    }

                    numeros.pop();
                    operadores.splice(i, 1);
                    operadoresPrimarios = true;

                // **repete processo para a /
                }else if(operadores[i] == "/"){
                    numeros[i] = numeros[i]/numeros[i+1];
                    for(var cont = 1; cont < tamanho; cont++){
                        numeros[i+cont] = numeros[i+cont+1];
                    }
                    numeros.pop();
                    operadores.splice(i, 1);
                    operadoresPrimarios = true;
                }
            }
        }
        

        while(operadoresSecundarios){
            operadoresSecundarios = false;
            for(var i = 0; i < numeros.length; i++){
                numeros[i] = parseFloat(numeros[i]);
            }

            for(var i = 0; i < operadores.length; i++){
               
                if(operadores[i] == "+"){
                    
                    numeros[i] = numeros[i] + numeros[i+1];
                    
                    
                    for(var cont = 1; cont < numeros.length; cont++){
                        numeros[i+cont] = numeros[i+cont+1];
                    }
                    
                    numeros.pop();
                    operadores.splice(i, 1);
                    operadoresSecundarios = true;

                }else if(operadores[i] == "-"){
                    
                    numeros[i] = numeros[i] - numeros[i+1];
                   
                    for(var cont = 1; cont<numeros.length; cont++){
                        numeros[i+cont] = numeros[i+cont+1];
                    }

                    numeros.pop();
                    operadores.splice(i, 1);
                    operadoresSecundarios = true;                
                }
            }
        }
        
        
    document.getElementById('display').value = numeros[i];
    console.log("Uma conta foi realizada! Resultado: " + numeros[i]);
}
   




function operador(valorBotao){
  
    var displayValor = document.getElementById('display').value;
    var operador = "/*+-.";
    var numeros = "1234567890";
    
    if(!displayValor == "" && !operador.includes(valorBotao) || numeros.includes(valorBotao) || numeros.includes(displayValor.charAt(displayValor.length - 1)) && !displayValor == ""){
       
        document.getElementById('display').value = displayValor + valorBotao;
        
        if(operador.includes(valorBotao) && valorBotao != "."){
            operadores.push(valorBotao);
        }
    }else{
        alert("Digite um valor valido.")
    }

    console.log("O botão " + valorBotao + " foi acionado");
    
    
}

function reset(display){
    
    display.value = '';
    for(var i = operadores.length; i == operadores.length; i--){
        operadores.shift();
    }
    for(var i = numeros.length; i == numeros.length; i--){
        numeros.shift();
    }

    console.log('A calculadora foi limpa!');
}