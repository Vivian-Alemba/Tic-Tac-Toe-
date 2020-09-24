
//factory functions
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw')
        }
    }
}
const circle1=createCircle(1)
console.log(circle1)
const circle2=createCircle(2)
console.log(circle2)

//an object
// const personFactory={
//     name:"",
//     age:"",
//     sayHello:function(){
//         console.log(name,age)

//     }
// }

function personFactory(name,age){
   return{name,
    age,
    sayHello(){
        console.log(name,age)
    }

}
}
const person1=personFactory("vivian",21)
console.log(person1)
person1.sayHello()

//an object
// const name = "Maynard"
// const color = "red"
// const number = 34
// const food = "rice"
// console.log(name, color, number, food) // Maynard red 34 rice
// console.log({name, color, number, food})

function createPeople(name,color,number,food){
 return{  name,
    color,
    number,
    food,
    people(){
        console.log(name,color,number,food)
    }
}
}
const people1=createPeople("Maynard","red",34,"rice")
console.log(people1)
people1.people()

//private variables and functions
// function FactoryFunction(string){
//     function capitalizeString(){
//           string.toUpperCase()}
    
//     function printString(){
//         console.log(`------${capitalizeString()}---------`)}
    
//     return {printString}

// }
// const taco=FactoryFunction('taco')
// taco.printString()


const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };
  
  const taco = FactoryFunction('taco');
  taco.printString()

  function counterCreator(){
      let count=0
      return function (){
          console.log(count)
          count++
      }
  }
  const counter=counterCreator()
  counter()
  counter()
  counter()
  counter()

  //A simple player game
//   function player(name,level){
//       //the health of the player
//       let health=level*2
//       function getLevel(){
//           level

//       }
//       function getName(){
//           name

//       }
//       function die(){
//           console.log("die")

//       }
//       function damage(x){
//           health-=x
//           //the player will die if its health is less than or equal to zero
//           if(health <=0)
//           die()

//       }
//       function attack(enemy){
//           if(level <enemy.getLevel()){
//               damage(1)
//               console.log(`${enemy.getName()} has damaged ${name}`)
//           }
//           if(level >=enemy.getLevel()){
//               enemy.damage(1)
//               console.log(`${name} has damaged ${enemy.getName()}`)
//           }
//       }
//       return {attack,damage,getLevel,getName}

//   }
//   const player1=player("vivian",10)
//   const player2=player("joy",5)
//   player1.attack(player2)







  const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName}
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy);
  

  //inheritance with factories
  const person=(name)=>{
      const sayName=()=>{console.log(`my name is ${name}`)}
      return {sayName}
  }
  const Nerd=(name)=>{
      const {sayName}=person(name)
      const doSomethingNerd=()=>{console.log('nerd stuff')}
      return {sayName,doSomethingNerd}
  }
  const jeff=Nerd('jeff')
  jeff.sayName()
  jeff.doSomethingNerd()

  //module
  const calculator=(()=>{
      const add=(a,b)=> a+b
      const substract=(a,b)=> a-b
      const divide=(a,b)=> a/b
      const multiply=(a,b)=> a*b

      return{
          add,substract,divide,multiply
      }
  })()
  calculator.add(3,5)
  calculator.substract(4,5)
  calculator.multiply(100,45)
  calculator.divide(100/5)

  


























//using factory functions

//using arrow functions/expression
// const personFactory=(name,age)=>{
    
//     const sayHello=()=>console.log("hello world")
//     return {name,age,sayHello}
// }
// const jeff=personFactory('jeff',27)
// console.log(jeff.name)
// jeff.sayHello()

//using function declaration

    // function personFactory(name,age){
    //     function sayHello(){
    //         console.log("my name is vivian")
    //     }
    //     return{name,age,sayHello}
    // }
    // const jeff=personFactory('jeff',27)
    // console.log(jeff.name)
    // jeff.sayHello()

    // //using a constructor
    // function personConstructor(name,age){
    //     this.name=name
    //     this.age=age
    //     this.sayHello=function(){
    //         console.log(this.name)
    //     }
    // }
// const person=new personConstructor("vivian",24)
// person.sayHello()


// function information(){
//     let person = {
//         name:"Maynard",
//         color:"red",
//         number:34,
//         food:"rice"

//     }
//     return person.name
    


// }
// information()
// console.log(person.name)


//scope
let a=17
function showValue(x){
    let a=x
}
showValue(99)
console.log(a)

//private variables and function
// function FactoryFunction(string){
//     function capitalizeString(){
//         string.toUpperCase()
//     }
//     function printString(){
//         console.log(`------${capitalizeString()}---------`)
//     }
//     return {printString}

// }
const taco=FactoryFunction('taco')
// printString()
// capitalizeString()
taco.printString()
//taco.capitalizeString

function player(name,level){
    let health=level*2
    function getLevel1(level){}
    function getName(name){}
    function die(){console.log("")}

    function damage(x){
        health -=x
        if(health <0){
            die()
        }
    }

    function attack(enemey){
        if(level <enemey.getLevel1()){
            damage(1)
            console.log(`${enemey.getName()} has damaged ${name}`)
        }
        if(level >=enemey.getLevel1()){
            enemey.damage(1)
            console.log(`${name} has damaged ${enemy.getName()}`)
        }
    }
    return(attack,damage,getLevel1,getName)

}
const jimmie=player('jim',10)
const badGuy=player('Jeff',5)
jimmie.attack(badGuy)
console.log(jimmie.attack(badGuy))


//finding the shortest word
function findShort(s) {
    const stringArray = s.split(" ");
  
  // Compares the length of two words, then moves to the next till complete.
  // Returns the words in order of length 
    const orderedArray = stringArray.sort((a, b) => {
      return a.length > b.length;
    })
    //returns the length of the first word(0 index of array) 
    return orderedArray[0].length;
  
  }

  //working on a kata
  //Simple, given a string of words, return the length of the shortest word(s).
  function findShort(s){
    let string=s.split(" ")
    const compareArrays=string.sort((a,b) =>{
      return a.length - b.length
    })
    return compareArrays[0].length
  }

// you can use map
  const findShort = str => Math.min(...str.split(' ').map(x => x.length))
  console.log(findShort("The quick brown fox ju map"))

  function findShort(str){
      return Math.min(...str.split(' ').map)

  }


  //Simple, remove the spaces from the string, then return the resultant string.
  function noSpace(x){
    return x.replace(/\s/g,'')


    console.log( a.split(' ').join('') );
    
  
  }




