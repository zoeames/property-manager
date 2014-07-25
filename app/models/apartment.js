
'use strict';

var cApts = global.mongodb.collection('apts');

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
      }else{return false;
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
    cApts.find(query).toArray( function(err, object){
          cb(object);
            });
};


module.exports = Apt;
