/*
 * cylon-audio driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);

  this.commands = {
    play: this.play
  };
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  this.defineDriverEvent('playing');
  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

Driver.prototype.play = function(track) {
  this.adaptor.play(track);
};
