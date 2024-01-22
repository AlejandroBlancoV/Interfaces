
import { ampliarTexto, restablecerTexto } from './script.js';


document.addEventListener("DOMContentLoaded", function() {
    const otrosElementos = document.querySelectorAll('.btn');
    otrosElementos.forEach(function(elemento) {
        elemento.addEventListener("mouseover", ampliarTexto);
        elemento.addEventListener("mouseout", restablecerTexto);
    });
});
