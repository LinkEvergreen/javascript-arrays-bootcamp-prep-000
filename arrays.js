var chocolateBars = ['snickers, hundred grand, kitkat, and skittles']

function addElementToBeginningOfArray(array, element) {
  array = ['element', ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.upshift('element')
  return array
}
