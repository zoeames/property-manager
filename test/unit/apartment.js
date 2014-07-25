
/* jshint expr:true */
/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Room = require('../../app/models/room');
var Apt = require('../../app/models/apartment');

describe('Apt', function(){
  describe('constructor', function(){
    it('should creat an Apt unit', function(){
      var A1 = new Apt (A1);
      expect (A1).to.be.an.instanceof(Apt);
      expect (A1.rooms.length).to.equal(0);
      expect (A1.renters.length).to.equal(0);
    });
  });

  describe('#area', function(){
   it('should calcualate the area of an apt', function(){
    var a1 = new Apt(a1);
    var room1 = new Room ('living', 12, 10);
    a1.rooms.push(room1);
    var room2 = new Room('bed', 10, 8);
    a1.rooms.push(room2);
    var room3 = new Room('kitchen', 15, 10);
    a1.rooms.push(room3);
     expect(a1.area()).to.equal(350);
      expect (a1.rooms.length).to.equal(3);
       });
      });
  describe('#cost', function(){
   it('should calcualate the cost of an apt', function(){
    var a1 = new Apt(a1);
    var room1 = new Room ('living', 12, 10);
    a1.rooms.push(room1);
    var room2 = new Room('bed', 10, 8);
    a1.rooms.push(room2);
    var room3 = new Room('kitchen', 15, 10);
    a1.rooms.push(room3);
     expect(a1.cost()).to.equal(1750);
       });
    });
    });

