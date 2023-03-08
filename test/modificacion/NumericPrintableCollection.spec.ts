import "mocha";
import { expect } from "chai";
import { NumericPrintableCollection } from "../../src/modificacion/NumericPrintableCollection";

describe("NumericPrintableCollection", () => {
  it("should print the collection", () => {
    const collection = new NumericPrintableCollection([1, 2]);
    expect(collection.print()).to.be.equal("1 2");
  });
  it("should print the collection with one element", () => {
    const collection = new NumericPrintableCollection([1]);
    expect(collection.print()).to.be.equal("1");
  });
  it("should be able to add an element", () => {
    const collection = new NumericPrintableCollection([1]);
    collection.addItem(2);
    expect(collection.print()).to.be.equal("1 2");
  });
  it("should be able to remove an element", () => {
    const collection = new NumericPrintableCollection([1, 2]);
    collection.removeItem(0);
    expect(collection.print()).to.be.equal("2");
  });
  it("should be able to dectect if index out of range", () => {
    const collection = new NumericPrintableCollection([1, 2]);
    expect(collection.removeItem(3)).to.be.equal(undefined);
  });
  it("should be able to get an element", () => {
    const collection = new NumericPrintableCollection([1, 2]);
    expect(collection.getItem(0)).to.be.equal(1);
  });
  it("should be able to dectect if index out of range", () => {
    const collection = new NumericPrintableCollection([1, 2]);
    expect(collection.getItem(3)).to.be.equal(undefined);
  });
  it("should be able to get the number of elements", () => {
    const collection = new NumericPrintableCollection([1, 2]);
    expect(collection.getNumberOfItems()).to.be.equal(2);
  });
});
