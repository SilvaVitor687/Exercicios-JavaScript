function countFor(){

    var countInitial = document.getElementById("countInitial");
    var countEnd = document.getElementById("countEnd"); 
    var countPass = document.getElementById("countPass");
    

    let exec = document.getElementById("exec");

    if(countInitial.value.length == ""
       || countEnd.value.length == 0
       || countPass.value.length == 0 ) {

        alert(`[ERRO] Faltam dados, favor verificar os campos.`)
    } else {

        exec.innerHTML = `<p>Contando... <br></p>`;
        var valueInit = Number(countInitial.value);
        let valueEnd = Number(countEnd.value);
        let valuePass = Number(countPass.value);

        for(let a = valueInit;a <= valueEnd; a+= valuePass) {
        
            exec.innerHTML += `Passo: ${a} <br>`;
        }
    }

}

function countTab () {

    let mutiply = document.getElementById("multiply");
    let valueMultiply = Number(mutiply.value);
    let selectTab = document.getElementById("selectTab");

    if(mutiply.value.length == 0){
        alert(`[ERRO] Faltam dados, favor verificar os campo.`)
        } else {

            selectTab.innerHTML = '';//Limpar a tabuada a cada calculo;
           for(let num = 1; num <= 10; num++ ){
               let item = document.createElement('option');
               item.text = `${valueMultiply} x ${num} = ${num*valueMultiply}`;
               selectTab.appendChild(item);
                
           }

        }
}