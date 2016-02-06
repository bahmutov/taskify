# taskify
> Convert Node style callback expecting function into a function that returns data.Task

[![NPM][taskify-icon] ][taskify-url]

[![Build status][taskify-ci-image] ][taskify-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Install

    npm install --save @bahmutov/taskify

## Use

Take a simple Node-style code

```js
function add(a, b, cb) {
  cb(null, a + b)
}
add(2, 3, function (err, sum) {
  if (err) { ... }
  console.log('2 + 3 =', sum)
})
```

Make [Tasks](https://www.npmjs.com/package/data.task) instead

```js
var taskify = require('@bahmutov/taskify')
var add = taskify(function (a, b, cb) {
  cb(null, a + b)
})
var addTask = add(2, 3)
// nothing executes yet
addTask.fork(
  err => ,// ... handle error
  sum => console.log('2 + 3 =', sum)
)
```

## How is this different from a Promise?

[Difference between a Promise and a Task](https://glebbahmutov.com/blog//difference-between-promise-and-task/)

## Related

* [data.task](https://www.npmjs.com/package/data.task)
* [task-task](https://github.com/bahmutov/task-task)
* [From callbacks to Tasks](https://glebbahmutov.com/blog/from-callbacks-to-tasks/)

### Small print

Author: Gleb Bahmutov &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/taskify/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[taskify-icon]: https://nodei.co/npm/@bahmutov/taskify.png?downloads=true
[taskify-url]: https://npmjs.org/package/@bahmutov/taskify
[taskify-ci-image]: https://travis-ci.org/bahmutov/taskify.png?branch=master
[taskify-ci-url]: https://travis-ci.org/bahmutov/taskify
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
