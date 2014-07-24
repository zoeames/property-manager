
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
});
