function validar() {
  var valoruno = document.getElementById("nombre").value;
  var valordos = document.getElementById("mail").value;
  var valortres = document.getElementById("mensaje").value;

  if (valoruno == null || valoruno.length == 0) {
    document.getElementById("msjvalidacion1").innerHTML =
      "Por favor complete el nombre";
    document.getElementById("nombre").focus();
    return false;
  } else if (valordos == null || valordos.length == 0) {
    document.getElementById("msjvalidacion2").innerHTML =
      "Por favor complete el e-mail";
    document.getElementById("mail").focus();
    return false;
  } else if (valortres == null || valortres.length == 0) {
    document.getElementById("msjvalidacion3").innerHTML =
      "Por favor complete el mensaje";
    document.getElementById("mensaje").focus();
    return false;
  } else {
    return true;
  }
}
