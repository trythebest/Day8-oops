class uber{
    constructor(kilometer,price){
        this.kilometer=kilometer;
        this.price=price||10;
    }
    getRate(){
        return`Price for Riding ${this.price*this.kilometer}`
    }
    getFare(km){
        return`Price for kilometer ${km} Rate for Riding ${km*this.price}`
    }
}

var ride= new uber(20,8);
var ride1= new uber(55);

console.log(ride.getRate());
console.log(ride.getFare(7));

console.log(ride1.getRate());
console.log(ride1.getFare(15));