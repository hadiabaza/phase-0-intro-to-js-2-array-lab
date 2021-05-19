// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let newArr = cats.slice();
  newArr.push(name);
  return newArr;
}

function prependCat(name) {
  let newArr = cats.slice();
  newArr.unshift(name);
  return newArr;
}

function removeLastCat() {
  let newArr = cats.slice(0, cats.length - 1);
  return newArr;
}

function removeFirstCat() {
  let newArr = cats.slice(1);
  return newArr;
}
