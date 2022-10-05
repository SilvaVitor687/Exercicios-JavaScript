
/*
function testClasses() {

    let resSpace = window.document.getElementById("resultClasses");

    class spaceships {
        constructor(name, quantity) {
            this.nome = name
            this.quantidade = quantity
            this.engate = false
            this.portas = false
        }

        alterOpenSpaceships() {
            this.engate = true
            this.portas = true
        }
    }

    function showMenu () {
        let chosenOption;
        while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){ 
            chosenOption = prompt(`O que deseja executar ? \n1- ENGATAR NAVE \n2- IMPRIMIR NAVES ENGATADAS \n3- SAIR DO PROGRAMA  `);
                            }
        return chosenOption;
    }

   function createSpaceships (){
     let spaceshipengate = prompt(`Qual o nome da nave ?`);
     let spaceshipquantity = prompt(`Quantos tripulantes há na nave ?`);
     let spaceshipalter = new spaceships(spaceshipengate, spaceshipquantity);
     return spaceshipalter;
   }

   function printSpaceships (spaceships){
     let spaceshiplist = "";
     spaceships.forEach((element, index) => {
        spaceshiplist += (index + 1) + "- " + element.nome + " (" + element.quantidade + " Tripulantes)\n"
     })

     alert(spaceshiplist)
   }

   let spaceshiparray = [];
   let chosenOption;

   while(chosenOption != "3"){
    chosenOption = showMenu();
    switch(chosenOption) {
        case "1":
            let spaceshipadd = createSpaceships();
            spaceshipadd.alterOpenSpaceships();
            spaceshiparray.push(spaceshipadd);
            break
        case "2":
            printSpaceships(spaceshiparray)
            break;

    }
   }*/

   class spaceShips {
    constructor(name, jobs = "Programador") {
      this.name = name
      this.jobs = jobs
      //this.mat = 12
    }    
  }

    let darwin = new spaceShips("Vitor", "Developer");
    console.log(darwin)

  

























    /*
    class spaceShips {
     constructor(name, quantity){
            this.name = name
            this.quantity = quantity
            this.engate = false
            this.open = false
         }
         
         alterNav() {
            this.engate = true
            this.open = true
         }
    }

    function showMenu() {
        let chosenOption;
        while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
             chosenOption = prompt(`O que deseja fazer ?\n1 - ENGATAR A NAVE \n2 - IMPRIMIR NAVES \n3 - SAIR DO PROGRAMA`)
        }
        return chosenOption;
    }

    function createSpace() {
        let realEngate = prompt("Qual o nome da nave ?");
        let realQuantity = prompt("Qual a quantidade de tripulantes");
        var resNav = new spaceShips(realEngate, realQuantity);
        return  resNav;
    }

    function printSpace (spaceShips) {
        let spaceList = "";
        spaceShips.forEach((spaceship, index) => {
            spaceList += (index + 1) + "- " + spaceship.name + " (" + spaceship.quantity + " Tripulantes)\n"
        })

        alert(spaceList);
    }

    let arrNav = []
    let listOptions;

    while(listOptions != "3") {
        listOptions = showMenu();
        switch(listOptions) {
            case "1":
                let addSpace = createSpace();
                addSpace.alterNav();
                arrNav.push(addSpace);
                break
            case "2":
                printSpace(arrNav);
                break
        }
    }
    
}*/