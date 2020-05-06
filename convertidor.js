function convertidor(){
    var montoCop = document.getElementById("montoCop").value
    var cambioVes = document.getElementById("cambioVes").value
    var cambioUsd = document.getElementById("cambioUsd").value

    resultado = montoCop * cambioVes

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = resultadoUsd;
}