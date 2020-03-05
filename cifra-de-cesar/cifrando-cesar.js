
/* ------ Normal ------
0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
*/

/*------ ASC || ---------
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90
A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
*/

let textoParaCifrar = "ricardo carvalho".trim(); // aqui vai a String a ser criptografada (letras de A/z sem acentos e podendo ser maiuscula e minuscula)(método trim() usado para tirar espaços no começo e fim da string); )
let rotation = 0; // aqui define a rotação da cifra (números entre 1/25 * (se lançar o 26 ou 0, não tem rotação))
let cifra = textoParaCifrar.toUpperCase(); // pegando o texto para ser cifrado e jogando dentro de uma váriavel com todas as letras maiúsculas
let textoCifrado = []; // declarando um array que irá receber o texto cifrado
tamanho = cifra.length; // pegando a própriedade lenght da String (lenght = comprimento);

for (let i = 0; i < tamanho; i++) { // fazendo o loop que percorra cada letra da strign passada
    let codigoNormal = cifra[i].charCodeAt() - 65; // "Mudando o código de cada letra, afim de tornar a abstração mais facil"
    let cod = (codigoNormal + rotation)%26 // formula pra rotacionar o código da letra e salvar em outra variavel o novo codigo.

    cifrando(cod, i); // chamando a função cifrando (passando dois parametros, o código no e o valor de i que representa a posição que de I no vetor).
}
console.log(textoCifrado.join('').toLowerCase()); // retornando o texto cifrado

function cifrando(cod, i){ // função que recebe o codigo da letra e substitui por uma letra nova
    switch (cod) { //verifica o valor do código passado (entre 0/25) e substitui de acordo com o valor do codigo
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
