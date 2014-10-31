'use strict';

var through = require('through2');
var gutil = require('gulp-util');

module.exports = function filelog (taskParam) {
  var count = 0;

  function decorate (color, text) {
    return text ? '[' + gutil.colors[color](text) + ']' : '';
  }

  return through.obj(function (file, enc, callback) {
    var items = [];
    count++;

    if (taskParam) {
      items.push(decorate('blue', taskParam));
    }

    items.push(decorate('yellow', count));
    items.push(decorate('cyan', file.path));

    if (file.isNull()) {
      items.push(decorate('magenta', 'EMPTY'));
    }

    gutil.log(items.join(' '));

    this.push(file);
    return callback();
  }, function (cb) {
    var task = taskParam ? decorate('blue', taskParam) + ' ' : '';
    gutil.log(task + 'Found ' + decorate('yellow', count.toString()) + ' files.');
    cb();
  });
};
