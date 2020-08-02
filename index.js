import {Torch} from './torch.js';

const btn = document.querySelector('.switch');
btn.addEventListener('click', function() {
    console.log('clicked');
    if (Torch.isOff) {
        Torch.turnOn();
    } else {
        Torch.turnOff();
    }

});
