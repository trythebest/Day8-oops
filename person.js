class person{
    constructor(fname,lname,age,gender,qualification){
        this.name={
            firstname:fname,
            lastname:lname
        }
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
    }
    getFname(){
        return`Firstname is ${this.name.firstname}`
    }
    getLastname(){
        return`Lastname is ${this.name.lastname}`
    }
    getEligible(){
        if(this.age>21){
            return`${this.name.firstname} is eligible to Mingle`
        }
    }
}

const Mani= new person("mani","kandan",23,"male","BE");

console.log(Mani);
console.log(Mani.getFname());
console.log(Mani.getLastname());
console.log(Mani.getEligible());