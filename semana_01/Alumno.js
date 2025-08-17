class Alumno {
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [];

    constructor(nombre, apellido, edad, carrera, materias=[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;
    }

    obtenerCarrera() {
        return `Carrera: ${this.carrera}`;
    }

    obtenerDatos() {
        return `Nombre completo: ${this.nombre + ' ' + this.apellido}`;
    }

    modificarEdad(edadActual) {
        this.edad = edadActual;
    }

    agregarMateria(materia) {
        this.materias.push(materia);
   }

   mostrarMaterias() {
        return this.materias;
   }

   retornarEdad() {
        return this.edad;
   }
}

module.exports = Alumno;
