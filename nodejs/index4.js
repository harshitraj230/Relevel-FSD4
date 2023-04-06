class Shape{
    constructor(name,sides,sideLength){
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }
    calcParameter(){
        console.log(this.sides*this.sideLength);
    }
}

class Square extends Shape{
    constructor(sideLength){
        super("square",4,sideLength);
    }
    calcArea(){
        console.log(this.sideLength*this.sideLength);
    }
}

const square=new Square(6);
console.log(square);
square.calcParameter();
square.calcArea();