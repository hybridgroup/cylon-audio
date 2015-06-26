"use strict";

var audio = lib("../");

var Adaptor = lib("adaptor"),
    Driver = lib("driver");

describe("Cylon.Audio", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(audio.adaptors).to.be.eql(["audio"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(audio.drivers).to.be.eql(["audio"]);
    });
  });
  describe("#driver", function() {
    it("returns an instance of the Driver", function() {
      var args = { device: { connection: {} } };
      expect(audio.driver(args)).to.be.instanceOf(Driver);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(audio.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
