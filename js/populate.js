const queryParams = new URLSearchParams(window.location.search);
const idExt = queryParams.get('id');
function populate(id) {
    const produto = productosTienda.find(prod => prod.id === id);
    document.getElementById('vistaProductoLink').innerHTML = `
    <div class="row bg-light py-3">
    <div class="col-6 justify-content-center">
        <img src=${produto.imagen} class="img-fluid">
    </div>
    <div class="col-6 justify-content-center">
        <h1><span>${produto.nombre}</span></h1>
        <div><p>Lorem ipsum dolor sit amen </p></div>
        <button id=${produto.id} class="btn btn-primary">Agregar al Carro</button>
    </div>
    `
}
populate(idExt);

