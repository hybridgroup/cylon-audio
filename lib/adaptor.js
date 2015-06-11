/*
 * cylon-audio adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Lame = require("lame"),
    Speaker = require("speaker"),
    fs = require("fs");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);

  opts = opts || {};

  this.tracks = opts.tracks || [];

  this.decoder = new Lame.Decoder();
  this.speaker = new Speaker();

  this.events = [
    /**
     * Emitted when the adaptor detects a format
     *
     * @event format
     */
    "format",

    /**
     * Emitted when the adaptor starts playing a file
     *
     * @event playing
     */
    "playing"
  ];
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ["play"];

/**
 * Connects
 *
 * @param {Function} callback to be triggered when connected
 * @return {void}
 */
Adaptor.prototype.connect = function(callback) {
  this.decoder.on("format", function(err, data) {
    this.emit("format", err, data);
  }.bind(this));

  this.decoder.pipe(this.speaker);

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
 * Plays a track
 *
 * @param {String|Number} track path to track to be played, or index of
 * `this.tracks` to play
 * @return {void}
 * @publish
 */
Adaptor.prototype.play = function(track) {
  var trackPath = (typeof track === "number") ? this.tracks[track] : track;
  var readStream = fs.createReadStream(trackPath);

  this.emit("playing", trackPath);

  readStream.pipe(this.decoder);
};
