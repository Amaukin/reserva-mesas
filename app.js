function overlay(nMesa) {
    const body = document.querySelector('body');
    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');

    if(nMesa !== 0){
        const textBoxSuccess = document.createElement('DIV');
        textBoxSuccess.innerHTML = `<div>Felicidades, ha reservado una mesa. <br> Su número de mesa es: ${nMesa}.</div>`;
        const success = document.createElement('DIV');
        success.classList.add('textBox-container');
        success.innerHTML = `<div class="success-checkmark">
        <div class="check-icon">
        <span class="icon-line line-tip"></span>
        <span class="icon-line line-long"></span>
        <div class="icon-circle"></div>
        <div class="icon-fix"></div>
        </div>
        </div>`;
        success.appendChild(textBoxSuccess);
        overlay.appendChild(success);
    } else {
        const textBoxError = document.createElement('DIV');
        textBoxError.innerHTML = `Lo sentimos, no quedan mesas disponibles.`;
        const error = document.createElement('DIV');
        error.classList.add('textBox-container');
        error.innerHTML = `<div class="error-banmark">
        <div class="ban-icon">
        <span class="icon-line line-long-invert"></span>
        <span class="icon-line line-long"></span>
        <div class="icon-circle"></div>
        <div class="icon-fix"></div>
        </div>
        </div>`;
        error.appendChild(textBoxError);
        overlay.appendChild(error);
    }

    //Cuando se da click, cerrar imagen
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove('fixed');
    }
    //Mostrar en el HTML
    
    body.appendChild(overlay);
    body.classList.add('fixed');
}


document.addEventListener('DOMContentLoaded',() => {
    const button = document.getElementById('button')
    button.addEventListener('click', (e)=> {
        e.preventDefault();
        overlay(Math.floor(Math.random() * 17));
    });
});