//Códig Cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado) 
{
    return lado * 4;
}

function areaCuadrado(lado) 
{
    return lado * lado;
}

console.groupEnd(); 

//Código triángulo
// console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + " cm, " + ladoTriangulo2 
//     + " cm, " 
//     + baseTriangulo 
//     + " cm."
// );

// console.log("La altura del triángulo es: " + alturaTriangulo + " cm");



function perimetroTriangulo(lado1, lado2, base)
{
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura)
{
    return (base * altura)/2;
}
console.groupEnd();

//Código circulo
console.group("Círculo");
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm");
function diametroCirculo(radio)
{
    return radio * 2;
}

const PI = Math.PI;
console.log("El PI es: " + PI);

function perimetroCirculo(radio)
{
    return diametroCirculo(radio) * PI;
}


function areaCirculo(radio)
{
    return (radio * radio) * PI;
}

console.groupEnd();

function alturaIsoceles(lado1, lado2, base) {
    if (lado1 === lado2) {
        const result = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base,2)/4));
        return result;
    }else {
        alert("No es un triángulo Isóceles");
    }
}

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo()
{
    const input = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");

    const value = Number(input.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);


    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const input = document.getElementById("InputTriangulo4");
    const input2 = document.getElementById("InputTriangulo3");

    const value = Number(input.value);
    const value2 = Number(input2.value);


    const area = areaTriangulo(value, value2);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularAlturaIsosceles() {
    const input = document.getElementById("InputIsosceles");
    const value = Number(input.value);
    const input2 = document.getElementById("InputIsosceles2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputIsosceles3");
    const value3 = Number(input3.value);

    const altura = alturaIsoceles(value, value2, value3);
    alert(altura);
}