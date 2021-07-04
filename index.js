
// Conversión a números romanos
// [1 .. 3,999]

/*******************/
// Número a convertir
let d = 3888;
/*******************/

// Números romanos
let r = ["I", "V", "X", "L", "C", "D", "M"];

// Verificar rango de números que pueden ser convertidos
if (d < 0 || d > 3999) {
    console.log("El rango es entre 0 y 3,999");
    return;
}

// Reducir número: unidades de millar, centenas, decenas y unidades
let unidades = [1000, 100, 10, 1];
let romano = "";
let decimal = d;
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

console.log(`Decimal: ${d} - Romano: ${romano}`);