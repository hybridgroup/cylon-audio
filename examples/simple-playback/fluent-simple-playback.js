var Cylon = require('cylon');

Cylon
  .robot()
  .connection('audio', { adaptor: 'audio' })
  .device('audio', { driver: 'audio' })

  .on('ready', function(bot) {
    bot.audio.on('playing', function(song){
      console.log('Playing this nice tune: "' + song + '"');
    });

    // You can also pass a string with a full or relative path here,
    // in case you do not want to define a list of tracks for the adaptor.
    bot.audio.play('./audio_samples/audio-sample.mp3');
  });

Cylon.start();
