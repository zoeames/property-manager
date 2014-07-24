
/* jshint expr:true */
/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Room = require('../../app/models/room');

describe('Room', function(){
  describe('constructor', function(){
    it('should creat the room', function(){
      var room1 = new Room ('living', 12, 10);
      expect(room1).to.be.ok;
      expect(room1).to.be.instanceof(Room);
      expect(room1.length).to.equal(12);
      expect(room1.width).to.equal(10);
      });
    });
  describe('#area', function(){
   it('should calcualate the area of a room', function(){
     var room1 = new Room ('living', 12, 10);
     expect(room1.area()).to.equal(120);
       });
});
  describe('#cost', function(){
   it('should calcualate the cost of a room', function(){
     var room1 = new Room ('living', 12, 10);
     expect(room1.cost()).to.equal(600);
       });
});
});




