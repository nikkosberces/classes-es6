//Object Consturctor
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = () => {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} year old`);
  };
}
//Factory
function personFactory(name, age) {
  const sayHello = () => {
    console.log(`Hello my name is ${name} and I'm ${age} year old`);
  };
  return { name, age, sayHello };
}

//Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} year old`);
  }
}

const person1 = new PersonConstructor("Nikko", 33);
person1.sayHello();

const person2 = personFactory("Carlo", 28);
person2.sayHello();

const person3 = new Person("Luis", 14);
person3.sayHello();

//Exercise
// class Animal {
//   constructor(name, species, age) {
//     this.name = name;
//     this.species = species;
//     this.age = age;
//   }

//   intruduce() {
//     console.log(
//       `Hi I'm a ${this.name} my name is ${this.species}and I'm ${this.age} years of age. `
//     );
//   }

//   birthday() {
//     this.age++;
//   }
// }

// const animal1 = new Animal("Dog ", "Dachshund", 5);
// animal1.intruduce();

// const animal2 = new Animal("Dog ", "German Shepherd", 4);
// animal2.intruduce();

// const animal3 = new Animal("Dog", "German Shepherd", 3);
// animal3.intruduce();

// animal3.birthday();
// console.log(`It's ${animal3.species}'s birthday!`);

//Another Exercise
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} make a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Browny", 3, "Leonberger");
dog1.speak();
