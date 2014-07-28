
'use strict';
var Room = require('./room');
var Renter = require('./renter');
var cApts = global.mongodb.collection('apts');
var _=require('lodash');


function Apt(unit){
  this.unit = unit;
  this.rooms = [];
  this.renters = [];
}


Apt.prototype.area = function(){
  var totalArea = 0;
  for(var i=0; i<this.rooms.length; i++){
    var areaRoom = this.rooms[i].area();
    totalArea+=areaRoom;
    }
  return totalArea;
};

Apt.prototype.cost = function(){
  var totalCost = 0;
  for(var i=0; i<this.rooms.length; i++){
    var areaCost = this.rooms[i].cost();
    totalCost+=areaCost;
    }
  return totalCost;
};


Apt.prototype.bedrooms = function(){
  var numBedroom = 0;
  for( var i = 0; i < this.rooms.length; i++){
    if( this.rooms[i].name === 'bedroom') { 
      numBedroom++;
     } 
   }
  return numBedroom;
};


Apt.prototype.isAvailable = function(){
  if( this.bedrooms() > this.renters.length){
    return true;
      }
};

Apt.prototype.purgeEvicted = function(){
 var tenant = [];
 for( var i = 0; i < this.renters.length; i++){
   if( this.renters[i].isEvicted === false){
     tenant.push(this.renters[i]);
     }
   }
this.renters = tenant;
};


Apt.prototype.collectRent = function(){
  var amount = (this.cost()/this.renters.length);
  for( var i = 0; i < this.renters.length; i++){
    this.renters[i].payRent(amount); 
      }
};

Apt.prototype.save = function(cb){
    cApts.save(this, function(err, object){
          cb();
            });
};


Apt.find = function( query, cb){
  cApts.find(query).toArray(function(err, apts){
    for(var i = 0; i < apts.length; i++){
      apts[i] = reProto(apts[i]);
       }
     cb(apts);
   });
};


Apt.findById = function( id, cb){
  var query = {_id:id};
  cApts.findOne(query, function(err, apt){
  cb(reProto(apt));
  });
};


Apt.deleteById = function(id, cb){
  var query = {_id:id};
  cApts.remove(query, function(){
  cb();
 });
};

Apt.area = function(cb){
  Apt.find({}, function(apts){
  var sum = 0;
  for(var i = 0; i < apts.length; i++){
    sum += apts[i].area();
  }
  cb(sum);
  });
};


Apt.cost = function(cb){
  Apt.find({}, function(apts){
 var sum = 0;
 for(var i = 0; i < apts.length; i++){
 sum += apts[i].cost();
 }
 cb(sum);
 });
};

Apt.tenants = function(cb){
  Apt.find({}, function(apts){
  var sum = 0;
  for(var i = 0; i < apts.length; i++){
    sum += apts[i].renters.length;
   }
  cb(sum);
  });
};

Apt.revenue = function(cb){
  Apt.find({}, function(apts){
  var sum = 0;
  for(var i = 0; i < apts.length; i++){
   if(apts[i].renters.length > 0){
     sum += apts[i].cost();
     }
   }
  cb(sum);
 });
};


// Prototype Function ///

function reProto(apt){
  var room, renter;
    for(var i = 0; i < apt.rooms.length; i++){
      room = _.create(Room.prototype, apt.rooms[i]);
      apt.rooms[i] = room;
      }
    for(var j = 0; j < apt.renters.length; j++){
      renter = _.create(Renter.prototype, apt.renters[j]);
      apt.renters[j] = renter;
      }
      apt = _.create(Apt.prototype, apt);

     return apt;
}



module.exports = Apt;
