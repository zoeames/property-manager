
/* jshint expr:true */
/* global describe, it, beforeEach, before*/
'use strict';

var expect = require('chai').expect;
var Apt;
var Room = require('../../app/models/room');
var Mongo = require('mongodb');
var connect = require('../../app/lib/mongodb');
var Renter = require('../../app/models/renter');
var a1, a2;


describe('Apt', function(){
  before(function(done){
    connect('property-manager-test', function (){
      Apt = require('../../app/models/apartment');
      done();
    });
  });
    
  beforeEach(function(done){
    global.mongodb.collection('apts').remove(function(){
      a1 = new Apt('a1');
        var room1 = new Room('living', 12, 10);
        var room2 = new Room('bedroom', 10, 10);
        var room3 = new Room('kitchen', 15, 10);
        var room4 = new Room('bedroom', 30, 10);
        var room5 = new Room('bedroom', 9, 10);
        var bob = new Renter('Bob', 23, 'male', 'coder');
        var sam = new Renter('Sam', 2, 'male', 'waiter');
        a1.rooms.push(room1, room2, room3, room4, room5);
        a1.renters.push(bob, sam);

      a2 = new Apt('a2');
        var b4 = new Room('Bed', 30, 25);
        var b5 = new Room('Bed', 15, 45);
        var k2 = new Room('Kitchen', 25, 15);
        a2.rooms.push(b4, b5, k2);

        a1.save(function(){
          a2.save(function(){
          done();
          });
        });
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
     expect(a1.area()).to.equal(760);
      expect (a1.rooms.length).to.equal(5);
       });
      });
  describe('#cost', function(){
   it('should calcualate the cost of an apt', function(){
     expect(a1.cost()).to.equal(3800);
       });
    });
  describe('#cost', function(){
   it('should count the number of bedrooms', function(){
    expect(a1.bedrooms()).to.equal(3);
    });
  });
  describe('#isAvailable', function(){
   it('should tell if there are available bedrooms', function(){
    expect(a1.isAvailable()).to.be.true;
    });
  });
  describe('#purgeEvicted', function(){
   it('should remove evited renters from renter array', function(){
     var susan = new Renter('Gil', 23, 'Female', 'Coder');
     susan._isEvicted = true;
     a1.renters.push(susan);
     
     expect(a1.renters.length).to.equal(3);
    susan.isEvicted = true;
    a1.purgeEvicted();
    expect(a1.renters.length).to.equal(2);
    });
  });
  describe('#collectRent', function(){
   it('should collect rent from all renters in a building', function(){
    a1.renters[0].cash = 20;
    a1.renters[1].cash = 15000;
    
    a1.collectRent();
    
    expect(a1.renters[0].isEvicted).to.be.true;
    expect(a1.renters[1].isEvicted).to.be.false;
    });
  });

  describe('#save', function(){
    it('should save to the mongo databse',function(done){
      a1.save( function(){
        expect(a1._id).to.be.instanceof(Mongo.ObjectID);
        done();
        });
     });
  });
  
  describe('.find', function(){
     it('should find all apts from mongo databse',function(done){
        Apt.find( {},function(apts){
          expect(apts).to.have.length(2);
        done();
         });
   });
  });
  
  describe('.findById', function(){
     it('should find an apartment by id',function(done){
         Apt.find({},function(apts){  
           Apt.findById(apts[0]._id,function(apt){
             expect(apt.unit).to.equal('a1');
             done();
            });
          });
        });
    });

describe('.deleteById', function(){
   it('should remove apartment in database by id', function(done){
     Apt.find({}, function(apts){
       Apt.deleteById(apts[0]._id, function(){
         Apt.find({}, function(apts2){
           expect(apts2).to.have.length(1);
           done();
           });
        });
      });
   });
 });
 
describe('.area', function(){
    it('should return the total area of all apartments', function(done){
     Apt.area(function(area){
       expect(area).to.equal(2560);
       done();
       });
     });
  });

describe('.cost', function(){
  it('should return the total cost of all apartments', function(done){
   Apt.cost(function(cost){
   expect(cost).to.equal(12800);
   done();
   });
 });
});

describe('.tenants', function(){
  it('should return number of tenants living in complex', function(done){
    Apt.tenants(function(tenants){
      expect(tenants).to.equal(2);
      done();
     });
   });
 });

describe('.revenue', function(){
  it('should return the total revenue from all occupied apartments', function(done){
    Apt.revenue(function(revenue){
      expect(revenue).to.equal(3800);
        done();
      });
    });
  });
});

