const a = Number(prompt('press a'));
const b = Number(prompt('press b'));
const c = Number(prompt('press c'));
const res = quadr(a, b, c);
console.log(res);

function quadr(a, b, c) {
    const D = deskrim(a, b, c);

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return 'x1 = ' + x1 + '   x2 = ' + x2;
    }
    else if (D === 0) {
        let x1 = (-b) / (2 * a);
        return 'x = ' + x1;

    }
    else if (D < 0) {
        alert('cant calculate D,cause D<0');
    }
}

function deskrim(a, b, c) {
    return b * b - 4 * a * c;
}
