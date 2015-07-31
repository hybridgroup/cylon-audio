# Cylon.js For Audio

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for Audio reproduction capabilities.

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

[![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-audio/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-audio) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-audio/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-audio)
[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-audio.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-audio) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-audio/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-audio) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-audio/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-audio)

## How to Install

Install the module with:

    $ npm install cylon cylon-audio


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
opkg install alsa-tools-dev
```

Plug in your USB sound device, then run, then run this command to check that ALSA sees your device:

```
aplay -Ll
```

Create a ~/.asoundrc file (or an /etc/asound.conf file for all users):

```
pcm.!default sysdefault:Device
```

Change `Device` to match the name of the card returned by the `aplay -Ll` command.

To verify that the system is working, run this command:

```
aplay /usr/share/sounds/alsa/Front_Center.wav
```

If you hear audio, you should now be able to run `npm install cylon-audio`.

## How to Use

Using the cylon-audio module is pretty easy, pretty much just install the npm module and you are good to go, use it as you would any other device passing along the audio you wish to reproduce. To play audio, pass a full or relative path to the `play` function.  See the example below for further details.

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    audio: { adaptor: 'audio' }
  },

  devices: {
    audio: { driver: 'audio' }
  },

  work: function(my) {
    my.audio.on('playing', function(song){
      console.log('Playing this nice tune: "' + song + '"');
    });

    // You can pass a string with a full or relative path here,
    my.audio.play('./audio_samples/audio-sample.mp3');
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

Copyright (c) 2014 The Hybrid Group. Licensed under the Apache 2.0 license.
