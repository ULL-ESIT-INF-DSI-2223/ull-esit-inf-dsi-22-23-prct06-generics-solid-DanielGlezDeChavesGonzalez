import "mocha";
import { expect } from "chai";
import { Lista } from "../../src/ejercicio-2/ArrayGenerico";

describe("ArrayGenerico", () => {
  it("concatenate() should add an element to the array", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    expect(array.length()).to.be.equal(1);
  });

  it("concatenarListas() should add a list to the array", () => {
    const array = new Lista<number>();
    const array2 = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array2.concatenate(3);
    array2.concatenate(4);
    array.concatenarListas(array2);
    expect(array.toArray()).to.be.deep.equal([1, 2, 3, 4]);
  });

  it("filter() should return a new array with the filtered elements", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array.concatenate(3);
    array.concatenate(4);
    array.concatenate(5);
    expect(array.filter((elemento) => elemento % 2 === 0).length()).to.be.equal(
      2
    );
  });

  it("length() should return the length of the array", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array.concatenate(3);
    array.concatenate(4);
    array.concatenate(5);
    expect(array.length()).to.be.equal(5);
  });

  it("map() should return a new array with the mapped elements", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array.concatenate(3);
    array.concatenate(4);
    array.concatenate(5);
    expect(array.map((elemento) => elemento * 2).toArray()).to.be.deep.equal([
      2, 4, 6, 8, 10,
    ]);
  });

  it("reduce() should return the reduced value", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array.concatenate(3);
    array.concatenate(4);
    array.concatenate(5);
    expect(
      array.reduce((acumulador, elemento) => acumulador + elemento, 0)
    ).to.be.equal(15);
  });
  it("reverse() should return the array in reverse order", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array.concatenate(3);
    array.concatenate(4);
    array.concatenate(5);
    expect(array.reverse().length()).to.be.equal(5);
  });

  it("toArray() should return the array in an array", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array.concatenate(3);
    array.concatenate(4);
    array.concatenate(5);
    expect(array.toArray()).to.be.deep.equal([1, 2, 3, 4, 5]);
  });
  it("forEach() should return the array in an array", () => {
    const array = new Lista<number>();
    array.concatenate(1);
    array.concatenate(2);
    array.concatenate(3);
    array.concatenate(4);
    array.concatenate(5);
    let array2 = new Lista<number>();
    array.forEach((elemento) => array2.concatenate(elemento));
    expect(array2.toArray()).to.be.deep.equal([1, 2, 3, 4, 5]);
  });
});
