"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    audio: { adaptor: "audio" }
  },

  devices: {
    sound: { driver: "audio", file: "./audio_samples/audio-sample.mp3" }
  },

  work: function(my) {
    my.sound.loop();
  }
}).start();
