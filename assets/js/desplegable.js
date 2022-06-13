function Nav() {

    if ((document.getElementById("mySidenav").style.right) == 0 | (document.getElementById("mySidenav").style.right) == "-295px") {
        openNav();

    }
    else {
        closeNav();

    }

}

function openNav() {

    document.getElementById("mySidenav").style.right = "0px";
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("contentMiddle").style.right = "295px";

}
function closeNav() {
    document.getElementById("mySidenav").style.right = "-295px";
    document.getElementById("mySidenav").style.visibility = "hidden";
    document.getElementById("contentMiddle").style.right = "0px";


}   