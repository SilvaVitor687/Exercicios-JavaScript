let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration;
    }
}


function registerSpaceship() {

    spaceship.name = prompt(`Informe o nome da Nave`);
    spaceship.type = prompt(`Informe o tipo da Nave`);
    spaceship.maxVelocity = Number(prompt(`Informe a  velocidade maxima da nave (km/s)`));
}

function acelerate() {
    let resultObjet = document.getElementById("result");
    let acceleration = Number(prompt(`Quanto você quer acelerar ? (km/s)`));
    spaceship.speedUp(acceleration);

    if(spaceship.velocity > spaceship.maxVelocity) {

        resultObjet.innerHTML = `<p>VELOCIDADE MÁXIMA ULTRAPASSADA. 
                                 Velocidade atual: ${spaceship.velocity} km/s <br>
                                 Velocidade máxima da nave: ${spaceship.maxVelocity} km/s </p>`;
    }
}

function stop() {
    alert(`Nome: ${spaceship.name} <br>
           Velocidade da nave: ${spaceship.velocity}<br>
           Velocidade máxima da nave: ${spaceship.maxVelocity}</p>`);
    spaceship.velocity = 0;
}

function showMenu() {

    let chosenOption;
    do {
        chosenOption = prompt(`Você deseja: \n1 - Acelerar \n2 - Parar`);
        switch(chosenOption) { 
            case "1":
            acelerate();
            break;
            case "2":
                stop();
                break;
            default:
                alert("Opção inválida")
        }
    } while (chosenOption != "2");
}

registerSpaceship();
showMenu();