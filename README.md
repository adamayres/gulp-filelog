(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-filelog
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status](coveralls-image)](coveralls-url) [![Dependency Status][depstat-image]][depstat-url]

> filelog plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-filelog` as a development dependency:

```shell
npm install --save-dev gulp-filelog
```

Then, add it to your `gulpfile.js`:

```javascript
var filelog = require("gulp-filelog");

gulp.src("./src/*.ext")
	.pipe(filelog({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### filelog(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


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
