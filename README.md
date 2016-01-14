# Cylon.js For Audio

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things.

This repository contains the Cylon adaptor for Audio playback. The implementation uses the [node-mpg123](https://github.com/maciek134/node-mpg123) node module from [@maciek134](https://github.com/maciek134/). Thank you!

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-audio.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-audio) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-audio/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-audio) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-audio/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-audio)

## How to Install

Install the module with:

    $ npm install cylon cylon-audio

### Prerequisites for OSX

    $ brew install mpg123    

### Prerequisites for Ubuntu

    $ sudo apt-get install mpg123

### Prerequisites for Windows

Download and install the latest release for Windows from http://www.mpg123.de/download/win32/?V=1&O=D

### Special instructions for Intel Edison

You need to install the various dependencies before you can install cylon-audio on your Intel Edison. First, make sure you have updated to the very latest Edison firmware.

Then, add these lines to your `/etc/opkg/base-feeds.conf` file:

```
src/gz all http://repo.opkg.net/edison/repo/all
src/gz edison http://repo.opkg.net/edison/repo/edison
src/gz core2-32 http://repo.opkg.net/edison/repo/core2-32
```

And then run:

```
opkg update
opkg install mpg123
```

## How to Use

Using the cylon-audio module is pretty easy, pretty much just install the npm module and you are good to go, use it as you would any other device passing along the audio you wish to reproduce. To play audio, pass a full or relative path to the `play` function.  See the example below for further details.

```javascript
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
    my.sound.play();
  }
}).start();
```

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-audio/blob/master/RELEASES.md](https://github.com/hybridgroup/cylon-audio/blob/master/RELEASES.md).

## License

Copyright (c) 2014-2016 The Hybrid Group. Licensed under the Apache 2.0 license.
