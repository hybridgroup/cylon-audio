var Cylon = require('cylon');

Cylon.robot({
  connections: {
    records: { adaptor: 'audio', tracks: ['./audio_samples/audio-sample.mp3'] }
  },

  devices: {
    jukebox: { driver: 'audio' }
  },

  work: function(my) {
    my.jukebox.on('playing', function(song){
      console.log('Playing this nice tune: "' + song + '"');
    });

    // You can also pass a string with a full or relative path here,
    // in case you do not want to define a list of tracks for the adaptor.
    // my.jukebox.play('./audio_samples/audio-sample.mp3');
    my.jukebox.play(0);
  }
}).start();
