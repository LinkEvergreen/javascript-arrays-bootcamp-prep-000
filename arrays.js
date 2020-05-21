var chocolateBars = ['snickers, hundred grand, kitkat, and skittles']

function addElementToBeginningOfArray(array, element) {
  ['element', ...[1]]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  [...[1], 'element']
  return array
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}
