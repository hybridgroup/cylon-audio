var cylon = require('cylon');

cylon.robot({
  connection: { name: 'records', adaptor: 'audio', tracks: ['./audio_samples/audio-sample.mp3'] },
  device: {name: 'jukebox', driver: 'audio'}
})

.on('ready', function(robot) {
    robot.jukebox.on('playing', function(song){
      console.log('Playing this nice tune: "' + song + '"');
    });

    // You can also pass a string with a full or relative path here,
    // in case you do not want to define a list of tracks for the adaptor.
    // robot.jukebox.play('./audio_samples/audio-sample.mp3');
    robot.jukebox.play(0);
})

.start();
