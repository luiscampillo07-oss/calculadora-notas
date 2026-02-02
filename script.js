console.log("Calculadora de Notas cargada");
function calcularMedia() {
  let nota1 = parseFloat(prompt("Nota 1:"));
  let nota2 = parseFloat(prompt("Nota 2:"));
  let nota3 = parseFloat(prompt("Nota 3:"));

  let media = (nota1 + nota2 + nota3) / 3;

  alert("Tu media es: " + media.toFixed(2));

  if (media >= 5) {
    alert("¡Aprobado!");
  } else {
    alert("Suspenso");
  }
  function calcularMedia() {
    let notas = [];
    for (let i = 1; i <= 4; i++) {
      let nota = parseFloat(prompt("Nota " + i + ":"));
      if (!isNaN(nota)) {
        notas.push(nota);
      }
    }

    if (notas.length === 0) {
      alert("No has introducido notas");
      return;
    }

    let suma = notas.reduce((a, b) => a + b, 0);
    let media = suma / notas.length;

    alert("Tienes " + notas.length + " notas. Media: " + media.toFixed(2));
  }
}
window.onload = calcularMedia;
