//inheritence
class Bicycle{
    constructor(gear,speed){
        this.gear=gear;
        this.speed=speed;
    }

    applyBrake(decrement){
        this.speed-=decrement;
    }

    speedUp(increment){
        this.speed+=increment;
    }

    getInfo(){
        return `Number of gears are ${this.gear} and current speed is ${this.speed}`;
    }
}

class MountainBike extends Bicycle{
    
    constructor(gear,speed,seatHeight){
        super(gear,speed);
        this.seatHeight=seatHeight;
    }

    setHeight(newValue){
        this.seatHeight=newValue;
    }

}

const mountainBike= new MountainBike(3,100,25);

console.log(mountainBike);

mountainBike.applyBrake(10);
mountainBike.speedUp(30);
mountainBike.setHeight(40);

console.log(mountainBike);