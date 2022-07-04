const computer = function(name, model) {
    this.name=name;
    this.model=model;
    // console.log(this);

    // this.aboutComputer = function(){
    //     console.log(`This computer name is ${this.name} and model is: ${this.model}`)
    // }

    //create and add in prototype
    computer.prototype.aboutComputer=function(){
        console.log(`This computer name is ${this.name} and model is: ${this.model}`)
    }
}

const pc = new computer('ASUS', 22);
// console.log(pc);

// const obj ={};
// obj.name='pratap';
// obj.no=16199170;
// console.log(obj);

// pc.aboutComputer();


//prototype
// const arr=[4, 7, 8 ,10, 9, 16, 91, 71];
// const evenNum=arr.filter(Element=> Element % 2 === 0);
// console.log(new Array());
// console.log(Array.prototype);
// console.log(evenNum);

// Array.prototype.filter=function(){
//     let arr=[];
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] % 2 === 0) {
//             arr.push(this[i]);
//         }
        
//     }
//     return arr;
// }
// console.log([4, 8, 7, 9, 10, 91, 16, 90].filter());


class HouseRent{
    constructor(amount=1000){
        this.amount=amount;
    }
    HouseRentIncreaseByYear(amount){
        this.amount += amount;
    }
    HouseRentDecreaseByYear(amount){
        this.amount -= amount;
    }
}
// const hr=new HouseRent();
// console.log(hr);
// hr.HouseRentIncreaseByYear(4000);
// console.log(hr);
// hr.HouseRentDecreaseByYear(500);
// console.log(hr);

//Static
// class Computer{
//     constructor(name, model){
//         this.name=name;
//         this.model=model;
//     }
//     aboutComputer(){
//         console.log(`This computer name is: ${this.name} and model is: ${this.model}`);
//     }

//     static sayAboutComputer(){
//         console.log(`This is a Computer`);
//     }

// }

// const com= new Computer();
// com.name='ASUS';
// com.model='A22';
// console.log(com);
// com.aboutComputer();
// console.log(com);
// com.sayAboutComputer(); //not function mean its static
// Computer.sayAboutComputer(); // static function call with class
// console.log(com);


//Get set
// class Computer{
//     constructor(name, model){
//         this.name=name;
//         this.model=model;
//     }
//     aboutComputer(){
//         console.log(`This computer name is: ${this.name} and model is: ${this.model}`);
//     }

//     get computerName(){
//         return this.name;
//     }

//     set computerName(name){
//         this.name=name;
//     }

// }
// const com=new Computer('ASUS', 'A222');
// console.log(com);

// //get
// console.log(com.computerName);

// //set
// com.computerName='My ASUS';
// console.log(com);


//Inheritance
// class Computer{
//     constructor(name, model){
//         this.name=name;
//         this.model=model;
//     }
//     aboutComputer(){
//         console.log(`This computer name: ${this.name} and the model is: ${this.model}`);
//     }
// }

// class Asus extends Computer{
//     constructor(name, model, waranty){
//         super(name, model)
//         this.waranty=waranty;
//     }

//     aboutWranty(){
//         console.log(`This ${this.name} provide ${this.waranty} year of waranty`);
//     }
// }

// const comInfo =new Asus('ASUS', 'A222', 5);
// console.log(comInfo);
// comInfo.aboutComputer();
// comInfo.aboutWranty();


//abstraction
// class Computer{
//     constructor(name, model){
//         this.name=name;
//         this.model=model;
//     }
//     aboutComputer(){
//         console.log(`This computer name: ${this.name} and the model is: ${this.model}`);
//     }
// }

// class Asus extends Computer{
//     constructor(name, model, waranty){
//         super(name, model)
//         this.waranty=waranty;
//     }
    
//     aboutWranty(){
//         console.log(`This ${this.name} provide ${this.waranty} year of waranty`);
//     }

//     useComputer(value){
//         const warantyLeft=(this.waranty * 12) - value;
//         console.log(`${warantyLeft} month warenty left`);
//     }
// }

// const comInfo =new Asus('ASUS', 'A222', 4);
// console.log(comInfo);
// comInfo.aboutComputer();
// comInfo.aboutWranty();
// comInfo.useComputer(10);


//encapsulation

// class Computer{
//     #waranty;
//     constructor(name, model, waranty){
//         this.name=name;
//         this.model=model;
//         this.#waranty=waranty;
//     }
//     aboutComputer(){
//         this.#aboutWranty(); //encapsulation call inside class work, outside class cant work
//         console.log(`This ${this.name} model no: ${this.model}`);
//     }

//     #aboutWranty(){
//         console.log(`This ${this.name} provide ${this.#waranty} year of waranty`);
//     }

//     useComputer(value){
//         const warantyLeft=(this.#waranty * 12) - value;
//         console.log(`${warantyLeft} month warenty left`);
//     }
// }

// const comInfo =new Computer('ASUS', 'A222', 4);
// console.log(comInfo);
// comInfo.aboutComputer();
// // comInfo.aboutWranty();
// comInfo.useComputer(10);
// // console.log(comInfo.#waranty); //encapsulation make private
// console.log(comInfo.waranty);

//polymorphisom

class Computer{
    constructor(name, model){
        this.name=name;
        this.model=model;
    }
    //this method override
    aboutComputer(){
        console.log(`This computer name: ${this.name} and the model is: ${this.model}`);
    }
}

class Asus extends Computer{
    constructor(name, model, color){
        super(name, model);
        this.color=color;
    }

    aboutComputer(){
        console.log(`This computer name: ${this.name} and the model is: ${this.model} and color is: ${this.color}`);
    }

}

const comInfo =new Asus('ASUS', 'A222', 'Black');
// console.log(comInfo);
// comInfo.aboutComputer();






//full oops concept
class Car{
    constructor(name, tier){
        this.name=name;
        this.tier=tier;
        // console.log(this);
    }

    aboutCar(){
        return `This car name is: ${this.name} and have ${this.tier} tier`;
    }

    static staticMethod(){
        return 'You could not access this method';
    }

    get getName(){
        return `The car name is: ${this.name}`;
    }

    set setName(value){
        this.name=value;
    }
}
const carInfo=new Car('BMW', 4);
console.log(carInfo);
console.log(carInfo.aboutCar());

//prototype
console.log(Car.prototype);
console.log(carInfo.__proto__);
console.log(Car.prototype === carInfo.__proto__);

//static
console.log(carInfo.staticMethod);
console.log(Car.staticMethod());

//get
console.log(carInfo.getName);

//set
carInfo.setName='TATA';
console.log(carInfo);

//inheritance

class Bike extends Car{
    constructor(name, tier, light){
        super(name, tier);
        this.light=light;
    }
    
    aboutLight(){
        return `This car have ${this.light} light`
    }

    //abstraction
    carPrice(quantity){
       let price=30000;
       let totalPrice=price * quantity;
       this.#hideMethod();
       return `You have to pay Rs: ${totalPrice}`; 
    }

    //Encapsulation
    #hideMethod(){
        console.log(`You cant access outside class`);
    }

    //Polymorphisom
    aboutCar(){
        return `This car name is: ${this.name} and have ${this.tier} tier and ${this.light} light`;
    }
}

const bke = new Bike('Hero', 3, 4);
bke.aboutLight=5;
console.log(bke);
console.log(bke.carPrice(4));

// console.log(carInfo.#hideMethod()); //Encapsulation

console.log(bke.aboutCar());