function createAccount(pin, amount) {

    this.pin = pin;
    this.amount = amount;

    this.checkBalance = (pin)=>{
        if(pin === this.pin){
            console.log(this.amount)
        }else{
            console.log("Invalid PIN")
        }
    };

    this.deposit = (pin,amount)=>{
        if(pin === this.pin){
            this.amount + amount
        }else{
            console.log("Invalid PIN")
        }
    };   

    this.withdraw = (pin,amount)=>{
        if(pin === this.pin){
            if(amount >= this.amount) {
                console.log("Withdrawal amount exceeds amount balance. Transaction cancelled")
            }else{
                this.amount - amount
            }
        }else{
            console.log("Invalid PIN")
        }
    };

    this.changePin = (pin,new_pin)=>{
        if(pin === this.pin){
            this.pin = new_pin
        }else{
            console.log("Invalid PIN")
        }
    };
}

module.exports = { createAccount };
