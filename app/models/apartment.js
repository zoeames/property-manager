
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


module.exports = Apt;
