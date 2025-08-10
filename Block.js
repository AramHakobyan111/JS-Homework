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