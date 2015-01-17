var through = require('through2');
var gouda   = require('gouda');
var merge   = require('merge');
var gutil   = require('gulp-util');

module.exports = function(options) {
  options = merge({
    extension: 'yomama'
  }, options);

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) return cb(null, file);

    var data;

    try {
      data = gouda.compute(file.contents.toString('utf8'));
    } catch(error) {
      return cb(new gutil.PluginError('gulp-gouda', error));
    }

    file.contents = new Buffer(data);
    file.path = gutil.replaceExtension(file.path, '.' + options.extension.replace(/^\./, ''));

    cb(null, file);
  });
};
