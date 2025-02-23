function compararElementos(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            console.log(`${array[i]} es mayor que ${array[i - 1]}`);
        } else if (array[i] < array[i - 1]) {
            console.log(`${array[i]} es menor que ${array[i - 1]}`);
        } else {
            console.log(`${array[i]} es igual a ${array[i - 1]}`);
        }
    }
}


let numeros = [10, 20, 15, 25, 30, 30, 18];
compararElementos(numeros);
