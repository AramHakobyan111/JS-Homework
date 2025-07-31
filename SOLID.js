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
