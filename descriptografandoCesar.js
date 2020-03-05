


let decifrar = "abcd".trim();
let textoCifrado = [];

for (let j = 1; j < 26; j++) {
    let rotation = j;
    let cifra = decifrar.toUpperCase();
    tamanho = cifra.length;

    for (let i = 0; i < tamanho; i++) {
        let codigoNormal = cifra[i].charCodeAt() - 65;
        let cod = (codigoNormal + rotation)%26

        let troca = cifrando(cod, i);
    }
console.log(textoCifrado.join('').toLowerCase());
}

function cifrando(cod, i){
    switch (cod) {
        case 0:
            textoCifrado[i] = "A";
            break;
        case 1:
            textoCifrado[i] = "B";
            break;
        case 2:
            textoCifrado[i] = "C";
            break;
        case 3:
            textoCifrado[i] = "D";
            break;
        case 4:
            textoCifrado[i] = "E";
            break;
        case 5:
            textoCifrado[i] = "F";
            break;
        case 6:
            textoCifrado[i] = "G";
            break;
        case 7:
            textoCifrado[i] = "H";
            break;
        case 8:
            textoCifrado[i] = "I";
            break;
        case 9:
            textoCifrado[i] = "J";
            break;
        case 10:
            textoCifrado[i] = "K";
            break;
        case 11:
            textoCifrado[i] = "L";
            break;
        case 12:
            textoCifrado[i] = "M";
            break;
        case 13:
            textoCifrado[i] = "N";
            break;
        case 14:
            textoCifrado[i] = "O";
            break;
        case 15:
            textoCifrado[i] = "P";
            break;
        case 16:
            textoCifrado[i] = "Q";
            break;
        case 17:
            textoCifrado[i] = "R";
            break;
        case 18:
            textoCifrado[i] = "S";
            break;
        case 19:
            textoCifrado[i] = "T";
            break;
        case 20:
            textoCifrado[i] = "U";
            break;
        case 21:
            textoCifrado[i] = "V";
            break;
        case 22:
            textoCifrado[i] = "W";
            break;
        case 23:
            textoCifrado[i] = "Y";
            break;
        case 24:
            textoCifrado[i] = "X";
            break;
        case 25:
            textoCifrado[i] = "Z";
            break;
        default:
            textoCifrado[i] = " ";
    }
}