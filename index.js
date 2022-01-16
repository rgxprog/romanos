
// Conversión a números romanos
// [1 .. 3,999]

//-----------------------------------------------

const MIN_VALUE = 1;
const MAX_VALUE = 3999;

//-----------------------------------------------

function enteroARomano(entero)
{
    // Números romanos
    let r = ["I", "V", "X", "L", "C", "D", "M"];

    // Verificar rango de números que pueden ser convertidos
    if (entero < MIN_VALUE || entero > MAX_VALUE) {
        alert("El rango es entre 1 y 3,999");
        return;
    }

    // Reducir número: unidades de millar, centenas, decenas y unidades
    let unidades = [1000, 100, 10, 1];
    let romano = "";
    let decimal = entero;
    let rsegm = 6;
    for (let u of unidades) {
        let actual = Math.trunc(decimal / u);

        if (actual <= 3) {
            for (let i=0; i<actual; i++) romano += r[rsegm];
        } else if (actual == 4) {
            romano += r[rsegm] + r[rsegm + 1];
        } else if (actual <= 8) {
            romano += r[rsegm + 1];
            for (let i=0; i<actual-5; i++) romano += r[rsegm];
        } else { // actual == 9
            romano += r[rsegm] + r[rsegm + 2];
        }
        
        rsegm -= 2;
        decimal -= actual * u;
    }

    console.log(`Decimal: ${entero} - Romano: ${romano}`);
    return romano;
}

