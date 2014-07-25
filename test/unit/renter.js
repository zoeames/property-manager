/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Renter = require('../../app/models/renter');

describe('Renter', function(){
  describe('constructor', function(){
    it('should create a new Renter', function(){
      var bob = new Renter();
      expect(bob).to.be.ok;
      expect(bob).to.be.instanceof(Renter);
      });

    it('should create a new Renter with arguments', function(){
      var renter = new Renter('Bob', 23, 'male', 'coder');
      expect(renter.name).to.equal('Bob');
      expect(renter.age).to.equal(23);
      expect(renter.gender).to.equal('male');
      expect(renter.isEvicted).to.be.false;
      expect(renter.cash).to.be.at.least(100);
      expect(renter.profession).to.equal('coder');
      });
    });
   describe('#work', function(){
   it('should add to the cash of the movie star renter', function(){
   var renter = new Renter('Bob', 23, 'male', 'movie star');
   renter.cash = 0;
   renter.work();
   expect(renter.cash).to.be.within(3000,  10000);
       });
   it('should add to the cash of the coder renter', function(){
   var renter = new Renter('Bob', 23, 'male', 'coder');
   renter.cash = 0;
   renter.work();
   expect(renter.cash).to.be.within(1000,  7000);
       });
   it('should add to the cash of the waiter renter', function(){
   var renter = new Renter('Bob', 23, 'male', 'waiter');
   renter.cash = 0;
   renter.work();
   expect(renter.cash).to.be.within(50,  250);
       });
   it('should add to the cash of the social worker enter', function(){
   var renter = new Renter('Bob', 23, 'male', 'social worker');
   renter.cash = 0;
   renter.work();
   expect(renter.cash).to.be.within(150,  750);
       });
    });
   describe('#payRent', function(amount){
   it('should subtract rent from the cash of the renter', function(){
     var bob = new Renter('Bob', 23, 'male', 'coder');
     bob.cash=100; 
     bob.payRent(50);
     expect(bob.cash).to.equal(50);
       });
   it('should evict renter if they cannot pay rent', function(){
     var bob = new Renter('Bob', 23, 'male', 'coder');
     bob.cash=100; 
     bob.payRent(200);
     expect(bob.isEvicted).to.be.true;
       });
    });
   describe('#party', function(){
     
   it('should not evict the renter based on party', function(){
     var bob;

     while (true){
     bob = new Renter('Bob', 23, 'male', 'coder');
     bob.party();
     if (!bob.isEvicted){
     break;
     }
     }
     expect(bob.isEvicted).to.be.false;
       });
     });
   });



