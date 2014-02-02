# gulp-filelog
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> A [gulp](https://github.com/wearefractal/gulp) plugin that logs out the file names in the stream. Displays a count and if empty. Useful for debugging.

## Usage

First, install `gulp-filelog` as a development dependency:

```shell
npm install --save-dev gulp-filelog
```

Then, add it to your `gulpfile.js`:

**Output the file names in the stream**

```javascript
var filelog = require("gulp-filelog");

gulp.src("./src/*.ext")
    .pipe(filelog())
	.pipe(gulp.dest("./dist"));
```

**Output the file names in the stream with a task name identifier**

```javascript
var filelog = require("gulp-filelog");

gulp.src("./src/*.ext")
    .pipe(filelog('someTask'))
	.pipe(gulp.dest("./dist"));
```

## API

### filelog([task])

#### task
Type: `String`

The name of original task, this will be outputted to the stdout along with the file name.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-filelog
[npm-image]: https://badge.fury.io/js/gulp-filelog.png

[travis-url]: http://travis-ci.org/adamayres/gulp-filelog
[travis-image]: https://secure.travis-ci.org/adamayres/gulp-filelog.png?branch=master

[coveralls-url]: https://coveralls.io/r/adamayres/gulp-filelog
[coveralls-image]: https://coveralls.io/repos/adamayres/gulp-filelog/badge.png

[depstat-url]: https://david-dm.org/adamayres/gulp-filelog
[depstat-image]: https://david-dm.org/adamayres/gulp-filelog.png
