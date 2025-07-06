// Esta es la clase Base Figura
export class Figura{
    #nombre;
        constructor(nombre){
        this.#nombre = nombre
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    perimetro(){
        return 0
    }   
    area(){
        return 0
    }
}

// Esta es la clase Derivada Triangulo
export class Triangulo extends Figura {
    constructor(base, altura, nombre){
        super(nombre)
        this.base = base
        this.altura = altura
    }
    // definir la funcion area y la funcion perimetro
    area() {
        return (this.base * this.altura) / 2
    }
    perimetro() {
        // Asumiendo que es un triángulo equilátero para simplificar
        return this.base * 3
    }

}

// crear un triangulo con base = 10 altura = 20 y nombre tri1
const tri1 = new Triangulo(10, 20, "tri1") ;
console.log(("el area del tri1", tri1.area())); // 100
export function createTriangulo() {
    return new Triangulo(10, 20, "tri1")
}

// crea una clase llamada cuadrado que tenga un atributo 
// llamado lado. La clase extiende de Figura

export class Cuadrado extends Figura   {
    #lado; // atributo privado
    constructor(lado, nombre) {
        super(nombre)
        this.#lado = lado
    }
    area() {
        console.log("Calculando el área del cuadrado", this.#lado)
        return this.#lado * this.#lado;
    }
    perimetro() {
        return this.#lado * 4
    }
    // getter para el atributo area
    get area() {
        return this.#lado * this.#lado
    }
    get lado() {
        return this.#lado
    }
    set lado(lado) {
        this.#lado = lado
    }
       
    // poner el constructor y el atributo OK
    // tiene que tener un atributo llamado lado y otro OK
    // tiene que tener dos funciones area y perimetro OK

    // añadir un getter para el atributo lado
    // añadir un setter para el atributo lado
    // añadir un getter para el atributo nombre
    // añadir un setter para el atributo nombre
    // añadir un getter para el atributo area
    // añadir un getter para el atributo perimetro
}
// esta funcion debe de crear un cuadrado de lado l
// y nombre cua1
export function createCuadrado(lado, nombre) {
    return new Cuadrado(lado, "cua1")
}

// crear una clase llamada Rectangulo que tenga dos atributos
// llamados base y altura. La clase extiende de Figura
export class Rectangulo extends Figura {
    #base; // atributo privado
    #altura; // atributo privado
    constructor(base, altura, nombre) {
        super(nombre)
        this.#base = base;
        this.#altura = altura;
        this.nombre = nombre;
    }
    area() {
        return this.#base * this.#altura;
    }
    perimetro() {
        return 2 * (this.#base + this.#altura);
    }
    get base() {
        return this.#base;
    }
    set base(base) {
        this.#base = base;
    }
    get altura() {
        return this.#altura;
    }
    set altura(altura) {
        this.#altura = altura;
    }
    get area() {
        return this.#base * this.#altura;
    }
    get perimetro() {
        return 2 * (this.#base + this.#altura);
    }

    // poner el constructor y los atributos privados
    // tiene que tener dos funciones area y perimetro
    // añadir un getter para el atributo base
    // añadir un setter para el atributo base
    // añadir un getter para el atributo altura
    // añadir un setter para el atributo altura
    // añadir un getter para el atributo nombre
    // añadir un setter para el atributo nombre
    // añadir un getter para el atributo area
    // añadir un getter para el atributo perimetro

} 

// hacer lo mismo para la clase Circulo
export class Circulo extends Figura {
    #radio; // atributo privado
    constructor(radio, nombre) {
        super(nombre)
        this.#radio = radio;
    }
    area() {
        return Math.PI * this.#radio * this.#radio
    }
    perimetro() {
        return 2 * Math.PI * this.#radio
    }
    get radio() {
        return this.#radio
    }
    set radio(radio) {
        this.#radio = radio
    }
    
}
    
export function createRectangulo(base, altura, nombre) {
    return new Rectangulo(base, altura, nombre);
}

export function createCuadrado(nombre, lado) {
    return new Cuadrado(lado, nombre);
}

export function createCirculo(nombre, radio) {
    return new Circulo(radio, nombre);
}


// export {
//     Figura,
//     Triangulo,
//     Cuadrado,
//     Rectangulo,
//     Circulo,
//     createTriangulo,
//     createCuadrado,
//     createCirculo,
//     createRectangulo
// };
