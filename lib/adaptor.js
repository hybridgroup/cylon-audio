/*
 * cylon-audio adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Lame = require('lame'),
    Speaker = require('speaker'),
    fs = require('fs');

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);

  opts = opts || {};

  this.tracks = opts.tracks || [];

  this.decoder = new Lame.Decoder();
  this.speaker = new Speaker();
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ['play'];

Adaptor.prototype.connect = function(callback) {
  this.decoder.on('format', function(err, data) {
    this.emit('format', err, data);
  }.bind(this));

  this.decoder.pipe(this.speaker);

  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

Adaptor.prototype.play = function(track) {
  var trackPath = (typeof(track) === 'number') ? this.tracks[track] : track;
  var readStream = fs.createReadStream(trackPath);

  this.emit('playing', trackPath);

  readStream.pipe(this.decoder);
};
