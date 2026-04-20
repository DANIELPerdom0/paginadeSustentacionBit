let menuVisible = false;

function mostrarOcultarMenu() {
  let nav = document.getElementById("nav");
  if (menuVisible) {
    nav.className = "";
    menuVisible = false;
  } else {
    nav.className = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}
