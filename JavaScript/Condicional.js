
function testCondicional() {

    let namePilot = prompt("Qual o nome do Piloto ?");
    let velocity = 0;
    let quizVel = Number(prompt("Qual Velocidade gostaria de acelerar a Nave ?"));
    let res = window.document.getElementById("res");
    let confirmVel = confirm(`${namePilot} você estar indo para a velocidade de ${quizVel}Km/h`);

    
    if(confirmVel) {
        velocity = quizVel;
    }

    if(velocity <= 0) {

       alert(`Nave estar parada. Considere partir e aumentar a 
                            velocidade.
                            \nNOME DO PILOTO: ${namePilot} \nVELOCIDADE ATUAL: ${velocity}km/h
                            `);
    } else if ( velocity < 40){
        alert(`Voce estar devagar podemos aumentar mais.
        \nNOME DO PILOTO: ${namePilot} \nVELOCIDADE ATUAL: ${velocity}km/h
                                        `);
    } else if (velocity >= 40 && velocity < 80) {
                                prompt (`Parece ser uma boa velocidade para manter.
                                \nNOME DO PILOTO: ${namePilot} \nVELOCIDADE ATUAL: ${velocity}km/h
                                        `);
    } else if (velocity >= 80 && velocity < 100) {
        alert(`Velocidade alta considere diminuir.
        \nNOME DO PILOTO: ${namePilot} \nVELOCIDADE ATUAL: ${velocity}km/h
                                        `);
    } else if (velocity >= 100) {
        alert(`VELOCIDADE PERIGOSA. CONTROLE AUTOMATICO FORÇADO
       \nNOME DO PILOTO: ${namePilot} \nVELOCIDADE ATUAL: ${velocity}km/h
                                        `);
    }  
}


function testSwitch() {
    var namenav = prompt("Qual o nome da nave ?");
    var numberVel = Number(prompt(`Qual a valor deseja acelear ?`));
    var listOp = prompt (`Digite a opção abaixo a qual unidade deseja converter.\n \n1 - Parsec (pc)\n2 - Unidade Astrônomica (AU) \n3 - Quilometros (Km)`);
    var resSwitch = document.getElementById("resultSwitch")

    var chosenOption;
    var calcUnity;

    switch(listOp){
        case "1":
            chosenOption = `Parsec ${namenav} PC`;
            calcUnity = numberVel * 0.306601;
            break
        
        case "2":
            chosenOption = `Unidade Astronomica ${namenav} AU` ;
            calcUnity = numberVel * Math.round(63241.1);
            break
        case "3":
            chosenOption= `Quilometros ${namenav} Km/s`;
            calcUnity = numberVel * 9.5 * Math.pow(10,12);
            break
        default:
            alert("Opção inválida");
    }

    resSwitch.innerHTML = `<strong><br>A distancia em anos luz é ${chosenOption} <br>Foi convertida para ${calcUnity} ly</strong>`;
}



function testWhile() {

    var nameNav = document.getElementById("namenav");
    var valueNav = nameNav.value;
    var res = document.getElementById("txtarea");

    var count = 0;
    var chosenOption = "";


    if (valueNav == "") {
        alert("VOCE DEVE PREENCHER O CAMPO VAZIO!");
    } else if (valueNav) {
        chosenOption = prompt("Deseja entrar na dobra \n01 - SIM \n02 - NÃO");
        while(chosenOption == 1) {
            count += 1;
            chosenOption = prompt("Deseja efetuar uma nova dobra \n01 - SIM \n02 - NÃO");
            
        }
    }

        var result = window.document.createElement("option");
        result.text = `DOBRA EXECUTADA: ${count}`;
        res.appendChild(result)
  
}

function testFor () {

    let forname = document.getElementById("forname");
    let valueFor = forname.value;
    let subname = document.getElementById(`subnav`);
    let valueSub = subname.value;
    let subcarac = document.getElementById("subcarac");
    let valueCarc = subcarac.value;

    let resultfor = document.getElementById("txtres");

    var spaceShips = "";

    for (let i = 0; i < valueFor.length; i++) {
        if(valueFor[i] == valueSub){
            spaceShips +=  valueCarc
        } else {
            spaceShips += valueFor[i];
        }
    }

    var res = window.document.createElement("option");
    res.text = `${spaceShips}`;
    resultfor.appendChild(res);

}

