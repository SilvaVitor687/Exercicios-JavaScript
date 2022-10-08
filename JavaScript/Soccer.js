function playerSoccer(){

    
        const addCamp = document.getElementById("addCamp").value;
        const addPos = document.getElementById("addPos").value;
        const addCam = document.getElementById("addCam").value;

        const validation = confirm(`Escalar o Jogador ${addCamp} como ${addPos} ?`);

        if(validation){
            var teamsList = document.getElementById('teamsList');
            var player = document.createElement('h3');            

            player.id = `JOGADOR NUMERO ${addCam}`;
            player.innerHTML = `<div id="teamsList" class="boxer1"><p>POSIÇÃO: ${addPos.toUpperCase()} <br> NOME: ${addCamp.toUpperCase()} <br> CAMISA: ${addCam}</p>
            <img class="cards" src="/img/Cards.png"></div>`;
            teamsList.appendChild(player);

            document.getElementById('addCamp').value = '';
            document.getElementById('addPos').value = '';
            document.getElementById('addCam').value = '';
        }
    }



























    
  /*  
    function namePlayer (nomeDoJogador){
        const createCamp = document.createElement("input");
        addCamp.innerHTML = '<label style="color: white"> NOME DO JOGADOR ';
        addCamp.appendChild(document.createElement('br'))
        createCamp.type = 'text';
        createCamp.name = 'fullname';
        addCamp.appendChild(createCamp);

        return nomeDoJogador
    }

    function namePos(nomeDaPosicao) {        
        const position = document.createElement("input"); 
        addPos.innerHTML = '<label style="color: white"> POSIÇÃO DO JOGADOR ';
        addPos.appendChild(document.createElement('br'))               
        position.type = 'text';
        position.name = 'fullname';
        addPos.appendChild(position)

        return nomeDaPosicao
    }

    function nameCam(numeroDaCamisa) {        
        const camisa = document.createElement("input"); 
        addCam.innerHTML = '<label style="color: white"> CAMISA DO JOGADOR ';
        addCam.appendChild(document.createElement('br'))               
        camisa.type = 'number';
        addCam.appendChild(camisa)
        return numeroDaCamisa
    }

    namePlayer(addCamp)
    namePos(addPos)
    nameCam(addCam) 

        
      

} */ 

