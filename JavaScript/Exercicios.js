
function recrutas(){

    var primeiro = window.document.getElementById("primeiro");
    var valuepri = primeiro.value;
    var segundo = window.document.getElementById("segundo");
    var valueseg = segundo.value;
    var campos = window.document.getElementById("campos");
    var valuecamp = campos.value;
    var anonasc = window.document.getElementById("anonasc");
    var valuenasc = anonasc.value;
    var dateatual = 2022;
    var result = document.getElementById("dadosRec")

    if(valuepri == 0 || valueseg == 0 || valuecamp == 0 || valuenasc == 0) {

        alert(`[ERRO] Campos estão vazios. Favor preencha os mesmo.`);
    } else {
        var calcnasc = dateatual - valuenasc;

        result.innerHTML = `NOME COMPLETO: ${valuepri} ${valueseg} <br> CAMPOS DE ESTUDOS: ${valuecamp} <br> IDADE ATUAL: ${calcnasc} `;
    }   
}

function calculos() {

    var calc1 = document.getElementById("calc1");
    var valcal1 = Number(calc1.value);
    var calc2 = document.getElementById("calc2");
    var valuecal2 = Number(calc2.value);

    var sub;
    var sum;
    var mult;
    var div;
    var resCal = document.getElementById("dadosCalc");

    if(valcal1 == 0 || valuecal2 == 0) {
        alert(`[ERRO] Campos estão vazios. Favor preencha os mesmo.`);
    }else{

        sub = valcal1 - valuecal2;
        sum = valcal1 + valuecal2;
        mult = valcal1 * valuecal2;
        div = valcal1 / valuecal2;
        resCal.innerHTML = `VALOR DA SUB: ${sub} <br> VALOR DA SOMA: ${sum} <br>VALOR DA MULTIPLICAÇÃO: ${mult} <br>VALOR DA DIVISÃO: ${div}`;
    }


}


function velozCars(){

    var cars1 = document.getElementById("vel1");
    var valueCars1 = Number(cars1.value);
    var cars2 = document.getElementById("vel2");
    var valueCars2 = Number(cars2.value);

    var rescars = document.getElementById("dadosVelocity")

    if(valueCars1 == 0 || valueCars2 == 0) {
        alert(`[ERRO] Campo vazio. Preencha os mesmos.`)
    } else if (valueCars1 > valueCars2) {        
        rescars.innerHTML = `O Carro Vermelho estar a ${valueCars1}Km/h. Por isso estar mais veloz que o que o Carro Azul que estar a ${valueCars2}Km/h`;
    } else if (valueCars2 > valueCars1) {
        rescars.innerHTML = `O Carro Azul estar a ${valueCars2}Km/h. Por isso estar mais veloz que o Carro Vermelho que estar a ${valueCars1}Km/h`;
    } else if (valueCars1 == valueCars2) {
        rescars.innerHTML = `Os Dois carros estão nas mesma velocidade a ${valueCars1}Km/h`;
    }

}

