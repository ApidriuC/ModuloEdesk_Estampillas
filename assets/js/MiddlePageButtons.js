
function Desplegar() {

    if ((document.getElementById("desplegar").style.display) != "block") {
        openButton();

    }
    else {

        closeButton();

    }

}

function openButton() {
    document.getElementById("desplegar").style.display = "block";
}
function closeButton() {    
    document.getElementById("desplegar").style.display = "none";
}