
export function ampliarTexto(event) {
    event.target.style.fontSize = "1.5em"; 
}


export function restablecerTexto(event) {
    event.target.style.fontSize = ""; 
}


document.addEventListener("DOMContentLoaded", function() {
    
    const elementosNavbar = document.querySelectorAll('.nav-link');

   
    elementosNavbar.forEach(function(elemento) {
        elemento.addEventListener("mouseover", ampliarTexto);
        elemento.addEventListener("mouseout", restablecerTexto);
    });
});
