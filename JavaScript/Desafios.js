function mediaArit(){

    var res = document.getElementById("resultMed");

    function media(option) {

       var medida = 0;
        
        option.forEach(element => {
            medida += element
        })

        const calcUnity = medida / option.length;
        return calcUnity;

    } 
     res.innerHTML = "<h1>" + media([10,9,6,8,9,1,5,7]) + "</h1>";
     res.innerHTML = media([2,5,7,1,-2])
    
}


function chunks() {

    function numbersChunks() {
        var option;
        option = prompt(`Quantos CHUNKS deseja adicionar ? \n01 - CHUNKS \n02 - CHUNKS \n03 - CHUNKS \n04 - CHUNKS`);
        return option;
    } 

   const valores =  {
        name: "CHUNKS",
        name01: "CHUNKS-CHUNKS",
        name02: "CHUNKS-CHUNKS-CHUNKS",
        name04: "CHUNKS-CHUNKS-CHUNKS-CHUNKS"
   }
   

   
   var res = document.getElementById("reschunks")

   do {
    chosenOptions = numbersChunks();
    switch(chosenOptions) {
            case "1":
                var result = valores.name
                res.innerHTML = result;
                break;
            case "2":
                var result = valores.name01
                res.innerHTML = result;
                break;
            case "3":
                var result = valores.name02
                res.innerHTML = result;
                break;
            case "4":
                var result = valores.name04
                res.innerHTML = result;
                break;
    }
} while(chosenOptions != "1" && chosenOptions != "2" && chosenOptions != "3" && chosenOptions != "4")
      
}

