var taskify = require('..')

// Node style function
function add(a, b, cb) {
  cb(null, a + b)
}

describe('taskify', function () {
  it('is a function', function () {
    console.assert(typeof taskify === 'function')
  })

  it('wraps function', function () {
    var adder = taskify(add)
    console.assert(typeof adder === 'function')
  })
})
