'use strict';

var Driver = source("driver");

describe("Driver", function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({
      adaptor: {}
    });
  });

  describe("#commands", function() {
    it("is an object containing API commands", function() {
      expect(driver.commands).to.be.an('object');
      expect(driver.commands.play).to.be.eql(driver.play);
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
      driver.adaptor.play = spy();
    });

    it("tells the connection to play the provided track", function() {
      driver.play('track');
      expect(driver.adaptor.play).to.be.calledWith('track');
    });
  });
});
