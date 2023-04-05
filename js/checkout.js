const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const carrito = [...cartItems];
const checkoutTable = document.getElementById('rowToInsert');
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
  const table = document.createElement('table'); 
    table.innerHTML = `
  <tr>
    <td><img src=${producto.imagen} width="70" height="70" class="rounded" alt="${producto.nombre}">
    </td>
    <td>${producto.name}</td>
    <td>${producto.nombre}</td>
  </tr>`;
  if(flag !== producto.id) {
  table.append(table);
  }
  flag = producto.id;
});
} else {
  const table = document.createElement('tr');
  tarjeta.innerHTML = `<h1 class='py-1 text-centered'>No hay elementos en su carrito de compras</h1>`
  contenedorTarjetas.appendChild(table);
};

