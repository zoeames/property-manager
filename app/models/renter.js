'use strict';

function Renter(name, age, gender, profession){
  this.name = name;
  this.age = parseInt(age);
  this.gender = gender;
  this.isEvicted = false;
  this.cash = Math.floor(Math.random()* 4901)+100;
  this.profession = profession;
}

Renter.prototype.work = function (){
  if(this.profession === 'movie star'){
    this.cash += Math.floor(Math.random() * 7001) + 3000;
  }else if(this.profession === 'coder'){
    this.cash += Math.floor(Math.random() * 6001) + 1000;
  }else if(this.profession === 'waiter'){
    this.cash += Math.floor(Math.random() * 201) + 50;
  }else if (this.profession === 'social worker'){
    this.cash += Math.floor(Math.random() * 601) + 150;
  }
};
Renter.prototype.payRent = function(amount){
  amount = parseInt(amount);
if(this.cash > amount){
  this.cash -= amount;}else{
        this.isEvicted = true;
  }
};

Renter.prototype.party = function (){
  if(this.isEvicted){return;}
var party = Math.floor(Math.random()*10)+1;
if (party > 8) {
this.isEvicted = true;
}

};

module.exports = Renter;


