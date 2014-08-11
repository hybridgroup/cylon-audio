'use strict';

var Driver = source("driver");

describe("Driver", function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({
      device: { connection: {} }
    });
  });

  describe("#start", function() {
    beforeEach(function() {
      driver.defineDriverEvent = spy();
    });

    it("defines the 'playing' event", function() {
      driver.start(spy());
      expect(driver.defineDriverEvent).to.be.calledWith('playing');
    });
  });

  describe("#play", function() {
    beforeEach(function() {
      driver.connection.play = spy();
    });

    it("tells the connection to play the provided track", function() {
      driver.play('track');
      expect(driver.connection.play).to.be.calledWith('track');
    });
  });
});