function testFunction () {
    
   let nameNav = document.getElementById("nav");
   let nameval = nameNav.value;
   var velocityInitial = 0;
   var chosenOption;

   if (nameval == 0) {
     alert("[ERRO] Campo estar vazio !!");
   } else {

        function showMenu() {
            var option;
            while (option != "1" && option != "2" && option != "3" && option != "4") {
                option = prompt(`Olá ${nameval}. Escolha uma das opções abaixo. \n01 - ACELERE 20km/h \n02 - DESACELERE 20Km/h \n03 - IMPRIMA OS RESULTADOS \n04 - SAIR DO PROGRAMA`);
            } return option
        } 
   }

        function acelerar(velocity) {
            var newvel = velocity + 20;
            return newvel
        }

        function desacelerar(velocity) {
            var newvel = velocity - 20;
            if(newvel < 0) {
                newvel = velocityInitial;
            }
            return newvel;
        }

        function printSpace(name, velocity){
            alert(`NOME DA NAVE: ${name} \nVELOCIDADE: ${velocity}`)
        }

        do{
            chosenOption = showMenu();
            switch(chosenOption) {
                case "1":
                    velocityInitial = acelerar(velocityInitial);
                    break;
                case "2":
                    velocityInitial = desacelerar(velocityInitial);
                case "3":
                    velocityInitial = printSpace(nameval, velocityInitial)
                    break;
                case "4":
                    alert(`SAIR DO PROGRAMA`)
            }
        } while(chosenOption !=4) 
    }


function testHigh() {
    

    function desaceleracao(velocidade, print){
        var desacel = 20;

        while(velocidade > 0) {
            print(velocidade);
            velocidade -= desacel
        }
    }

    var initvel = 150;
    alert(`NAVE PARADA`);

    desaceleracao(initvel, (velocidade => {
        console.log("VELOCIDADE ATUAL" + velocidade)
    }));
}


/* EXercicio 07 ----------------------------------------------------------------------------------------------------- */

function res01() {
    
    arrays = document.getElementById("array01");

    const hitchedSpaceships = [
        ["Fenix", 8 , true],
        ["Golias", 10, true],
        ["Helmet", 5, false],
        ["Elemental", 3, true],
        ["Darwin", 15, false]
    ]


    var resfilter = hitchedSpaceships.filter(element => {
        return element [1] > 9
    }) .map(element => {
        return element[0]
    })

    arrays.innerHTML = `<b> ${resfilter.join(`<br>`)}`;
    
}

    function res02 (){
        arrays = document.getElementById("array02");

        const hitchedSpaceships = [
            ["Fenix", 8 , true],
            ["Golias", 10, true],
            ["Helmet", 5, false],
            ["Elemental", 3, true],
            ["Darwin", 15, false]
        ]

        var res = hitchedSpaceships.findIndex(element => {
            return element [2] == false;
        })

       
             arrays.innerHTML = `<b> ${res}`;
    }

    function res03() {
        arrays = document.getElementById("array03");

        const hitchedSpaceships = [
            ["Fenix", 8 , true],
            ["Golias", 10, true],
            ["Helmet", 5, false],
            ["Elemental", 3, true],
            ["Darwin", 15, false]
        ]

        var res = hitchedSpaceships.map(option => {
            return option[0].toUpperCase();
        });

        arrays.innerHTML = `<b> ${res.join(`<br>`)}`
    }


/** FIM ------------------------------------------------------------------------------------------------------------ */

/* EXercicio 08 ----------------------------------------------------------------------------------------------------- */


function testObject(){

    var spaceShips = {

        velocidade:0,
        aceleracao: function(aceleration){
            this.velocidade += aceleration
        }
    }

    function cad() {
        spaceShips.name = prompt(`Qual o nome da nave ?`);
        spaceShips.type = prompt(`Olá ${spaceShips.name}! Qual o Tipo da Nave`);
        spaceShips.velocityMax = prompt(`Qual a sua velocidade Máxima ?`)
    }

    function acelerar() {
        
        var aceleration = Number(prompt("Quanto você quer acelerar ?"));
        spaceShips.aceleracao(aceleration);

        if(spaceShips.velocity > spaceShips.velocityMax ) {

            alert(`VELOCIDADE ULTRAPASSADA DA NAVE. \nA VELOCIDADE MÁXIMA É: ${spaceShips.velocityMax}km/h \nVEL ATUAL: ${spaceShips.velocity}km/h`);
        }
   }

   function stop(){

        alert(`NOME: ${spaceShips.name} \nTIPO: ${spaceShips.type} \nVELOCIDADE DA NAVE: ${spaceShips.velocity}km/h 
        \nVELOCIDADE MAXIMA: ${spaceShips.velocityMax}km/h`)

        spaceShips.velocity = 0;
   } 
   

     function showMenu() {
        var chosenOption;
            do{
                chosenOption = Number(prompt(`Você deseja: \n1 - Acelerar \n2 - Parar`));
                switch(chosenOption) {
                    
                    case 1:
                        acelerar()
                        break;
                    case 2:
                        stop()
                        break
                    default:
                        alert('Agradecemos pela viagem !!!')
                    }
                } while (chosenOption != 2);
            } 

    
            cad();
            showMenu();
    }


/** FIM ------------------------------------------------------------------------------------------------------------ */