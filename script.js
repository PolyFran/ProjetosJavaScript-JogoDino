const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;//posição inicial do dino.

//Verifica se a tecla espaço foi pressionada.
function handleKeyUp(event) {
    if(event.keyCode === 32){//keycode.ifo - código da tecla pressionada 32(espaço).
        //verifica se está pulando
        if(!isJumping) {
            jump();
            //console.log('Pressionou espaço');

        }
    }
}

//função responsável pelo pulo do dino
function jump() {
    isJumping = true;

    let upInteval = setInterval(() => { //animação (movimentação para cima) + função para setar intervalos.
        if(position >= 150) {
            clearInterval(upInteval);
        
            //descendo
            let downInterval = setInterval(() => {//animação (movimentação para baico) + função para setar intervalos.
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else{
                    position -= 20;
                    dino.style.bottom = position + 'px';//propriedade bottom recebe a string px.
                }
            }, 20); // desce a cada 20 milisegundos.
        }else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';//propriedade bottom recebe a string px.
        }
    }, 20);// sobe a cada 20 milisegundos
}
//função que gera os cactus
function createCactus() {
    const cactus = document.createElement('div');//gera novos HTMLs.
    let cactusPosition = 1500;//posição na esquerda
    let randomTime = Math.random() * 6000;//novo cactus aleatório

    cactus.classList.add('cactus');//adiciona uma classe cactus para adicionar aparencia ao cactus.
    cactus.style.left = 1500 + 'px';
    background.appendChild(cactus);//adicionar um filho

    let leftInterval = setInterval(() => {
        //quando sai da tela tem que desaparecer
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0  && cactusPosition < 60 && position < 60) {//maior que 0 e menor que 60 (60px).
            //Game Over
            clearInterval (leftInterval);//parar de ir para esquerda quando entrar em contato com o dino.
            document.body.innerHTML = '<h1 class = "game-over">Fim de Jogo</h1>';

        } else { 
            cactusPosition -= 10;//velocidade que se move para esquerda
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);
