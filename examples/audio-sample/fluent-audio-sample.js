"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("records", {
    adaptor: "audio"
  })
  .device("sound", { driver: "audio" })
  .on("ready", function(robot) {
    robot.sound.play("./audio_samples/audio-sample.mp3");
  });

Cylon.start();
