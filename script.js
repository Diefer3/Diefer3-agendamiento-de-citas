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
        }a

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

// 📅 **Ejemplo de uso:**
let citas = ["2024-02-01", "2024-02-10", "2024-02-15", "2024-02-20", "2024-02-25"];
let fechaPaciente = "2024-02-12";

console.log(encontrarCitaMasCercana(citas, fechaPaciente)); 