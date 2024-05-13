// Función para generar un número aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  // Función para obtener la conjetura del usuario
  function obtenerConjetura() {
    const conjetura = parseInt(prompt("Adivina un número entre 1 y 10"));
    return conjetura;
  }
  
  // Función para comprobar si la conjetura es correcta
  function comprobarConjetura(numeroAleatorio, conjetura) {
    if (conjetura === numeroAleatorio) {
      return "Correcto!";
    } else if (conjetura < numeroAleatorio) {
      return "más alto!";
    } else {
      return "más bajo!";
    }
  }
  
  // Función para iniciar el juego
  function iniciarJuego() {
    const numeroAleatorio = generarNumeroAleatorio();
    let conjetura;
    let resultado;
    let conjeturas = []; // Array para almacenar las conjeturas del usuario
    let correctas = []; // Array para almacenar las conjeturas correctas
  
    do {
      conjetura = obtenerConjetura();
      resultado = comprobarConjetura(numeroAleatorio, conjetura);
      conjeturas.push(conjetura); // Agregar la conjetura al array
  
      if (conjetura === numeroAleatorio) {
        correctas.push(conjetura); // Agregar la conjetura correcta al array
      }
  
      alert(`Tus conjeturas hasta ahora: ${conjeturas.join(", ")}. ${resultado}`);
    } while (conjetura !== numeroAleatorio);
  
    // Preguntar si el usuario quiere volver a jugar
    const volverAJugar = confirm("Querés volver a jugar?");
  
    if (volverAJugar) {
      iniciarJuego();
    } else {
      alert(`Gracias por jugar! Tus conjeturas correctas: ${correctas.join(", ")}.`);
    }
  }
  
  // Iniciar el juego
  iniciarJuego();