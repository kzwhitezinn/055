const palavras = ["Habilidoso", "Criativo", "Dedicado", "Apaixonado por Código"];
let i = 0;
let j = 0;
let apagando = false;
const textoDinamico = document.getElementById("texto-dinamico");

function digitar() {
    if (!apagando && j < palavras[i].length) {
        textoDinamico.innerHTML += palavras[i][j];
        j++;
        setTimeout(digitar, 100);
    } else if (apagando && j > 0) {
        textoDinamico.innerHTML = palavras[i].substring(0, j - 1);
        j--;
        setTimeout(digitar, 50);
    } else {
        apagando = !apagando;
        if (!apagando) {
            i = (i + 1) % palavras.length;
        }
        setTimeout(digitar, 1000);
    }
}

digitar();
