//TASK 1

const sym1 = Symbol('id');
const sym2 = Symbol('id');


const user = {
  [sym1]: 'Aram',
  [sym2]: 'Armen'
};


console.log(user[sym1]); 
console.log(user[sym2]);

const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols); 
symbols.forEach(sym => {
  console.log(`${sym.toString()} => ${user[sym]}`);
});


//Task 2

const shared1 = Symbol.for('session');

const shared2 = Symbol.for('session');

console.log(shared1 === shared2); 


console.log(Symbol.keyFor(shared1)); 
console.log(Symbol.keyFor(Symbol('local'))); 

const local = Symbol('session');
console.log(local === shared1); 


//Task 3



class AdminOnly {
  static [Symbol.hasInstance](obj) {
    return obj && obj.role === 'admin';
  }
}

const user1 = { name: 'Alice', role: 'admin' };
const user2 = { name: 'Bob', role: 'user' };
const user3 = { name: 'Charlie' };


console.log(user1 instanceof AdminOnly); 
console.log(user2 instanceof AdminOnly); 
console.log(user3 instanceof AdminOnly); 


//Task 4


const customArrayLike = {
  0: 'a',
  1: 'b',
  length: 2,
  [Symbol.isConcatSpreadable]: true 
};

let result1 = [].concat(customArrayLike);
console.log(result1); 
customArrayLike[Symbol.isConcatSpreadable] = false;
let result2 = [].concat(customArrayLike);
console.log(result2);


//Task 5

const iterableObject = {
  values: [10, 20, 30],   
  [Symbol.iterator]() {   
    let index = 0;       
    const values = this.values;

    return {
      next() {
        console.log(`next() call՝ index = ${index}`);
        if (index < values.length) {
          return { value: values[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};


for (const num of iterableObject) {
  console.log('call:', num);
}