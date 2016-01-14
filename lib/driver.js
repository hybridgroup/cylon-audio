/*
 * cylon-audio driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014-2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);

  opts = opts || {};

  this.file = opts.file;
  this.sound = null;

  this.commands = {
    play: this.play,
    stop: this.stop,
    pause: this.pause,
    resume: this.resume
  };

  this.events = [
    /**
     * Emitted when the driver detects a stop command
     *
     * @event stop
     */
    "stop",

    /**
     * Emitted when the driver detects a pause command
     *
     * @event pause
     */
    "pause",

    /**
     * Emitted when the driver detects a resume command
     *
     * @event resume
     */
    "resume",

    /**
     * Emitted when the driver finishes playing a file
     *
     * @event complete
     */
    "complete"
  ];
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

/**
 * Starts
 *
 * @param {Function} callback to be triggered when connected
 * @return {void}
 */
Driver.prototype.start = function(callback) {
  callback();
};

/**
 * Stops
 *
 * @param {Function} callback to be triggered when halted
 * @return {void}
 */
Driver.prototype.halt = function(callback) {
  callback();
};

/**
 * Plays a sound
 *
 * @param {String} filename name of file to play
 * @return {void}
 * @publish
 */
Driver.prototype.play = function(filename) {
  if (filename) {
    this.file = filename;
  }

  this.sound = this.connection.sound(this.file);

  // TODO: connect events

  this.sound.play();
};

/**
 * Stops playing sound
 *
 * @return {void}
 * @publish
 */
Driver.prototype.stop = function() {
  this.sound.stop();
};

/**
 * Pause playing sound
 *
 * @return {void}
 * @publish
 */
Driver.prototype.pause = function() {
  this.sound.pause();
};

/**
 * Resume playing sound
 *
 * @return {void}
 * @publish
 */
Driver.prototype.resume = function() {
  this.sound.resume();
};
