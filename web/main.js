function toggleMenu() {
    let menuList = document.getElementById("menuList");
    let logoContainer = document.querySelector(".logo-container");
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
        logoContainer.style.display = "block"; // Mostrar el contenedor del logo
    } else {
        menuList.style.maxHeight = "0px";
        logoContainer.style.display = "none"; // Ocultar el contenedor del logo
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let menuList = document.getElementById("menuList");
    menuList.style.maxHeight = "0px";

    // Cierra el menú cuando se toca fuera de él
    document.addEventListener("click", function(event) {
        if (!menuList.contains(event.target) && !document.querySelector(".menu-icon").contains(event.target)) {
            menuList.style.maxHeight = "0px";
        }
    });
});