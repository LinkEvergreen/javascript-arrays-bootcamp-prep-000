var chocolateBars = ['snickers, hundred grand, kitkat, and skittles']

function addElementToBeginningOfArray(array, element) {
  chocolateBars.unshift('foo')
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  const chocolateBars = ['foo'...chocolateBar]
}

function addElementToEndOfArray(array, element) {
  chocolateBars.push('foo')
}

function destructivelyAddElementToEndOfArray (array, element) {
  chocolateBar = [...chocolateBar, 'foo']
}
