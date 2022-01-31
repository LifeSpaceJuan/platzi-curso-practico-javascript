const lista1 = [
    1,
    1,
    4,
    6,
    7,
    4,
    5,
    5,
    4,
    1,
    2,
    2,
    8,
];

const lista2 = [
    3,
    2,
    4,
    6,
]

const lista1Count = {};

function calcularModa(lista) {
    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );
    
    const lista1Array2 = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array2[lista1Array2.length-1];
    return moda;    
}

function calcularPromedioGeometrico(lista) {
    let result = 1;
    for (let i = 0; i < lista.length; i++) {
        result *= lista[i];        
    }
    return Math.pow(result, (1/lista.length));
}
