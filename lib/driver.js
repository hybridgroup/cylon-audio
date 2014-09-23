/*
 * cylon-audio driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

/*jslint node: true */
'use strict';

var Cylon = require('cylon');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);

  this.commands = {
    play: this.play
  };
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function() {
  this.defineDriverEvent('playing');

  Driver.__super__.start.apply(this, arguments);
};

Driver.prototype.play = function(track) {
  this.connection.play(track);
};
