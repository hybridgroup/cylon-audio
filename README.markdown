# Cylon.js For Audio

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for Audio reproduction capabilities.

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

## Getting Started

Install the module with:

    $ npm install cylon-audio

## How to use

Using the cylon-audio module is pretty easy, pretty much just install the npm module and you are good to go, use it as you would any other device passing along the audio you wish to reproduce. See the example below for further details.

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'audio', adaptor: 'audio' },
  device: {name: 'audio', driver: 'audio'},

  work: function(my) {

    my.audio.on('playing', function(song){
      console.log('Playing this nice tune: "' + song + '"');
    });

    // You can pass a string with a full or relative path here,
    my.audio.play('./audio_samples/audio-sample.mp3');
  }
}).start(); 
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using `make test` and `make lint`.

## Release History

Version 0.2.0 - Improved functionality, compatibility with Cylon 0.18.0

Version 0.1.0 - Initial release

## License

Copyright (c) 2014 The Hybrid Group. Licensed under the Apache 2.0 license.



