class Shape{
    constructor(name,sides,sideLength){
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }
    calcParameter(){
        console.log(this.sides*this.sideLength);
    }

    calcFares(origin,destination,load,traffic,wheatherConditions){
        //complex algorithm
    }
}
const square= new Shape("square",4,5);
square.calcParameter();

const triangle=new Shape("triangle",3,3);
triangle.calcParameter();


const trip=new Trip("kormanagala","whitefield",load,traffic,wheatherConditions);
const fares=trip.calcFares();
console.log(fares);