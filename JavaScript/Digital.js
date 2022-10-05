

function number10 () {
    var camp = document.getElementById("Par");
    var x = Number(camp.value);

   
    
    numbersPrimos(x)
            
    function numbersPrimos(limite){

        var cSel = document.getElementById("selecion");
        cSel.innerHTML = ''; 
        for(let numero = 2; numero <= limite; numero++){
            var ehPrimo = true;

            for(var divisor = 2; divisor < numero; divisor++){
                if(numero % divisor == 0)
                ehPrimo = false
                break
            }
        }

        if(ehPrimo) {
            console.log (numeros)
        }
    };



               /* if( x % 2 == 0){
                    for (var i = 1; i <= x; i++ ){
                        var opt = document.createElement("option");
                        i = i + 1
                        opt.text = `Pares: ${i} + ${x} = ${i + x}`;
                        cSel.appendChild(opt)
                    }
                } else {

                    for (var i = 2; i <= x; i++ ){
                        var opt = document.createElement("option");
                        i = i + 1;
                        opt.text = `Primo: ${i} + ${x} = ${i + x}`;
                        cSel.appendChild(opt)
                }
                
            }*/
}

// Preciso Analisar o porquê estar dando Undefined

function array_01(){
    var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160];
    var cSel = document.getElementById("arr01")

var grupoA = [159,151,156,154]
var grupoB=[165,167,169,160]
var grupoC =[170,187,191,171,170]

function addAlunos(alunos){   
    for(var i = 0; i < alunos.length; i++){        
        switch(alunos){
            case alunos[i] >= 150:
                return grupoA.push(alunos[i])
            case alunos[i] >= 160:
                return grupoB.push(alunos[i])
            case alunos[i] >= 170:
                return grupoC.push(alunos[i])
            }
        }
    }

var camp = document.createElement('option')
camp.text = addAlunos(alunos);
cSel.appendChild(camp)

}