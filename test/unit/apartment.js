
/* jshint expr:true */
/* global describe, it, beforeEach, before*/
'use strict';

var expect = require('chai').expect;
var Apt;
var Room = require('../../app/models/room');
var Mongo = require('mongodb');
var connect = require('../../app/lib/mongodb');
var Renter = require('../../app/models/renter');



describe('Apt', function(){
  before(function(done){
    connect('property-manager-test', function (){
      Apt = require('../../app/models/apartment');
      done();
    });
  });
    
  beforeEach(function(done){
    global.mongodb.collection('apts').remove(function(){
    done();
    });
  });

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
  describe('#cost', function(){
   it('should count the number of bedrooms', function(){
    var a1 = new Apt(a1);
    var room1 = new Room ('bedroom', 10, 10);
    a1.rooms.push(room1);
    var room2 = new Room ('bedroom', 30, 10);
    a1.rooms.push(room2);
    var room3 = new Room ('bedroom', 9, 10);
    a1.rooms.push(room3);
    expect(a1.bedrooms()).to.equal(3);
    });
  });
  describe('#isAvailable', function(){
   it('should tell if there are available bedrooms', function(){
    var a1 = new Apt(a1);
    var room1 = new Room ('bedroom', 10, 10);
    a1.rooms.push(room1);
    var room2 = new Room ('bedroom', 10, 10);
    a1.rooms.push(room2);
    var bob = new Renter('Bob', 23, 'male', 'coder');
    a1.renters.push(bob);
    expect(a1.isAvailable()).to.be.true;
    });
  });
  describe('#purgeEvicted', function(){
   it('should remove evited renters from renter array', function(){
    var a1 = new Apt(a1);
    var bob = new Renter('Bob', 23, 'male', 'coder');
    a1.renters.push(bob);
    var sam = new Renter('Sam', 2, 'male', 'waiter');
    a1.renters.push(sam);
    expect(a1.renters.length).to.equal(2);
    sam.isEvicted = true;
    a1.purgeEvicted();
    expect(a1.renters.length).to.equal(1);
    });
  });
  describe('#collectRent', function(){
   it('should collect rent from all renters in a building', function(){
    var a1 = new Apt(a1);
    var bob = new Renter('Bob', 23, 'male', 'coder');
    bob.cash = 2000;
    a1.renters.push(bob);
    var sam = new Renter('Sam', 2, 'male', 'waiter');
    sam.cash = 3000;
    a1.renters.push(sam);
    var room1 = new Room ('bedroom', 100, 10);
    a1.rooms.push(room1);
    var room2 = new Room ('bedroom', 10, 10);
    
    a1.rooms.push(room2);
    a1.collectRent();
    
    expect(bob.cash).to.equal(2000);
    expect(bob.isEvicted).to.be.true;
    expect(sam.cash).to.equal(250);
    expect(sam.isEvicted).to.be.false;
    });
  });

  describe('#save', function(){
    it('should save to the mongo databse',function(done){
      var a1  = new Apt('a1');
      a1.save( function(){
        expect(a1._id).to.be.instanceof(Mongo.ObjectID);
        done();
        });
     });
  });
  
  describe('.find', function(){
     it('should find all apts from mongo databse',function(done){
       var a1  = new Apt('a1');
       var a2  = new Apt('a2');
       a1.save(function (){
       a2.save(function (){
        Apt.find( {},function(apts){
        console.log(apts);
          expect(apts).to.have.length(2);
        done();
         });
       });
     });
   });
  });


});

