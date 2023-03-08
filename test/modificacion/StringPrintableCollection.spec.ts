import "mocha";
import { expect } from "chai";
import { StringPrintableCollection } from "../../src/modificacion/StringPrintableCollection";

describe("StringPrintableCollection", () => {
  it("should print the collection", () => {
    const collection = new StringPrintableCollection(["Hola", "Mundo"]);
    expect(collection.print()).to.be.equal("Hola, Mundo");
  });
  it("should print the collection", () => {
    const collection = new StringPrintableCollection(["Hola"]);
    expect(collection.print()).to.be.equal("Hola");
  });
  it("should be able to add an element", () => {
    const collection = new StringPrintableCollection(["Hola"]);
    collection.addItem("Mundo");
    expect(collection.print()).to.be.equal("Hola, Mundo");
  });
  it("should be able to remove an element", () => {
    const collection = new StringPrintableCollection(["Hola", "Mundo"]);
    collection.removeItem(0);
    expect(collection.print()).to.be.equal("Mundo");
  });
  it("should be able to dectect if index out of range", () => {
    const collection = new StringPrintableCollection(["Hola", "Mundo"]);
    expect(collection.removeItem(3)).to.be.equal(undefined);
  });
  it("should be able to get an element", () => {
    const collection = new StringPrintableCollection(["Hola", "Mundo"]);
    expect(collection.getItem(0)).to.be.equal("Hola");
  });
  it("should be able to detect if index out of range", () => {
    const collection = new StringPrintableCollection(["Hola", "Mundo"]);
    expect(collection.getItem(3)).to.be.equal(undefined);
  });
  it("should be able to get the number of elements", () => {
    const collection = new StringPrintableCollection(["Hola", "Mundo"]);
    expect(collection.getNumberOfItems()).to.be.equal(2);
  });
});
