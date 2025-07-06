import { expect, test } from "bun:test";

const { 
    createCuadrado,
    createTriangulo,
    createRectangulo,
    createCirculo, // <-- AGREGA ESTA LÍNEA
    Triangulo,
    Circulo,
    Rectangulo,
    Cuadrado} = require('./app');



test('crea un objeto de tipo Triangulo', () => {
    // arrange 
    
    // act
    const f2 =  createTriangulo()
    // assert
    expect(f2.base).toBe(10)
    expect(f2.altura).toBe(20)
    expect(f2.nombre).toBe("tri1")
    expect(f2 instanceof Triangulo).toBe(true)
});

test('crea un objeto de tipo Cuadrado', () => {
    // arrange 
    const nombre = "cua1"
    const lado = 10
    // act
    const f2 =  createCuadrado(nombre, lado)
    // assert
    expect(f2.lado).toBe(lado)
    expect(f2.nombre).toBe(nombre)
    expect(f2 instanceof Cuadrado).toBe(true)
});

test('crea un objeto de tipo Circulo', () => {
    // arrange 
    const nombre = "circulo"
    const radio = 10
    // act
    const f2 =  createCirculo(nombre, radio)
    // assert
    expect(f2.radio).toBe(radio)
    expect(f2.nombre).toBe(nombre)
    expect(f2 instanceof Circulo).toBe(true)
});

test('crea un objeto de tipo Rectangulo', () => {
    // arrange 
    const nombre = "rectangulo1"
    const base = 10
    const altura = 20
    // act
    const f2 =  createRectangulo(base, altura, nombre)
    // assert
    expect(f2.base).toBe(base)
    expect(f2.altura).toBe(altura)
    expect(f2.nombre).toBe(nombre)
    expect(f2 instanceof Rectangulo).toBe(true)
});
