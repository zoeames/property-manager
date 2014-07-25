'use strict';

function Room(name,length,width){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
}



Room.prototype.area = function(){
//var  length=parseInt(this.length);
//var  width=parseInt(this.width);
  return this.length * this.width;
};

Room.prototype.cost = function(){
 return this.area() * 5;
};

module.exports = Room;
