var chocolateBars = ['snickers, hundred grand, kitkat, and skittles']

function addElementToBeginningOfArray(array, element) {
  chocolateBars.unshift('foo')
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = [...chocolateBars, 'foo']
}

function addElementToEndOfArray(array, element) {
  chocolateBars.push('foo')
}
