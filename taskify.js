var Task = require('data.task')
function taskify(fn) {
  // fn expects callback at the last position
  return function () {
    var args = Array.prototype.slice.call(arguments, 0)
    // console.log('args to', fn.name, 'are', args)
    return new Task((reject, resolve) => {
      args.push(function taskCallback(err, result) {
        if (err) {
          return reject(err)
        }
        resolve(result)
      })
      fn.apply(null, args)
    })
  }
}

module.exports = taskify
