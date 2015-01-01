"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    audio: { adaptor: "audio" }
  },

  devices: {
    audio: { driver: "audio" }
  },

  work: function(my) {

    my.audio.on("playing", function(song){
      console.log("Playing this nice tune: \"" + song + "\"");
    });

    // You can also pass a string with a full or relative path here,
    // in case you do not want to define a list of tracks for the adaptor.
    my.audio.play("./audio_samples/audio-sample.mp3");
  }
}).start();
