const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if(event.keyCode === 32){//keycode.ifo - código da tecla pressionada 32(espaço)
        console.log('Pressionou espaço');

    }
}

document.addEventListener('keyup', handleKeyUp);
