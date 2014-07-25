
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




module.exports = Apt;
