function validar() {
  var valoruno = document.getElementById("nombre").value;
  var valordos = document.getElementById("mail").value;
  var valortres = document.getElementById("mensaje").value;

  if (valoruno == null || valoruno.length == 0) {
    document.getElementsById("msjvalidacion1").innerHTML =
      "Por favor complete el nombre";
    elemento = document.getElementById("nombre").value;
    elemento.focus();
    return false;
  } else if (valordos == null || valordos.length == 0) {
    document.getElementsById("msjvalidacion2").innerHTML =
      "Por favor complete el e-mail";
    elemento = document.getElementById("mail").value;
    elemento.focus();
    return false;
  } else if (valortres == null || valortres.length == 0) {
    document.getElementsById("msjvalidacion3").innerHTML =
      "Por favor complete el mensaje";
    elemento = document.getElementById("mensaje").value;
    elemento.focus();
    return false;
  } else {
    return true;
  }
}
