
class BankAccount {
    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} taka into account ${this.accountNumber}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} taka from account ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.owner}`);
        console.log(`Balance: ${this.balance} Taka`);
    }
}

let account1 = new BankAccount(1001, "John Doe", 700);
let account2 = new BankAccount(1002, "Aisha Moon", 600);

account1.deposit(200);
account1.withdraw(300);
account1.displayAccountInfo();

 console.log();

account2.deposit(100);
account2.withdraw(800); 
account2.displayAccountInfo();
