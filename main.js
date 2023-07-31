const Producto =  function(nombre, precio){
    this.nombre = nombre
    this.precio = precio
}

let productos = []
let productosCarrito = 0

function agregarProducto(productos) {
    while(true){
        nombre = prompt("Ingrese el nombre del producto")
        const repetido = productos.filter(nombreProd => nombreProd.nombre == nombre)
        if(repetido.length != 0){
            alert("Nombre de producto existente. Ingrese nuevamente")
            continue
        }
        precio = parseFloat(prompt("ingrese el precio del producto"))
        nuevoProducto = new Producto(nombre,precio)
        productos.push(nuevoProducto)
        return
    }
}

function agregarCarrito(productosCarrito,productos){
    listaProd = "Seleccione un producto: "
    for (const producto in productos) {
        listaProd += `${parseInt(producto)+1} - ${productos[producto].nombre} Precio: ${productos[producto].precio}.`
    }
    opCarrito = parseInt(prompt(listaProd))-1
    // if(opCarrito < productos.length){
    // }
    productosCarrito += productos[opCarrito].precio
    return productosCarrito
}


while(true){
    band = false
    op = parseInt(prompt(`
    1 - Ingresar producto
    2 - Agregar al carrito
    3 - Cerrar venta y mostrar resultado
    4 - Finalizar programa
    `))
    switch (op) {
        case 1:
            agregarProducto(productos)
            break;
        case 2:
            console.log('asdasd 2-1')
            productosCarrito = agregarCarrito(productosCarrito,productos)
            break;
        case 3:
            alert(`El monto a pagar es de: $ ${productosCarrito}.`)
            band = true
            break;
        case 4:
            band = true
            break;
        default:
            break;
    }
    if(band){
        break
    }
}
