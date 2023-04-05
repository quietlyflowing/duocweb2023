const carrito = [];

function indicadorCarro(){
    const number = carrito.length; 
    document.getElementById('indicadorCarrito').innerHTML = ` <span>
    <p class="mt-2 ms-2"><strong>Carrito: ${number}</strong> </p>
    </span>
    <i class="fas fa-shopping-cart ms-2 mb-0"></i>`;
    
}

indicadorCarro();

const buttonsAdd = Array.from(document.getElementsByClassName('btn-primary'));
const buttonsVer = Array.from(document.getElementsByClassName('btn-secondary'));

buttonsAdd.forEach(button => {
    button.addEventListener("click", () => { // Add a click event listener to each button
      const prodAdd = productosTienda.find(prod => prod.id === button.id); // Store the button's ID in the array when it's clicked
      carrito.push(prodAdd);
      indicadorCarro();  
    });
  });

 buttonsVer.forEach(button => {
    button.addEventListener('click', () => {
    const newUrl = `verProducto.html?id=${button.id}`; // the URL of the new page with the id value appended
    window.location.href = newUrl; // set the URL of the new page
     })
 })

