const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const carrito = [...cartItems];
const contenedorTarjetas = document.getElementById('cartContainer');
const botonVaciadoCarro = document.getElementById('killCarroStorage');
const botonPagar=document.getElementById('buttonCheckoOut');
const productQuantities = {};
//Loopeo una vez para contar las repeticiones

carrito.forEach((producto) => {
  const productId = producto.id;
  if (productId in productQuantities) {
    productQuantities[productId] += 1;
  } else {
    productQuantities[productId] = 1;
  }
});

//Bandera para saber si vamos a repetir el mismo id o no.
let flag='0';
//Y una vez más para poblar el html
if (carrito.length !=0) {
carrito.forEach((producto) => {
  const productId = producto.id;
  const quantity = productQuantities[productId];  
  const tarjeta = document.createElement('div');
    tarjeta.classList.add('card', 'rounded-3', 'mb-4'); 
    tarjeta.innerHTML = `<div class="card-body p-4">
    <div class="row d-flex justify-content-between align-items-center">
      <div class="col-md-2 col-lg-2 col-xl-2">
        <img
          src=${producto.imagen}
          class="img-fluid rounded-3" alt="${producto.nombre}">
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3">
        <p class="lead fw-normal mb-2">${producto.nombre}</p>
      </div>
      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button class="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
          <i class="fas fa-minus"></i>
        </button>

        <input id=${productId} min="0" name="quantity" value=${quantity} type="number"
          class="form-control form-control-sm" />

        <button class="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h5 class="mb-0">$${producto.precio}</h5>
      </div>
      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" id="deleteItem" no="${productId}" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
      </div>
    </div>
  </div>`;
  if(flag !== producto.id) {
  contenedorTarjetas.appendChild(tarjeta);
  }
  flag = producto.id;
});
} else {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('card', 'rounded-3', 'mb-4');
  tarjeta.innerHTML = `<h1 class='py-1 text-centered'>No hay elementos en su carrito de compras</h1>`
  contenedorTarjetas.appendChild(tarjeta);
};

botonVaciadoCarro.addEventListener('click', () => {
    window.localStorage.clear('cartItems');
    window.location.href='index.html';
});

botonPagar.addEventListener('click', () => {
  window.location.href='checkout.html';
});

const botonBorraItem = document.get('fa-trash');

botonBorraItem.addEventListener('click', () => {
  console.log(botonBorraItem.id);
});