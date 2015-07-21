module.exports.start = function(program, colors, fs) {
  var ffmpeg = require('fluent-ffmpeg');
  var im = require('imagemagick');

  var command = ffmpeg(program.source);
  var qty = program.quantity || 10;
  var dir = program.destination || '../caps';

  var path = program.source.split('/')[program.source.split('/').length - 1];
  var prefix =  path.split('.')[path.split('.').length - 2];

  console.log('[INFO] Screen grabs generation has started: '.yellow, '\u2714'.green, new Date(), '\n');

  command
  .on('filenames', function(filenames) {
    for (var i in filenames) {
      console.log('\u2714 Generating file: '.green + filenames[i].cyan);
    }

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    if (!fs.existsSync(dir + '/' + prefix)) {
      fs.mkdirSync(dir + '/' + prefix);
    }
  })
  .on('end', function() {
    console.log('\n[INFO] Screen grabs generation has finished: '.yellow, '\u2714'.green, new Date(), '\n');
    appendImages();
  })
  .screenshots({
    count: qty,
    filename: prefix + '/' + prefix + '_%i.png',
    folder: dir
  });

  function appendImages() {
    im.convert([dir + '/' + prefix + '/*.png', '+append', dir + '/' + prefix + '/' + prefix + '_h.png'], function(err, stdout) {
      if (err) {
        throw err;
      }

      console.log('\u2714 Createad horizontal image: '.green + (prefix + '/' + prefix + '_h.png').cyan);

    });

    im.convert([dir + '/' + prefix + '/*.png', '-append', dir + '/' + prefix + '/' + prefix + '_v.png'], function(err, stdout) {
      if (err) {
        throw err;
      }

      console.log('\u2714 Createad vertical image: '.green + (prefix + '/' + prefix + '_v.png').cyan);
      console.log('\nSee you later :)'.red);
    });
  }

};
