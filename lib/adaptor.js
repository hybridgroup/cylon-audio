/*
 * cylon-audio adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014--2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");
var Sound = require("node-mpg123");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);

  opts = opts || {};
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ["sound"];

/**
 * Connects
 *
 * @param {Function} callback to be triggered when connected
 * @return {void}
 */
Adaptor.prototype.connect = function(callback) {
  callback();
};

/**
 * Disconnects
 *
 * @param {Function} callback to be triggered when disconnected
 * @return {void}
 */
Adaptor.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Plays a sound
 *
 * @param {String} filename path to sound to be played
 * @return {Object} the new sound
 * @publish
 */
Adaptor.prototype.sound = function(filename) {
  return new Sound(filename);
};
