const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const carrito = [...cartItems];

function indicadorCarro(){
    const number = carrito.length; 
    document.getElementById('indicadorCarrito').innerHTML = `<span>
    <a href="cartView.html"><p class="mt-2 ms-2"><strong>Carrito: ${number}</strong> </p></a>
    </span>
    <i class="fas fa-shopping-cart ms-2 mb-0"></i>`;
    
}

indicadorCarro();

const buttonsAdd = Array.from(document.getElementsByClassName('btn-primary'));
const buttonsVer = Array.from(document.getElementsByClassName('btn-secondary'));
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}



buttonsAdd.forEach(button => {
  button.addEventListener("click", () => { 
    const prodAdd = productosTienda.find(prod => prod.id === button.id); 
    carrito.push(prodAdd);
    localStorage.setItem('cartItems', JSON.stringify(carrito)); 
    alert('Se ha agregado un producto a su carro!', 'success');
    indicadorCarro();  
  });
});

 buttonsVer.forEach(button => {
    button.addEventListener('click', () => {
    const newUrl = `verProducto.html?id=${button.id}`; 
    window.location.href = newUrl; 
     })
 })

