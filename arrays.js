var chocolateBars = ['snickers, hundred grand, kitkat, and skittles']

function addElementToBeginningOfArray(array, element) {
  array = ['element', ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array = [...array, 'element']
  return array
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element){}
  array.

function removeElementFromEndOfArray(array, element){}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.slice(1)
  return array
}

function removeElementFromEndOfArray(array, element){}

function accessElementInArray(array, index) {
  console.log(array[2])
}