function personagens() {

    var namepersons1 = document.getElementById('personagem1')
    var valuename1 = namepersons1.value;
    var namepersons2 = document.getElementById('personagem2');
    var valuename2 = namepersons2.value;

    var atack1 = document.getElementById("atack1");
    var atack2 = document.getElementById("atack2");

    var defend1 = document.getElementById("defend1");
    var defend2 = document.getElementById("defend2");

    var life1 = document.getElementById("life1");
    var vida1 =  life1.value;
    var life2 = document.getElementById("life2");
    var vida2 = life2.value;

    var esc1 = document.getElementById("esc1");
    var valuesc1 = esc1.value;
    var esc2 = document.getElementById("esc2");
    var valuesc2 = String(esc2.value);
    
    var guerra1 = document.getElementById("guerra1");
    var guerra2 = document.getElementById("guerra2");
    var calc;

    if((x = atack1.value) > (y = defend2.value) && valuesc2 == "escudo2" ){       
        calc = x - y;
        guerra1.innerHTML = `NOME: ${valuename2} <br>DANO CAUSADO: <b>-${calc} <br>PONTOS DE VIDA: <b>${vida2} <br>VIDAS RESTANTES: <b>${vida2 - calc} `
    } else if ((x = atack1.value) > (y = defend2.value) && valuesc2 == "semescudo2") {
        calc = y / 2;
        guerra1.innerHTML = `NOME: ${valuename2} <br>DANO CAUSADO: <b>-${calc} <br>PONTOS DE VIDA: <b>${vida2} <br>VIDAS RESTANTES: <b>${vida2 - calc} `;
    } else if ((x = atack1.value) == (y = defend2.value)) {
        calc = 0;
        guerra1.innerHTML = `NOME: ${valuename2} <br>DANO CAUSADO: <b>${calc} <br>PONTOS DE VIDA: <b>${vida2} <br>VIDAS RESTANTES: <b>${vida2 - calc}`;
    }

    if((x = atack2.value) > (y = defend1.value) && valuesc1 == "escudo1" ){       
        calc = x - y;
        guerra2.innerHTML = `NOME: ${valuename1} <br>DANO CAUSADO: <b>-${calc} <br>PONTOS DE VIDA: <b>${vida1} <br>VIDAS RESTANTES: <b>${vida1 - calc} `
    } else if ((x = atack2.value) > (y = defend1.value) && valuesc1 == "semescudo1") {
        calc = x / 2;
        guerra2.innerHTML = `NOME: ${valuename1} <br>DANO CAUSADO: <b>-${calc} <br>PONTOS DE VIDA: <b>${vida1} <br>VIDAS RESTANTES: <b>${vida1 - calc} `;
    } else if ((x = atack2.value) == (y = defend1.value)) {
        calc = 0;
        guerra2.innerHTML = `NOME: ${valuename1} <br>DANO CAUSADO: <b>${calc} <br>PONTOS DE VIDA: <b>${vida1} <br>VIDAS RESTANTES: <b>${vida1 - calc}`;
    }
            
   }

   function conversor(){
        
    var campos = document.getElementById("valorconvert");
    var valuecamp = Number(campos.value);
    
    var convert = document.getElementById("conversor");
    var valueconvert = String(convert.value);

    var unidadeMed;
    var res = document.getElementById("dadoConvert");

    switch(valueconvert) {
        case "mil":
            unidadeMed = valuecamp * (10 * 10 * 10);
            res.innerHTML = `Resultado ${valuecamp}m = ${unidadeMed}mm`;
            break;
        case "cen":
            unidadeMed = valuecamp * (10 * 10);
            res.innerHTML = `Resultado ${valuecamp}m = ${unidadeMed}mm`;
            break;
        case "dec":
            unidadeMed = valuecamp * 10;
            res.innerHTML = `Resultado ${valuecamp}m = ${unidadeMed}dm`;
            break;
        case "deca":
            unidadeMed = valuecamp / 10;
            res.innerHTML = `Resultado${valuecamp}m = ${unidadeMed}dam`;
            break;
        case "hec":
            unidadeMed = valuecamp / (10 * 10);
            res.innerHTML = `Resultado ${valuecamp}m = ${unidadeMed}hm`;
            break;
        case "qui":
           unidadeMed = valuecamp /(10 * 10 * 10);
           res.innerHTML = `Resultado ${valuecamp}m = ${unidadeMed}km`;
           break;
        default:
            alert("PROGRAMA ENCERRADO");
    }
   }

   function visit() {

    var x = document.getElementById("turist");
    var turist = x.value.toUpperCase();
    var opts = document.getElementsByName("opt");
    
    var res = document.getElementById("dadosturist");

    for(var i = 0; i < opts.length; i++){
        
        if(opts[i].checked){
            
            alert(opts[i].value)
            
           //res.innerHTML =`A cidade do ${opts[i].value} é muito Bonita`;

        }else if(opts[5].checked){
            var sel = prompt("Então me diga qual cidade você ja visitou ?");
            res.innerHTML = `Olá, ${turist} ! A cidade do ${sel} é muito Bonita`;
            break;
        } else {
            res.innerHTML = `Cidade inválida. digite uma cidade`;
        }
    }
   
    

   



    /*var cidades = "";
    var check = prompt("Olá " +turist+ " Você ja Visitou alguma cidade ? \n01 - SIM \n02 - NÃO");
    var count = 0;

    var res = document.getElementById("dadosturist")

    while(check === "1" ) {
        var cidade = prompt("Qual o nome da cidade ?");
        cidades += cidade + `<br>`;
        count ++

        check = prompt(" Você ja Visitou alguma outra cidade ? \n01 - SIM \n02 - NÃO")
    }
    
    res.innerHTML = ` TURISTA: ${turist} <br> Você visitou ${count} Cidade(s). <br>Dentre elas: <br> ${cidades}`;
   }*/

   }



   function chosenoptions() {

        var radios = document.getElementsByName("option");
        var res = document.getElementById("resposta")


        do{            
            for(var i = 0; i < radios.length; i++) {
                if(radios[i].checked ){              
                    res.innerHTML = `Você Escolheu a opção ${radios[i].value}`;
                }           
            }
        } while (i == "");        

   }

   function addmoney() {

       var initMon = Number(prompt("Qual a valor atual ?"));
       var options = "";
       
       do{
            options = Number(prompt(`VALOR ATUAL: R$ ${initMon} \nDeseja efetuar algumas das opções abaixo ? \n1- Adicionar Saldo \n2- Retirar Saldo \n3- Sair do Programa`));      
            switch(options) {
                case 1:
                    initMon += Number(prompt(`Qual a quantidade a ser adicionada ?`));
                    break;
                case 2:
                    initMon -= Number(prompt(`Qual a quantidade da retirada ?`));
                    break;
                default:
                    alert("PROGRAMA ENCERRADO")             
                
         }   

       }    while(options !== 3);

   }

   function tabuada() {

        var multi = document.getElementById("multi");
        var valmulti = multi.value;

        var res = document.getElementById("select");


        res.innerHTML = '';
        if (valmulti == 0) {
            alert("[ERRO] CAMPO VAZIO")
        } else {
            for(var i = 1; i <= 20; i++) {
                var item = document.createElement('option');
                item.text = `VALOR: ${valmulti} x ${i} = ${i * valmulti}`;
                res.appendChild(item);
        }
    }
}

