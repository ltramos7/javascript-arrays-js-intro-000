
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
} 

function removeElementFromBeginningOfArray(array){
  // newArray = array.slice(1);
  // return newArray;
  
  array = array.slice(1);
  return array;
  // both versions of my code work, but which is best practice?
}

function destructivelyRemoveElementFromEndOfArray(){}









