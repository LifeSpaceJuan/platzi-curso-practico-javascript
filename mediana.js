function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;  
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

let mediana;

function calcularMediana(lista) {
    const mitadLista1 = parseInt(lista1.length / 2);
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    if (esPar(lista1.length)) {

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        return mediana = promedioElemento1y2;    
    }else
    {
        return mediana = lista1[mitadLista1];
    }
}

function ordenarElementos(lista) {    
    
    let aux = 0;
    for (let i = 0; i < lista.length-1; i++) {
        for (let j = (i+1); j < lista.length; j++) {
            if (lista[i] > lista[j]) {
                aux = lista[j];
                lista[j] = lista[i];
                lista[i] = aux;
            }            
        }
        
    }
    return lista;
}

const lista1 = [
    200,
    500,
    930,
    120,
    4000,
    50,
];

