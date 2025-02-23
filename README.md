# 🏥 Función `encontrarCitaMasCercana`

Esta función busca la cita más cercana en una lista de fechas dadas, utilizando una búsqueda binaria para optimizar el proceso.

## 📌 Descripción
Dado un array ordenado de fechas (`citas`) y una fecha de referencia (`fechaPaciente`), la función encuentra la fecha más cercana a la proporcionada por el paciente. 

Si hay una coincidencia exacta, se devuelve esa fecha. En caso contrario, se elige la fecha más próxima (anterior o posterior).

## 🖥️ Código

```javascript
function encontrarCitaMasCercana(citas, fechaPaciente) {
    if (citas.length === 0) return null; // Si la lista está vacía, retornamos null.

    let fechaPacienteMs = Date.parse(fechaPaciente); // Convertimos la fecha del paciente a milisegundos
    let inicio = 0;
    let fin = citas.length - 1;
    let citaMasCercana = citas[0];

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        let fechaMedioMs = Date.parse(citas[medio]);

        // Si encontramos la fecha exacta, la retornamos
        if (fechaMedioMs === fechaPacienteMs) {
            return citas[medio];
        }

        // Si la fecha en medio es menor, movemos el inicio a la derecha
        if (fechaMedioMs < fechaPacienteMs) {
            citaMasCercana = citas[medio]; // Guardamos la mejor opción hasta ahora
            inicio = medio + 1;
        } 
        // Si la fecha en medio es mayor, movemos el fin a la izquierda
        else {
            fin = medio - 1;
        }
    }

    // Si hay una cita posterior, la comparamos con la anterior para ver cuál está más cerca
    if (inicio < citas.length) {
        let fechaInicioMs = Date.parse(citas[inicio]);
        if (Math.abs(fechaInicioMs - fechaPacienteMs) < Math.abs(Date.parse(citaMasCercana) - fechaPacienteMs)) {
            citaMasCercana = citas[inicio];
        }
    }

    return citaMasCercana;
}



# 🔢 Función `compararElementos`

Esta función compara los elementos consecutivos de un array y determina si el siguiente es mayor, menor o igual al anterior.

## 📌 Descripción

Dado un array de números, la función `compararElementos` recorre la lista desde el segundo elemento hasta el final y compara cada valor con el anterior. Luego, imprime el resultado de la comparación en la consola.

## 🖥️ Código

```javascript
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

// 🔢 Ejemplo de uso
let numeros = [10, 20, 15, 25, 30, 30, 18];
compararElementos(numeros);
