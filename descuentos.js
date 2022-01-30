const precioOriginal = 125;
const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioPrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioPrecioConDescuento; 
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioPrecioConDescuento,
// });

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}