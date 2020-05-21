var chocolateBars = ['snickers, hundred grand, kitkat, and skittles']

function addElementToBeginningOfArray(array, element) {
  ['element', ...[array]]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  [...[array], 'element']
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
}
