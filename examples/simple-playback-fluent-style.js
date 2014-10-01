var cylon = require('cylon');

cylon.robot({
  connection: { name: 'audio', adaptor: 'audio' },
  device: {name: 'audio', driver: 'audio'}
})

.on('ready', function(robot) {

    robot.audio.on('playing', function(song){
      console.log('Playing this nice tune: "' + song + '"');
    });

    // You can also pass a string with a full or relative path here,
    // in case you do not want to define a list of tracks for the adaptor.
    robot.audio.play('./audio_samples/audio-sample.mp3');
})

.start();
