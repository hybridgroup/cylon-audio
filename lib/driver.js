/*
 * cylon-audio driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);

  this.commands = {
    play: this.play
  };

  this.events = [
    /**
     * Emitted when the adaptor starts playing a file
     *
     * @event playing
     */
    "playing"
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
  this.defineDriverEvent("playing");
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
 * Plays a track
 *
 * @param {String|Number} track path to track to be played, or index of
 * `this.tracks` to play
 * @return {void}
 * @publish
 */
Driver.prototype.play = function(track) {
  this.connection.play(track);
};
