import {Torch} from './torch.js';

const log = document.querySelector('.log');

const btn = document.querySelector('.switch');
btn.addEventListener('click', function() {
    window.console.log = (msg) => {
        log.innerHTML += (typeof(msg) === 'object' ? JSON.stringify(msg) : msg) + '<br>';
    }
    console.log('clicked');
    if (Torch.isOff()) {
        // Torch.turnOn();
        Torch.lightSeq([
            [0, 1],
            [3, 2],
            [7, 1],
        ])
    } else {
        Torch.turnOff();
    }

});
