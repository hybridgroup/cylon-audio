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

    $ npm install cylon-audio

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

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using `make test` and `make lint`.

## Release History

Version 0.5.0 - Compatibility with Cylon 0.21.0

Version 0.4.0 - Compatibility with Cylon 0.20.0

Version 0.3.0 - Compatibility with Cylon 0.19.0

Version 0.2.0 - Improved functionality, compatibility with Cylon 0.18.0

Version 0.1.0 - Initial release

## License

Copyright (c) 2014 The Hybrid Group. Licensed under the Apache 2.0 license.
