class Person{
    constructor(name, age, income){
        this.name=name;
        this.age=age;
        this.income=income;
    }

    static compareByAge(personA, personB){
        return personA.age - personB.age;
    }

    static compareByIncome(personA, personB){
        return personA.income - personB.income;
    }

}

const user1=new Person('Dev', 27, 91000);
const user2=new Person('Das', 29, 80000);
const user3=new Person('Pratap', 26, 90000);

console.log(user1, user2, user3);

const users =[user1, user2, user3];
console.log(users);

users.sort(Person.compareByAge);
console.log(users);

users.sort(Person.compareByIncome);
console.log(users);