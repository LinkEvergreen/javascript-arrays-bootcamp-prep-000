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
  return destructivelyAddElementToEndOfArray
}

function accessElementInArray(array, index) {
  console.log(array[2])
}
