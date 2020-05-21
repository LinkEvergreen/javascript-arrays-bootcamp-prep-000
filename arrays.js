var chocolateBars = ['snickers, hundred grand, kitkat, and skittles']

function addElementToBeginningOfArray(array, element) {
  ['element', ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('element')
}
