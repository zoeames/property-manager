
'use strict';



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

/*
Apartment.prototype.purgeEvicted = function(){
    var notEvicted = [];
      for( var i = 0; i < this.renters.length; i++){
            if( this.renters[i].isEvicted === false){
                    notEvicted.push(this.renters[i]);
                        }
              }
        this.renters = notEvicted;
};

Apartment.prototype.collectRent = function(){
    var amount = (this.cost()/this.renters.length);
      for( var i = 0; i < this.renters.length; i++){
           this.renters[i].payRent(amount); 
             }
};

Apartment.prototype.save = function(cb){
    cAppts.save(this, function(err, object){
          cb();
            });
};

Apartment.find = function( query, cb){
    cAppts.find(query).toArray( function(err, object){
          cb(object);
            });
};
*/
module.exports = Apt;
