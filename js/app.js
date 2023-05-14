function validar() {
  valorUno = document.getElementById("nombre").value;
  valorDos = document.getElementById("mail").value;
  valorTres = document.getElementById("mensaje").value;

  if (valorUno == null || valorUno.length == 0) {
    document.getElementsById("msj").innerHTML = "Por favor complete el nombre";
    elemento = document.getElementById("nombre");
    elemento.focus();
    return false;
  } else if (valorDos == null || valorDos.length == 0) {
    document.getElementsById("msj").innerHTML = "Por favor complete el e-mail";
    elemento = document.getElementById("mail");
    elemento.focus();
    return false;
  } else if (valorTres == null || valorTres.length == 0) {
    document.getElementsById("msj").innerHTML = "Por favor complete el mensaje";
    elemento = document.getElementById("mensaje");
    elemento.focus();
    return false;
  }
  return true;
}
