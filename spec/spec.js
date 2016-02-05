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

  it('creates a task', function () {
    var adder = taskify(add)
    var addTask = adder(2, 3)
    console.assert(typeof addTask === 'object')
  })

  it('adds numbers', function (done) {
    var adder = taskify(add)
    var addTask = adder(2, 3)
    addTask.fork(
      err => console.assert(false, err),
      sum => {
        console.assert(sum === 5)
        done()
      }
    )
  })
})
