/**
 * Simulador operadores Lógicos AND - OR - NOT
 * @Autor Luis Gustavo Rodrigues Da Silva
 */

let recive // armazena o valor recebido do html da função
// as variaveis abaixo são usadas para identificar se o interruptor esta ligado ou desligado
let sw1 = false
let sw2 = false
// a variavel abaixo é usada para identificar quando a lampada esta quebrada ou não
let broken = false

function sw(recive) {
    // apoio a logica

    if (recive === 1 && sw1 === false) {
        document.getElementById("sw1").src = "img/swon.png"
        sw1 = true
    } else if(recive === 1 && sw1 === true) {
        document.getElementById("sw1").src = "img/swoff.png"
        sw1 = false
    } else  if (recive === 2 && sw2 === false) {
        document.getElementById("sw2").src = "img/swon.png"
        sw2 = true
    } else if(recive === 2 && sw2 === true) {
        document.getElementById("sw2").src = "img/swoff.png"
        sw2 = false
    }

    //logica para quebrar a lampada
    if (recive == 3) {
        // A linha abaixo cria um objeto usando a classe audio
        let som = new Audio()
        console.log(typeof(som))
        som.src = "sound/glassbreaking.wav"
        som.play()
        // trocar a imagem
        document.getElementById("lamp").src = "img/broken.jpg" 
        broken = true
    }   

    //logica para operador AND
    if (broken !== true){
        if (sw1 === true && sw2 === true) {
            document.getElementById("lamp").src = "img/on.jpg"
        } else if (sw1 === true && sw2 === false) {
            document.getElementById("lamp").src = "img/off.jpg"
        } else if (sw1 === false && sw2 === true) {
            document.getElementById("lamp").src = "img/off.jpg"
        } else if (sw2 === true && sw1 === false) {
            document.getElementById("lamp").src = "img/off.jpg"
        } else if (sw2 === false && sw1 === true) {
            document.getElementById("lamp").src = "img/off.jpg"
        }
    }
}