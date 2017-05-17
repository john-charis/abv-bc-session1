module.exports.findMinMax = function(arr) {
  let result = []
  let min = arr.reduce(function(a, b) {
    if (a <= b) {
      return a
    } else {
      return b
    }
  })
  let max = arr.reduce(function(a, b) {
    if (a >= b) {
      return a
    } else {
      return b
    }
  })
  result.push(min, max)
  if (result[0] === result[1]) {
    result = [result[0]]
  }
  return result
}