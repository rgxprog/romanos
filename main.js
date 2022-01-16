
const input = document.querySelector('#inputNumero');
let labelRomano = document.querySelector('#labelRomano');

//-----------------------------------------------

input.value = Math.floor(Math.random() * 3999) + 1;
labelRomano.innerHTML = enteroARomano(input.value);

input.addEventListener('keyup', aRomano);

//-----------------------------------------------

function aRomano(e)
{
    if (Number.isInteger(e.target.value * 1))
        if (e.target.value >= MIN_VALUE && e.target.value <= MAX_VALUE)
        {
            labelRomano.innerHTML = enteroARomano(e.target.value);
            return;
        }
    
    labelRomano.innerHTML = "[ - ]"
}