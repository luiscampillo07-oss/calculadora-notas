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
}
window.onload = calcularMedia;
