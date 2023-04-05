function showCurrentYearFooter() {
//Muestra la fecha actual en el documento HTML
//Esto perfectamente podría estar suelto, pero meh.
let currentYear = new Date().getFullYear();
document.getElementById("footer").innerHTML = `<div class="container text-center">
<span class="text-light">Copyright © ${currentYear} TiendaPET® Ltda.</span>
</div>`}

showCurrentYearFooter();