// Task 1


class User1{
    constructor(user) {
        this.user = user;
    }
    
    getName() {
        return this.user;
    }
}

class User2{
    constructor(user) {
        this.user = user;
    }

    renderProfile(){
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${this.user}</h1>                     
            <p2>${this.user}</p2> `;
    }
}


//Task 2


class PaymentMethod{
    pay(amount){
        throw new Error("This method should be overridden");
    }
}

class creditCard extends PaymentMethod{
    pay(amount){
        console.log(`Paid ${amount} using Credit Card`);
    }
}   

class PayPal extends PaymentMethod{
    pay(amount){
        console.log(`Paid ${amount} using PayPal`);
    }
}

class PaymentProcessor{
    process(paymentmethod, amount){
        if(!(paymentmethod instanceof PaymentMethod)){
            throw new Error("Invalid payment method");
        }
        paymentmethod.pay(amount);
    }
}

const paypal = new PayPal()
const paymentProcessor = new PaymentProcessor();
paymentProcessor.process(paypal, 100);



// Task 3

class Shape {
    area() {
        throw new Error("This method should be overridden");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

function calculateArea(shape) {
    if (!(shape instanceof Shape)) {
        throw new Error("Invalid shape");
    }
    return shape.area();
}
const s= new Square(5);
console.log(calculateArea(s)); // 25
const c = new Circle(3);
console.log(calculateArea(c)); // 28.27
const r = new Rectangle(4, 5);
console.log(calculateArea(r)); // 20


// Task 4

class MessageService {
    sendMessage(message) {
        throw new Error("This method should be overridden");
    }
}

class EmailService extends MessageService {
    sendMessage(message) {
        console.log(`Sending email: ${message}`);
    }
}

class MessageSender{
    constructor(service) {
        if (!(service instanceof MessageService)) {
            throw new Error("Invalid message service");
        }
        this.service = service;
    }

    send(message) {
        this.service.sendMessage(message);
    }
}


//Task 5


class DocumentPrint{
    print(document) {
        throw new Error("This method should be overridden");
    }
}

class DocumentFax{
    fax(document) {
        throw new Error("This method should be overridden");
    }
}

class DocumentScan{
    scan(document) {
        throw new Error("This method should be overridden");
    }
}


