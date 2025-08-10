//Task 1

function block(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {
  }
}

console.log("Start");
block(3);
console.log("End")

//Task 2

console.log("Start");
setTimeout(() => console.log("Timeout done"), 2000);
console.log("End");

//Task 3

function greetLater(name) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, 2000);
}

greetLater("Hayk");

//Task 4

setTimeout(() => console.log("First"), 3000);
setTimeout(() => console.log("Second"), 1000);
setTimeout(() => console.log("Third"), 2000);

//Task 5

setTimeout(() => console.log("Timer 1"), 0);
setTimeout(() => console.log("Timer 2"), 0);
setTimeout(() => console.log("Timer 3"), 0);
console.log("Main code finished");

//Task 6

console.log("Dialing...");

setTimeout(() => {
  console.log("Ringing...");
}, 1000);

setTimeout(() => {
  console.log("Call connected!");
}, 3000);

//task 7

function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(() => {
    callback();
  }, 3000);
}

boilWater(() => {
  console.log("Water ready!");
});

//Task 8

function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(callback, 2000);
}

function addPasta(callback) {
  console.log("Adding pasta...");
  setTimeout(callback, 1000);
}

boilWater(() => {
  addPasta(() => {
    console.log("Pasta is cooking!");
  });
});


//Task 9

const delay = Math.floor(Math.random() * 5 + 1) * 1000;

setTimeout(() => {
  console.log(`Message after ${delay / 1000} seconds`);
}, delay);

//Task 10

setTimeout(() => console.log("3..."), 0);
setTimeout(() => console.log("2..."), 1000);
setTimeout(() => console.log("1..."), 2000);
setTimeout(() => console.log("Go!"), 3000);

//Task 11

console.log("Task started");
const start = Date.now();

setTimeout(() => {
  const end = Date.now();
  console.log("Task finished");
  console.log(`Elapsed: ${(end - start) / 1000} seconds`);
}, 2000);

//Task 12

function wait(ms, callback) {
  setTimeout(callback, ms);
}

wait(2000, () => console.log("Waited 2 seconds"));

//Task 13