function palindromo() {

    var x = document.getElementById("campPalin");
    var camP = x.value.toUpperCase();

    var palavraInvert = "";

    var res = document.getElementById("palin")

    if(camP == 0) {
        alert("[ERRO] CAMPO VAZIO")
    } else {

        for(var indice = camP.length - 1; indice >= 0; indice--){
            palavraInvert += camP[indice];
            
        }

        if( camP === palavraInvert) {

            res.innerHTML = `PALAVRA É UM PALINDROMO`;
        } else {
            res.innerHTML = `NÃO É UM PALINDROMO VEJA: <br> ESQUERDA: ${camP} <br> DIREITA: ${palavraInvert}<br> `;
        }

    }
}

function arrays() {

    //var camp = document.getElementById("campArray");
    var res = document.getElementById("resarr");
    var chosenOption = [];
    let menu;



    do{

        var paciente = "";
        for(var i = 0; i < chosenOption.length; i++){
            paciente += (i + 1) + "º - " + chosenOption[i] + "<br>";
        }

        menu = prompt(` DESEJA EXECUTAR UMA DAS OPÇÕES ABAIXO ? \n01- NOVO PACIENTE \n02- CONSULTAR PACIENTE \n03- SAIR DO PROGRAMA`);

        switch(menu) {
            case "1":
                const newpac = prompt("Qual o nome do Paciente ?");
                chosenOption.push(newpac);
                break;
            case "2":
                const consult = prompt("Qual paciente deseja consultar.")
                chosenOption.shift(consult);
                break;
            case "3":
                alert("PROGRAMA ENCERRADO");
                break;
            default:
                alert("OPÇÃO INVÁLIDA");
        }

    } while(menu !== "3")
        
        res.innerHTML = `<b>LISTA DE PACIENTES:</b> <br> ${paciente}`;

}

function Carts() {

    var chosenOption = [];
    var menu;

    
    do {

        menu = prompt(`Esse Baralho Contém ${chosenOption.length}; O que deseja fazer ? \n01 - Adicionar uma Carta \n02 - Puxar uma Carta \n03 - Sair`);

            switch(menu) {
                case "1":
                    const newcarts = prompt(`Qual o nome da Carta que deseja adicionar ?`);
                    chosenOption.push(newcarts);
                    break
                case "2":
                    const puxecarts = chosenOption.pop();
                    if (!puxecarts){
                        alert("Não há nenhuma carta puxada")
                    }else {
                        alert("Você puxou um(a) " + puxecarts)
                    }
                    break;
                case "3":
                    alert("PROGRAMA ENCERRADO");
                    break;
                default:
                    alert(`OPÇÃO INVÁLIDA`);

        } 
    } while(menu !== "3")

    
}