"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("audio", { adaptor: "audio" })
  .device("sound", { driver: "audio", file: "./audio_samples/audio-sample.mp3" })

  .on("ready", function(bot) {
    bot.sound.play();
  });

Cylon.start();
