'use strict';

var fs = require('fs');
var should = require('should');
var gutil = require('gulp-util');
var filelog = require('../');

require('mocha');

describe('gulp-filelog', function () {
  var writtenValue;
  var originalStdoutWrite;
  var srcFile1;
  var srcFile2;

  beforeEach(function () {
    writtenValue = null;

    // Wrap process.stdout.write so we can capture the output.
    originalStdoutWrite = process.stdout.write;
    process.stdout.write = function(value) {
      writtenValue = value;
      originalStdoutWrite.apply(this, arguments);
    };

    srcFile1 = new gutil.File({
      path: 'test/fixtures/1.txt',
      cwd: 'test/',
      base: 'test/fixtures',
      contents: fs.readFileSync('test/fixtures/1.txt')
    });

    srcFile2 = new gutil.File({
      path: 'test/fixtures/2.txt',
      cwd: 'test/',
      base: 'test/fixtures',
      contents: null
    });
  });

  it('should produce expected file via buffer', function (done) {
    var task = 'testTask';
    var streamCount = 0;
		var stream = filelog(task);

		stream.on('error', function(err) {
			should.exist(err);
			done(err);
		});

    stream.on('data', function () {
      streamCount++;

      if (streamCount === 1) {
        writtenValue.should.eql('[' + gutil.colors.green('gulp') + '] [' + gutil.colors.blue(task) + '] [' + gutil.colors.yellow('1') + '] [' + gutil.colors.cyan('test/fixtures/1.txt') + ']\n');
      } else if (streamCount === 2) {
        writtenValue.should.eql('[' + gutil.colors.green('gulp') + '] [' + gutil.colors.blue(task) + '] [' + gutil.colors.yellow('2') + '] [' + gutil.colors.cyan('test/fixtures/2.txt') + '] [' + gutil.colors.magenta('EMPTY') + ']\n');
      }
    });

    stream.write(srcFile1);
    stream.write(srcFile2);
    stream.end();

    writtenValue.should.eql('[' + gutil.colors.green('gulp') + '] [' + gutil.colors.blue(task) + '] Found [' + gutil.colors.yellow('2') + '] files.\n');
    done();
	});

  it('should handle when no task name is specified', function (done) {
    var streamCount = 0;
    var stream = filelog();

    stream.on('error', function(err) {
      should.exist(err);
      done(err);
    });

    stream.on('data', function () {
      streamCount++;

      if (streamCount === 1) {
        writtenValue.should.eql('[' + gutil.colors.green('gulp') + '] [' + gutil.colors.yellow('1') + '] [' + gutil.colors.cyan('test/fixtures/1.txt') + ']\n');
      } else if (streamCount === 2) {
        writtenValue.should.eql('[' + gutil.colors.green('gulp') + '] [' + gutil.colors.yellow('2') + '] [' + gutil.colors.cyan('test/fixtures/2.txt') + '] [' + gutil.colors.magenta('EMPTY') + ']\n');
      }
    });

    stream.write(srcFile1);
    stream.write(srcFile2);
    stream.end();

    writtenValue.should.eql('[' + gutil.colors.green('gulp') + '] Found [' + gutil.colors.yellow('2') + '] files.\n');
    done();
  });

  afterEach(function () {
    process.stdout.write = originalStdoutWrite;
  });
});
