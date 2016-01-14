"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    audio: { adaptor: "audio" }
  },

  devices: {
    sound: { driver: "audio" }
  },

  work: function(my) {
    // You can also pass a string with a full or relative path here,
    // in case you do not want to define a specific one for the driver.
    my.sound.play("./audio_samples/audio-sample.mp3");
  }
}).start();
