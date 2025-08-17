const Alumno = require('./Alumno.js');

const a1 = new Alumno('Rosario', 'Burs', 25, 'DPW');

const carrera = a1.obtenerCarrera();
console.log(carrera);

const datos = a1.obtenerDatos();
console.log(datos);

a1.modificarEdad(26);

a1.agregarMateria('Aplicaciones Híbridas');
a1.agregarMateria('IoT');

const materias = a1.mostrarMaterias();
console.table(materias);

const edad = a1.retornarEdad();
console.log(edad);
