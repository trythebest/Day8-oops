class Circle{
    

    constructor(radius,color){
        this.radius=radius||1.0;
        this.color=color||"red";
    }
    getRadius(){
        return`the radius is ${this.radius}`;
    }
    setRadius(double){
        if(this.radius !==double){
           return `setted radius is ${double}`
        }else{
            return `${this.getRadius}`
        }
    }
    getColor(){
        return`the color is ${this.color}`;
    }
    setColor(colo){
        if(this.color !==colo){
            return `setted color is ${colo}`
        }else{
            return`${this.getColor()}`
        }
    }
    getArea(){
        this.area=3.14*(this.radius*this.radius)
        return`Area is ${this.area}`
    }
    getCircumference(){
        this.cir=2*(this.area)
        return`Circumference is ${this.cir}`
    }
    toString(){
        return`Circle[${[this.radius=this.radius,this.color=this.color,this.area=this.area]}]`;
    }
}

var circle1= new Circle(2,"blue");
var circle2= new Circle();
var circle3= new Circle(8);

console.log(circle1);
console.log(circle2);
console.log(circle3);

console.log(circle1.getRadius());
console.log(circle2.getRadius());
console.log(circle3.getRadius());

console.log(circle1.setRadius(5));
console.log(circle2.setRadius(15));
console.log(circle3.setRadius(50));

console.log(circle1.getColor());
console.log(circle2.getColor());
console.log(circle3.getColor());

console.log(circle1.setColor("green"));
console.log(circle2.setColor("white"));
console.log(circle3.setColor("pink"));

console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle3.getArea());

console.log(circle1.getCircumference());
console.log(circle2.getCircumference());
console.log(circle3.getCircumference());

console.log(circle1.toString());
console.log(circle2.toString());
console.log(circle3.toString());











