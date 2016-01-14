"use strict";

var Driver = lib("driver");

describe("Driver", function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({
      connection: {}
    });
  });

  describe("#commands", function() {
    it("is an object containing API commands", function() {
      expect(driver.commands).to.be.an("object");
      expect(driver.commands.play).to.be.eql(driver.play);
    });
  });

  describe("#play", function() {
    var player = spy(),
        on = spy();

    beforeEach(function() {
      driver.connection.sound = function() { return { play: player, on: on }; };
    });

    it("tells the connection to play the provided track", function() {
      driver.play("track");
      expect(player).to.be.called;
    });
  });
});
